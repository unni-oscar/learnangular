import { ProfileComponent } from './../../components/profile/profile.component';
import { HomeComponent } from './../../components/home/home.component';
import { Routes } from '@angular/router';

export const SECURE_ROUTES: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'profile', loadChildren: './../../components/profile/profile.module#ProfileModule'}
];
