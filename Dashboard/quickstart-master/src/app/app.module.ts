import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './profile/profile.component';
import { PageNotFoundComponent } from './pagenotfound/pageNotFound.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Route } from './app.routing';
import { AuthenticationModule } from './authentication/authentication.module';
import { GlobalEventsManager } from './shared/global-events-manager.service';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, Route, AuthenticationModule, HttpModule],
  declarations: [AppComponent, ProfileComponent, SettingsComponent, 
    FooterComponent, HeaderComponent, NavbarComponent, PageNotFoundComponent],
  providers: [GlobalEventsManager],
  bootstrap: [AppComponent]
})
export class AppModule { }