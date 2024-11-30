import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from "../../core/input/input.component";
import { LOGIN_FORM_INFO } from '../../shared/form-infos/login-form.info';
import { Router, RouterLink } from '@angular/router';
import { ButtonComponent } from "../../core/button/button.component";
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import { VarsService } from '../../shared/services/vars.service';
import { ApiService } from '../../shared/services/api.service';
import { API_URLS } from '../../shared/constants/api-urls';
import { UtilService } from '../../shared/services/util.service';
import { CookieService } from '../../shared/services/cookie.service';
import { StorageService } from '../../shared/services/storage.service';


@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    InputComponent,
    RouterLink,
    ButtonComponent,
    MatCheckboxModule,
    MatIconModule,
    MatTooltipModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.required, Validators.email]
    }),
    password: new FormControl('', {
      validators: [
        Validators.required, 
        Validators.minLength(8), 
        Validators.maxLength(20), 
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{1,}$/)
      ]
    }),
    remember: new FormControl(false, {
      validators: [Validators.required]
    })
  });
  util = inject(UtilService);

  varsService = inject(VarsService);
  apiService = inject(ApiService);
  router = inject(Router);

  loginFormInfo = LOGIN_FORM_INFO;
  isMobile = false;
  submitBtnInfo = {
    type: 'submit',
    label: 'Login',
    isLoading: false
  }

  cookieService = inject(CookieService);
  storageService = inject(StorageService);

  ngOnInit() {
    this.patchEmail();
    this.isMobile = this.varsService.isMobile;
    this.varsService.mainLayoutConfig$.next({
      showFooter: false,
      showHeader: false
    });
  }

  patchEmail() {
    if (this.varsService.isBrowser) {
      const data = localStorage.getItem('loggedInEmail');
      if (data) {
        const userEmail = JSON.parse(data);
        this.loginForm.patchValue({email: userEmail});
      }
    }
  }
  
  onLoginSubmit() {
    const values = {...this.loginForm.value}
    if (this.loginForm.valid) {
      if (this.loginForm.get('remember')?.value) {
        delete values.remember;
        this.storageService.local.add('loggedInEmail', this.loginForm.value.email)
      } else {
        this.storageService.local.clear();
      }
      const url = API_URLS.POST_LOGIN();
      this.apiService.post(url, values).subscribe({
        next: (val: any) => {
          this.util.openSnackBar('LoggedIn successfully', 'DISMISS');
          this.router.navigate(['/welcome']);
          const userData = {
            id: Math.random(),
            name: 'abc',
            email: this.loginForm.value.email,
            number: '',
          }
          this.storageService.local.add('userData', userData);
          this.varsService.userData$.next(userData);
        }
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  getControlFromGroup(name: string): FormControl<any> {
    return this.loginForm.get(name) as FormControl<any>;
  }
}
