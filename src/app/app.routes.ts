import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LayoutComponent } from './core/layout/layout.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { authGuard } from './shared/guards/auth.guards';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path:  'login',
                component: LoginPageComponent,
            },
            {
                path: 'register',
                component: RegisterPageComponent
            },
            {
                path: '',
                component: WelcomePageComponent,
                pathMatch: 'full',
                canMatch: [authGuard]
            }
        ]
    },
];
