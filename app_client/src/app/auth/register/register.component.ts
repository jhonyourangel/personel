import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../common/services/authentication.service';
import { User } from '../../common/services/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [AuthenticationService, User]
})
export class RegisterComponent implements OnInit {
  credentials: any;
  constructor(private authentication: AuthenticationService, private router: Router) { }

  // clear Credentials when inizializing
  ngOnInit() {
    this.credentials = {
      email: '',
      password: '',
      name: '',
      surname: ''
    };
  }

  // submit and go to profile
  onSubmit() {
    console.log('form action');
    console.log('credentials :', this.credentials);
    this.authentication.register(this.credentials, () => {
      console.log('credentials --', this.credentials);
      this.router.navigate(['/profile/' + this.credentials.email.split('@')[0]]);
    });
  };

}
