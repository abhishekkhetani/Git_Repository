import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component ({
     selector: 'header',
     templateUrl: 'app/views/header.html'
})
export class HeaderComponent {
  public title: string = 'Project Saver';    //Project Title
  
    constructor(private route: ActivatedRoute) { }
}
