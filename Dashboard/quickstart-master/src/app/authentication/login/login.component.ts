import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component ({
     selector: 'login',
     templateUrl: 'app/authentication/login/login.html'
})
export class LoginComponent {
  constructor(private route: ActivatedRoute) { }
}
