import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from './user';

@Injectable()
export class NavBarService {
  private navStateSource = new Subject<User>();
  navState$ = this.navStateSource.asObservable();
  constructor() { }

  setNavBarState(user: User) {
    this.navStateSource.next(user);
  }

}
