import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { VarsService } from '../../shared/services/vars.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-header',
    imports: [
        RouterLink,
        AsyncPipe
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {
    vars = inject(VarsService);
    isLoggedIn: Observable<boolean> | null = null;
    isLoggedOut: Observable<boolean> | null = null;

    ngOnInit() { 
        this.isLoggedIn = this.vars.isLoggedIn$;
        this.isLoggedOut = this.vars.isLoggedOut$;
    }
}
