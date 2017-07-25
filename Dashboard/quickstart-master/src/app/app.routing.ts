import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SettingsComponent } from './settings/settings.component';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { PageNotFoundComponent } from './pagenotfound/pageNotFound.component';
import { LoginComponent } from './authentication/login/login.component';

export const appRoutes: Routes = [
  {
    path: 'index', component: ProfileComponent
  },
  {
    path: 'settings', component: SettingsComponent
  },
  {
    path: 'login', component: LoginComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class Route { }
