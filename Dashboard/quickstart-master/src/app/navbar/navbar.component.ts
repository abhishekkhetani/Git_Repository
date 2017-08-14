import { Component, OnInit } from '@angular/core';
import { GlobalEventsManager } from '../shared/global-events-manager.service';
import { AuthenticationService } from '../authentication';
import { Router, CanActivate } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: 'navbar.component.html'
  //styleUrls: ['./app/Views/environment_app.component.css']
})
export class NavbarComponent implements OnInit {

  showNavbar = false;
  public nav: any[] = ["index", "settings", "login"]; //Navigation bar URLs

  constructor(private globalEventsManager: GlobalEventsManager, private authenticationService: AuthenticationService,
    private router: Router) {
    this.globalEventsManager.showNavBarEmitter.subscribe((mode) => {
      this.showNavbar = mode;
    });
  }

  ngOnInit() { }

  logout() {
    this.authenticationService.logout();
    this.showNavbar = false;
    this.router.navigate(['/login']);
  }
}