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
  {
    path: 'index', component: ProfileComponent, children: [
      { path: 'header', component: HeaderComponent, pathMatch: 'full', outlet: 'header' },
      { path: 'navbar', component: NavComponent, pathMatch: 'full', outlet: 'navbar' },
      { path: 'footer', component: FooterComponent, pathMatch: 'full', outlet: 'footer' }
    ]
  },
  {
    path: 'settings', component: SettingsComponent, children: [
      { path: 'settings', component: HeaderComponent, pathMatch: 'full', outlet: 'header'},
      { path: 'settings', component: NavComponent, pathMatch: 'full', outlet: 'navbar' },
      { path: 'settings', component: FooterComponent, pathMatch: 'full', outlet: 'footer' }
    ]
  }
]

@NgModule({
    imports: [
        RouterModule.forChild(appRoutes)
    ],
    exports: [ RouterModule ]
})
export class ChildRoutes { }
