import { Component, OnInit } from '@angular/core';
import { User } from '../common/services/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers : [ User]

})
export class HomeComponent implements OnInit {

  constructor(private user : User) { }

  ngOnInit() : void {
    
  }

}
