import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'footer',
  //template: `<h1>Hello {{name}}</h1>`,
  templateUrl: './footer.html'
  //styleUrls: ['./app/Views/environment_app.component.css']
})
export class FooterComponent  {
  //name = 'Abhishek!';
  constructor(private route: ActivatedRoute) { }
}
