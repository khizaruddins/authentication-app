export const LOGIN_FORM_INFO = {
    email: {
      label: 'Enter your Email ID',
      type: 'text',
      placeholder: 'Eg: abc@gmail.com',
      appearance: 'outline',
      errorMessage: {
        required: 'This field is required',
        email: 'Invalid email',
      },
    },
    password: {
      label: 'Enter your Password',
      placeholder: 'Eg. ********',
      type: 'password',
      appearance: 'outline',
      errorMessage: {
        required: 'This field is required',
        minlength: 'Minimum 8 characters required',
        maxlength: 'Maximum 20 characters allowed',
        pattern: 'Invalid password',
      }
    }
  }