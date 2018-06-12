import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

import { User } from './user';


@Injectable()
export class AuthenticationService {
    private subject = new Subject<any>();

    data: any;
    err: any;
    constructor(private http: Http,
        private user: User,
        @Inject(DOCUMENT) private document: any) {
        // console.log(this.document.location.origin);
    }

    saveToken(token) {
        localStorage.setItem('mean-token', token);
    };

    getToken() {
        return localStorage.getItem('mean-token');
    };

    isLoggedIn() {
        const token = this.getToken();
        let payload;
        if (token !== 'undefined' && token != null) {

            payload = token.split('.')[1];
            payload = atob(payload);
            payload = JSON.parse(payload);

            return payload.exp > Date.now() / 1000;
        } else {
            return false;
        }
    };

    currentUser() {
        if (this.isLoggedIn()) {
            const token = this.getToken();
            let payload = token.split('.')[1];
            let aUser: User;

            payload = atob(payload);
            aUser = JSON.parse(payload);

            this.user.name = aUser.name;
            this.user.email = aUser.email;
            this.user.profileImage = aUser.profileImage;

            return this.user;
        }
    };

    register(user, callback) {
        return this.http.post(this.getUrl() + '/api/register', user).subscribe(data => {
            console.log(JSON.parse(data['_body']))
            this.saveToken(JSON.parse(data['_body']).token);
            this.currentUser();
            callback();
        });
    };

    login(user, callback) {
        return this.http.post(this.getUrl() + '/api/login', user).subscribe(data => {
            console.log("login authentication class");
            console.log(JSON.parse(data['_body']).token)
            this.saveToken(JSON.parse(data['_body']).token);
            this.currentUser();
            callback();
        });
    };

    logout() {
        localStorage.removeItem('mean-token');
        this.currentUser();
    };

    // development only
    getUrl() {
        return ''; // 'http://127.0.0.1:3000'; //this.document.location.origin;
    }

}
