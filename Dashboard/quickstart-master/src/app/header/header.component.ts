import { Component, OnInit } from '@angular/core';
import { GlobalEventsManager } from '../shared/global-events-manager.service';
import { AuthenticationService } from '../authentication';
import { Router, CanActivate } from '@angular/router';

@Component({
  selector: 'header',
  //template: `<h1>Hello {{name}}</h1>`,
  templateUrl: 'header.component.html'
  //styleUrls: ['./app/Views/environment_app.component.css']
})
export class HeaderComponent implements OnInit {

   showHeader = false;
  // public title: string = 'Project Saver';    //Project Title

  // constructor(private globalEventsManager: GlobalEventsManager, private authenticationService: AuthenticationService,
  //   private router: Router) {
  //   this.globalEventsManager.showNavBarEmitter.subscribe((mode) => {
  //     this.showHeader = mode;
  //   });
  // }

   ngOnInit() { }

  // logout() {
  //   this.authenticationService.logout();
  //   this.showHeader = false;
  //   this.router.navigate(['/login']);
  // }
}