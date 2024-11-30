import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { InputComponent } from "../../core/input/input.component";
import { RouterLink } from '@angular/router';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SIGNUP_FORM_INFO } from '../../shared/form-infos/signup-form.info';
import { ButtonComponent } from "../../core/button/button.component";
import { IButton } from '../../shared/models/button.interface';
import { MatError } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { VarsService } from '../../shared/services/vars.service';
import { StorageService } from '../../shared/services/storage.service';
import { CookieService } from '../../shared/services/cookie.service';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    InputComponent,
    RouterLink,
    ButtonComponent,
    MatError,
    MatCheckboxModule
],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss'
})
export class RegisterPageComponent {

  sigupFormInfo = SIGNUP_FORM_INFO;
  registerBtnInfo: IButton = {
    label: 'Register',
    type: 'submit',
    isLoading: false
  }
  varsService = inject(VarsService);
  storageService = inject(StorageService);
  cookieService = inject(CookieService);

  ngOnInit() {
    this.varsService.mainLayoutConfig$.next({
      showFooter: false,
      showHeader: false
    });
  }

  signupForm = new FormGroup({
    firstName: new FormControl('', {
      validators: [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z]+$/)],
    }),
    lastName: new FormControl('', {
      validators: [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z]+$/)]
    }),
    email: new FormControl('', {
      validators: [Validators.required, Validators.email]
    }),
    passwords: new FormGroup({
      password: new FormControl('',  {
        validators: [Validators.required, 
          Validators.minLength(8), 
          Validators.maxLength(20), 
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{1,}$/)
        ],
      }),
      repass: new FormControl('', {
        validators: [Validators.required, 
          Validators.minLength(8), 
          Validators.maxLength(20), 
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{1,}$/)
        ]
      })
    }, {
      validators: [this.passwordMustBeSame]
    }),
    terms: new FormControl(false, {
      validators: [Validators.requiredTrue]
    })
  })

  getFormControl(controlName: string) {
    return this.signupForm.get(controlName) as FormControl<any>;
  }

  passwordMustBeSame(group: AbstractControl) {
    if (group.get('password')?.value === group.get('repass')?.value) {
      return null;
    } 
    return {notSame: true}
  }

  onRegister() {
    if (this.signupForm.valid) {
      const value: any = {
        ...this.signupForm.value,
      }
      delete value.passwords;
      delete value.terms;
      value['password'] = this.signupForm.get('passwords.password')?.value;
      console.log(value);
      const userData = {
        id: Math.random(),
        name: this.getFormControl('firstName').value + ' ' + this.getFormControl('lastName').value,
        email: this.getFormControl('email').value,
        number: '',
      }
      this.storageService.local.add('userData', userData);
      this.varsService.userData$.next(userData);
    } else  {
      this.signupForm.markAllAsTouched();
    }
  }
}
