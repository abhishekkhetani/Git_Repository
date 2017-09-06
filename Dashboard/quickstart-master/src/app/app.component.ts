import { Component } from '@angular/core';
import { AuthenticationService } from './authentication';
import { Router, ActivatedRoute } from '@angular/router';
// import { asd } from '../views/

// Decorator
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
  // styleUrls: ['./app/Views/environment_app.component.css']
})

export class AppComponent {
  // name = 'Abhishek!';

  // constructor(private authService: AuthenticationService) {
  //  }

   constructor(private authService: AuthenticationService, router: Router, routerActive: ActivatedRoute) {

  //   router.events.subscribe((url: any) => console.log(url));
  //   //console.log(router.url);  // to print only path eg:"/login"
  //   //(router.url == "/login") ? this.showView = false : this.showView = true;
  //   //console.log(this.showView);

  // }

  }
}
