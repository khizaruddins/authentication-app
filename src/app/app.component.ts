import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatFormFieldModule } from "@angular/material/form-field";

@Component({
    selector: 'app-root',
    imports: [
        RouterOutlet,
        MatFormFieldModule,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'authentication-app';
}
