import { Component, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { VarsService } from '../../shared/services/vars.service';

@Component({
    selector: 'app-welcome-page',
    imports: [],
    templateUrl: './welcome-page.component.html',
    styleUrl: './welcome-page.component.scss'
})
export class WelcomePageComponent {
    constructor() {    
        this.configureRouter();
    }
    router = inject(Router);
    vars = inject(VarsService);

    configureRouter() {
        this.router.events.subscribe({
            next: (val) => {
                if (val instanceof NavigationEnd) {
                    this.showHeaderFooter();
                }
            }
        })
    }

    showHeaderFooter() {
        this.vars.mainLayoutConfig$.next({
            showFooter: true,
            showHeader: true
        })
    }
}
