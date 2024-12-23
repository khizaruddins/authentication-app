import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LayoutComponent } from './core/layout/layout.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { authGuard, notLoggedInGuard } from './shared/guards/auth.guards';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path:  'login',
                component: LoginPageComponent,
                canMatch: [notLoggedInGuard]
            },
            {
                path: 'register',
                component: RegisterPageComponent,
                canMatch: [notLoggedInGuard]
            },
            {
                path: '',
                component: WelcomePageComponent,
                pathMatch: 'full',
                canMatch: [authGuard]
            },
            {
                path:'**',
                component: PageNotFoundComponent
            }
        ]
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];
