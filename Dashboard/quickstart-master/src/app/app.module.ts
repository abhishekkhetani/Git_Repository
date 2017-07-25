import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SettingsComponent } from './settings/settings.component';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { PageNotFoundComponent } from './pagenotfound/pageNotFound.component';
import { LoginComponent } from './authentication/login/login.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Route } from './app.routing';

@NgModule({
  imports: [BrowserModule, Route],
  exports: [Route],
  declarations: [AppComponent, ProfileComponent, SettingsComponent, LoginComponent, FooterComponent, HeaderComponent, NavbarComponent],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
