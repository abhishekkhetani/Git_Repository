import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { SettingsComponent } from './settings.component';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { PageNotFoundComponent } from './pageNotFound.component';
import { LoginComponent } from './login.component';
import {HeaderComponent} from './header.component';
import {FooterComponent} from './footer.component';
import {NavComponent} from './navbar.component';
import {ChildRoutes} from './childRoutes.component';
//import { AuthGuard } from './../../common/auth.guard';
//import { SECURE_ROUTES } from './../../layout/secure/secure.routes';
//import { PUBLIC_ROUTES } from './../../layout/public/public.routes';

@NgModule({
  imports: [BrowserModule, ChildRoutes],
  exports: [ChildRoutes],
  declarations: [AppComponent, ProfileComponent, SettingsComponent, LoginComponent, HeaderComponent, NavComponent, FooterComponent],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
