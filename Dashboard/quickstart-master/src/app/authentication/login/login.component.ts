import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../authentication/';
import { User } from '../../models/user';
import { GlobalEventsManager } from '../../shared/global-events-manager.service';

@Component({
    templateUrl: 'login.html'
})

export class LoginComponent implements OnInit {
    model: User = { UserName: '', Password: '' };
    loading = false;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authService: AuthenticationService,
        private globalEventsManager: GlobalEventsManager) { }

    ngOnInit() { }

    login() {
        this.loading = true;
        this.authService.login(this.model.UserName, this.model.Password);
        // Tell the global event manger to show the nav bar after successfull login
         this.globalEventsManager.showNavBar(true);
        this.router.navigate(['/']);

    }
}
