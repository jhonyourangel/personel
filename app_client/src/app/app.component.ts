import { Component } from '@angular/core';
import { User } from './common/services/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  user = {
    address: '',
    email: 'alexionutale@me.com',
    name: 'Ionel Utale',
    phone: '',
    profileImage: '../assets/images/ion.utale.profile.jpg',
    qualification: ''
  }
}
