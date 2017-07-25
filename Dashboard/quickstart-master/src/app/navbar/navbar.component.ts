import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'navbar',
  //template: `<h1>Hello {{name}}</h1>`,
  templateUrl: './navbar.html'
  //styleUrls: ['./app/Views/environment_app.component.css']
})
export class NavbarComponent {
  public showView: boolean = true  
  public nav: any[] = ["index", "settings", "login"]; //Navigation bar URLs

  constructor(private route: ActivatedRoute) { }
}
