import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LayoutComponent } from './core/layout/layout.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path:  '',
                component: LoginPageComponent
            },
            {
                path: 'register',
                component: RegisterPageComponent
            },
            {
                path: 'welcome',
                component: WelcomePageComponent
            }
        ]
    },
];
