import { ProfileComponent } from './profile.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileFavouritesComponent } from './profile-favourites/profile-favourites.component';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule
  ],
  declarations: [
    ProfileFavouritesComponent,
    ProfileComponent
  ]
})
export class ProfileModule { }
