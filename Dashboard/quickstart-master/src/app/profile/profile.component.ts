import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'my-profile',
  templateUrl: 'profile.component.html'
  //styleUrls: ['./app/Views/environment_app.component.css']
})
export class ProfileComponent  {
  //name = 'Abhishek!';
  constructor(private route: ActivatedRoute) { }
}
