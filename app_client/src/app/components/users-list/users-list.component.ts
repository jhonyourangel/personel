import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { DOCUMENT } from '@angular/common';
import { AuthenticationService } from '../../common/services/authentication.service';
import { DataService } from '../../common/services/data.service';
import { User } from '../../common/services/user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
  providers: [AuthenticationService, DataService, User]
})
export class UsersListComponent implements OnInit {
  public aaUsers = [
    { _id: '59af540c7cc3c11d199fa55b', name: 'Alex Ionel Utale' }
  ];
  public searchBar = '';
  private urlIndex = '';

  constructor(
    @Inject(DOCUMENT) private document: any,
    private router: Router,
    private authentication: AuthenticationService,
    private data: DataService,
    private user: User
  ) {

    this.updateUsers();
  }

  getEntireUserList(url) {
    // get entire list of users
    // '/api/get/users'
    this.data.getUsers(url, aUsers => {
      this.aaUsers = aUsers;
    },
      err => {
        console.log(err);
      });
  }

  updateList(url) {
    // get user by name
    // this is a regex search, insert any
    // '/api/get/user/ion'
    console.log('get ions users: ', 'URL : ', url);
    this.data.getUserByName(url, aUsers => {
      console.log(aUsers);
      this.aaUsers = aUsers;
    },
      err => {
        console.log(err);
      });
  }

  searchBarValueChange(event: any) { // without type info
    this.searchBar = event.target.value;
    this.updateList('/api/get/user/' + this.searchBar);
  }

  getButtonInfo(username: string) {
    console.log(username);
    this.router.navigate(['/profile/' +  username.split('@')[0]]);
  }

  ngOnInit() {

  }

  updateUsers() {
    this.urlIndex = this.document.location.pathname;
    if (this.urlIndex === '/users') {
      this.getEntireUserList('/api/get/users');
    } else {
      console.log(this.urlIndex.split('/users/')[1]);
      this.updateList('/api/get/user/' + this.urlIndex.split('/users/')[1]);
    }
  }

}
