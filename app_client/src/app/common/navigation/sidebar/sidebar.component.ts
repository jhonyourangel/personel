import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../../services/authentication.service';
import { NavBarService } from '../../services/nav-bar.service';

import { User } from '../../services/user';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [AuthenticationService, User]
})
export class SidebarComponent implements OnInit {
  currentUser: User;
  isLoggedIn = false;

  constructor(
    private auth: AuthenticationService,
    private user: User,
    private navState$: NavBarService,
  ) {
    this.navState$.navState$.subscribe((aUser) => {
      this.user = aUser;
      this.isLoggedInF();
    });
  }

  ngOnInit() {
  }

  isLoggedInF() {
    this.isLoggedIn = this.auth.isLoggedIn();
    if (this.isLoggedIn) {
      this.user = this.auth.currentUser();
      this.currentUser = this.user;
      // console.log(this.user);
    }
    this.isLoggedIn = this.auth.isLoggedIn();
  }

}
