import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component ({
     selector: 'navbar',
     templateUrl: 'app/views/navbar.html'
})
export class NavComponent {
  nav: any[] = ["index", "settings","login"]; //Navigation bar URLs
  
    constructor(private route: ActivatedRoute) { }
}
