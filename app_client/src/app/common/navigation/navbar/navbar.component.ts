import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../../services/data.service';
import { AuthenticationService } from '../../services/authentication.service';
import { NavBarService } from '../../services/nav-bar.service';
import { User } from '../../services/user';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
    providers: [AuthenticationService, DataService, User]
})
export class NavbarComponent implements OnInit {
    @Input() currentUser = '';
    @Input() aUser: User;

    isLoggedIn = false;

    constructor(
        private data: DataService,
        private auth: AuthenticationService,
        private user: User,
        private navState$: NavBarService,
        private router: Router
    ) {
        this.navState$.navState$.subscribe((aUser) => {
            this.user = aUser;
            this.isLoggedInF();
        });
    }

    ngOnInit() {
        this.isLoggedInF();
        this.navState$.navState$.subscribe((aUser) => {
            this.user = aUser;
            this.isLoggedInF();
        });
    }

    // check if is logedin
    isLoggedInF() {
        this.isLoggedIn = this.auth.isLoggedIn();
        if (this.isLoggedIn) {
            this.user = this.auth.currentUser();
            this.currentUser = this.user.name;
        } else {
            // if not loged in, then route to home
            this.currentUser = null;
            this.router.navigate(['/home']);
        }
        // call again to remove the user name button on the navigation bar
        this.isLoggedIn = this.auth.isLoggedIn();
    }

    // go to profile of this particular user
    seeProfile() {
        this.navState$.setNavBarState(this.user);
        this.router.navigate(['/profile/' + this.currentUserUserName()]);
    }

    // util function that extracts the username
    currentUserUserName() {
        const username = this.user.email.split('@')[0];
        return `${username}`;
    }

    logout() {
        // logout
        this.auth.logout();
        // run check if is still loged in, which should not
        // this will force an update of the nav bar with new links

        // called to update the sidebar
        this.navState$.setNavBarState(this.user);

        this.isLoggedInF();
    }

}
