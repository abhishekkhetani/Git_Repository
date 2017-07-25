import { Component, NgModule } from '@angular/core';

// Import router directives
import { Router, ActivatedRoute } from '@angular/router';
//import { asd } from '../views/

// Decorator
@Component({
  selector: 'my-app',
  // template: `<h1>Hello {{name}}</h1>`,
  templateUrl: 'app/app.component.html'
  //styleUrls: ['./app/Views/environment_app.component.css']
})

export class AppComponent {
  //name = 'Abhishek!';

  
  constructor(router: Router, routerActive: ActivatedRoute) {

    router.events.subscribe((url: any) => console.log(url));
    //console.log(router.url);  // to print only path eg:"/login"
    //(router.url == "/login") ? this.showView = false : this.showView = true;
    //console.log(this.showView);
    
  }

}