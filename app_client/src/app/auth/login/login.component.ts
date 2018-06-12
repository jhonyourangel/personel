import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../common/services/authentication.service';
import { NavBarService } from '../../common/services/nav-bar.service';
import { User } from '../../common/services/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthenticationService, User]
})
export class LoginComponent implements OnInit {
  credentials: any;
  isLoggedIn = false;

  constructor(
    private authentication: AuthenticationService,
    private router: Router,
    private navSer: NavBarService) { }

  ngOnInit() {
    this.credentials = {
      email: '',
      password: ''
    };
  }

  // submit and go to profile
  onSubmit() {
    console.log('login pressed')
    this.authentication.login(this.credentials, () => {
      this.router.navigate(['/profile/' + this.credentials.email.split('@')[0]]);
    });

  };



}
