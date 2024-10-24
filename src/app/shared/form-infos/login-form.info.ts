export const LOGIN_FORM_INFO = {
    email: {
      label: 'Enter your Email ID',
      type: 'text',
      placeholder: 'Eg: abc@gmail.com',
      errorMessage: {
        required: 'This field is required',
        email: 'Email is invalid',
      },
    },
    password: {
      label: 'Enter your Password',
      placeholder: 'Eg. ********',
      type: 'password',
      appearance: 'outline',
      hint: 'Password must contain minimum eight characters, at least one uppercase letter, one lowercase letter and one number',
      errorMessage: {
        required: 'This field is required',
        minlength: 'Minimum 8 characters required',
        maxlength: 'Maximum 20 characters allowed',
        pattern: 'Password is Invalid',
      }
    }
  }