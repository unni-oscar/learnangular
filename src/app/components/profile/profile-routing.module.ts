import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { ProfileFavouritesComponent } from './profile-favourites/profile-favourites.component';

const routes: Routes = [
  { path: '', component: ProfileComponent },
  { path: 'favourites', component: ProfileFavouritesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
