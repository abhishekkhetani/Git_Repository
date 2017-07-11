import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'my-profile',
  //template: `<h1>Hello {{name}}</h1>`,
  templateUrl: 'app/views/profile.html'
  //styleUrls: ['./app/Views/environment_app.component.css']
})
export class ProfileComponent  {
  //name = 'Abhishek!';
  constructor(private route: ActivatedRoute) { }
}
