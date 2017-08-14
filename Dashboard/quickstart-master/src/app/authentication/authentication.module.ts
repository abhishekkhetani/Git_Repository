import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AuthenticationGuard, AuthenticationService, LoginComponent } from '../authentication/';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    exports: [],
    declarations: [LoginComponent],
    providers: [
        AuthenticationGuard,
        AuthenticationService
    ]
})
export class AuthenticationModule { }
