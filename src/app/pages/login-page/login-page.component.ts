import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from "../../core/input/input.component";
import { LOGIN_FORM_INFO } from '../../shared/form-infos/login-form.info';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from "../../core/button/button.component";
import { MatCheckboxModule } from '@angular/material/checkbox';


@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    InputComponent,
    RouterLink,
    ButtonComponent,
    MatCheckboxModule
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
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,20}$/)]
    }),
    remember: new FormControl(false, {
      validators: [Validators.required]
    })
  });

  loginFormInfo = LOGIN_FORM_INFO;
  submitBtnInfo = {
    type: 'submit',
    label: 'Login',
    isLoading: false
  }
  
  onLoginSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  getControlFromGroup(name: string): FormControl<any> {
    return this.loginForm.get(name) as FormControl<any>;
  }
}
