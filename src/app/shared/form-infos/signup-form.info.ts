export const SIGNUP_FORM_INFO = {
    firstName: {
        type: 'text',
        placeholder: 'Eg. Smith',
        label: 'Enter your first name',
        errorMessage: {
            required: 'This field is required',
            minlength: 'Minimul 3 characters required',
            pattern: 'Only Characters are allowed'
        }
    },
    lastName: {
        type: 'text',
        placeholder: 'Eg. John',
        label: 'Enter your last name',
        errorMessage: {
            required: 'This field is required',
            minlength: 'Minimul 3 characters required',
            pattern: 'Only Characters are allowed'
        }
    },
    email: {
        type: 'email',
        placeholder: 'Eg. john@gmail.com',
        label: 'Enter your registered email',
        errorMessage: {
            email: 'Invalid email',
            required: 'This field is required',
        }
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
    },
    repass: {
        label: 'Re-Enter your Password',
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