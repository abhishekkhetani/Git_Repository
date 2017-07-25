import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'header',
  //template: `<h1>Hello {{name}}</h1>`,
  templateUrl: './header.html'
  //styleUrls: ['./app/Views/environment_app.component.css']
})
export class HeaderComponent {
  public showView: boolean = true;
  public title: string = 'Project Saver';    //Project Title
  constructor(private route: ActivatedRoute) { }
}
