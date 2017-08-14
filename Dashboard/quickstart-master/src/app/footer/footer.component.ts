import { Component, OnInit } from '@angular/core';
import { GlobalEventsManager } from '../shared/global-events-manager.service';
import { AuthenticationService } from '../authentication';
import { Router, CanActivate } from '@angular/router';

@Component({
  selector: 'footer',
  templateUrl: 'footer.component.html'
  //styleUrls: ['./app/Views/environment_app.component.']
})
export class FooterComponent  implements OnInit {
      showFooter = false;
    // constructor(private globalEventsManager: GlobalEventsManager, private authenticationService: AuthenticationService,
    // private router: Router) {
    //     this.globalEventsManager.showNavBarEmitter.subscribe((mode) => {
    //           this.showFooter = mode;
    //     });
    // }

     ngOnInit() { }

    // logout() {
    //     this.authenticationService.logout();
    //     this.showFooter = false;
    //     this.router.navigate(['/login']);
    // }
}