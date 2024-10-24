
export interface IInput {
    label?: string;
    type: string;
    placeholder: string;
    errorMessage: {
        required?: string;
        minlength?: string;
        maxlength?: string;    
        email?: string;
        pattern?: string;
    }
}