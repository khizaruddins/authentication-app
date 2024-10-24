import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from "../../core/input/input.component";
import { IInput } from '../../shared/models/input.interface';

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

  loginFormInfo = {
    email: {
      type: 'text',
      placeholder: 'Eg: abc@gmail.com',
      errorMessage: {
        required: 'This field is required',
        email: 'Email is invalid',
      },
    },
    password: {
      placeholder: '',
      type: 'password',
      errorMessage: {
        required: 'This field is required',
        minlength: 'Minimum 8 characters required',
        maxlength: 'Maximum 20 characters allowed',
        pattern: 'Password must contain minimum eight characters, at least one uppercase letter, one lowercase letter and one number'
      }
    }
  }
  
  onLoginSubmit() {
    
  }
}
