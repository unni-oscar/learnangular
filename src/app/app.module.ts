import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';

import { PublicComponent, PublicFooterComponent, PublicHeaderComponent} from './_layout/public';
import { SecureComponent, SecureHeaderComponent, SecureFooterComponent, SecureSidebarComponent} from './_layout/secure';
@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    SecureComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    PublicHeaderComponent,
    PublicFooterComponent,
    SecureFooterComponent,
    SecureHeaderComponent,
    SecureSidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
