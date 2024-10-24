import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from "../../core/input/input.component";
import { IInput } from '../../shared/models/input.interface';
import { LOGIN_FORM_INFO } from '../../shared/form-infos/login-form.info';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputComponent
],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  passwordCtrl: FormControl<any> = new FormControl('', {
    validators: [Validators.required, Validators.minLength(8), Validators.maxLength(20), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)]
  });
  emailCtrl = new FormControl('', {
      validators: [Validators.required, Validators.email]
  });

  loginFormInfo = LOGIN_FORM_INFO;
  
  onLoginSubmit() {
    
  }
}
