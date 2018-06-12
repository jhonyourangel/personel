import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { AuthenticationService } from '../common/services/authentication.service';
import { NavBarService } from '../common/services/nav-bar.service';
import { DataService } from '../common/services/data.service';
import { User } from '../common/services/user';
import { SmartInputComponent } from '../components/smart-input/smart-input.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [AuthenticationService, DataService, User, SmartInputComponent]
})

export class ProfileComponent implements OnInit {
  public editModeButtonClass = 'btn  btn-warning';
  public editButtonTitle = ' Edit Profile';
  public editButtonIconClass = 'fa fa-edit m-right-xs';
  public editMode = false;

  constructor(
    @Inject(DOCUMENT) private document: any,
    private authentication: AuthenticationService,
    private data: DataService,
    private user: User,
    private navSer: NavBarService,
    private smartInput: SmartInputComponent
  ) { }

  ngOnInit() {
    console.log(this.document.location.pathname.split('/profile/')[1]);
    const username = this.document.location.pathname.split('/profile/')[1];

    this.data.getProfile(username, data => {
      const aUser = JSON.parse(data['_body']);
      console.log(aUser);

      aUser.profileImage = this.checkIFUserHasProfileImage(aUser);
      this.user = aUser;
      this.navSer.setNavBarState(aUser);

    }, err => {
      console.log('no profile found', err);
    });
  }

  // edit button title, icon and color change
  editModeF() {
    if (this.editModeButtonClass === 'btn  btn-warning') {
      // this part will enable the changes
      this.editMode = true;
      this.editModeButtonClass = 'btn  btn-success';
      this.editButtonTitle = ' Save Profile';
      this.editButtonIconClass = ' fa fa-save m-right-xs';
    } else {
      // this part will save the changes
      this.editMode = false;
      this.editModeButtonClass = 'btn  btn-warning';
      this.editButtonTitle = ' Edit Profile';
      this.editButtonIconClass = 'fa fa-edit m-right-xs';

      this.data.saveProfile(this.user,
        data => {
          console.log('saveProfile response:', JSON.parse(data['_body']));
        },
        err => {
          console.log(err);
        });
    }
    // console.log(this.smartInput.value);
    // this.smartInput.editModeF();
  }

  checkIFUserHasProfileImage(user) {
    if (user.profileImage === '') {
      return './images/ion.utale.profile.jpg';
    }
    return user.profileImage;
  }

}
