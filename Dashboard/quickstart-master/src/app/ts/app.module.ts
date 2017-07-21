import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { SettingsComponent } from './settings.component';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { PageNotFoundComponent } from './pageNotFound.component';
import { LoginComponent } from './login.component';

//import { AuthGuard } from './../../common/auth.guard';
//import { SECURE_ROUTES } from './../../layout/secure/secure.routes';
//import { PUBLIC_ROUTES } from './../../layout/public/public.routes';


export const appRoutes: Routes = [
  {path: 'index', component: ProfileComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'login', component: LoginComponent}
]

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations: [AppComponent, ProfileComponent, SettingsComponent, LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }