import { LoginComponent } from './../../components/login/login.component';
import { Routes } from '@angular/router';

export const PUBLIC_ROUTES: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'login', component: LoginComponent }
];
