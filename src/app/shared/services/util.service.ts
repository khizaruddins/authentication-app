import { inject, Injectable } from "@angular/core";
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';


@Injectable({
    providedIn: 'root'
})
export class UtilService {
    constructor() {}
    ngOnInit() {}

    snackBar = inject(MatSnackBar);

    openSnackBar(message: any, type: any, config?: MatSnackBarConfig) {
        const snackBarClass = type === 'success' ? 'snackbar-success' : 'snackbar-error';
        const matConfig: MatSnackBarConfig = {
            verticalPosition: config && config.verticalPosition ? config.verticalPosition : 'top',
            horizontalPosition: config && config.horizontalPosition ? config.horizontalPosition : 'center',
            panelClass: [snackBarClass],
            duration: config && config.duration ? config.duration : 10000
        };
        this.snackBar.open(message, 'DISMISS', matConfig);
    }
}