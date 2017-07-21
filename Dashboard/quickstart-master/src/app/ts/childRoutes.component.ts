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


export const appRoutes: Routes = [
  {path: 'index', component: ProfileComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'login', component: LoginComponent}
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [ RouterModule ]
})
export class ChildRoutes { }
