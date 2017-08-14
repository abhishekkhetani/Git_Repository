import { RouterModule, Routes } from '@angular/router';
import { LoginComponent, AuthenticationGuard } from './authentication/';

import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';

const appRoutes: Routes = [
  { path: 'index', component: ProfileComponent, canActivate: [AuthenticationGuard]},
  { path: 'settings', component: SettingsComponent },
  { path: 'login', component: LoginComponent }
]

export const Route = RouterModule.forRoot(appRoutes);
