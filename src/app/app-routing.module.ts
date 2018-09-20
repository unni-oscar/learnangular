import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PUBLIC_ROUTES, PublicComponent } from './_layout/public';
import { SECURE_ROUTES, SecureComponent } from './_layout/secure';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: SecureComponent, children: SECURE_ROUTES },
  { path: '', component: PublicComponent, children: PUBLIC_ROUTES },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
