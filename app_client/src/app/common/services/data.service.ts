import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';


@Injectable()
export class DataService {
  constructor(
    private http: Http,
    private authentication: AuthenticationService
  ) { }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Bearer ' + this.authentication.getToken());
  }

  getProfile(username, callBackRes, callBackErr) {
    const headers = new Headers();
    this.createAuthorizationHeader(headers);

    this.http.get('/api/profile/' + username, {
      headers: headers
    }).subscribe(
      data => {
        callBackRes(data);
      },
      err => {
        callBackErr(err);
      });
    return true;
  }

  // save profile information
  // or maybe update
  saveProfile(data, callBackRes, callBackErr) {
    const headers = new Headers();
    this.createAuthorizationHeader(headers);

    this.http.post('/api/save/profile', data, {
      headers: headers
    }).subscribe(
      aData => {
        callBackRes(aData);
      },
      err => {
        callBackErr(err);
      });
  }

  // get a pecific user
  getUserByName(url, callBackRes, callBackErr) {
    const headers = new Headers();
    this.createAuthorizationHeader(headers);

    this.http.get(url, {
      headers: headers
    }).subscribe(
      aUser => {
        callBackRes(JSON.parse(aUser['_body']));
      },
      err => {
        callBackErr(err);
      });
  }

  // get all users
  getUsers(url, callBackRes, callBackErr) {
    const headers = new Headers();
    this.createAuthorizationHeader(headers);

    return this.http.get(url, {
      headers: headers
    }).subscribe(
      users => {
        callBackRes(JSON.parse(users['_body']));
      },
      err => {
        callBackErr(err);
      });
  }


  // upload files service
  uploadFile(url, data, callBackRes, callBackErr) {
    const headers = new Headers();
    this.createAuthorizationHeader(headers);

    // post request needs url, data and then the header
     this.http.post(url, data, {
      headers: headers
     }).subscribe(
      users => {
        callBackRes(JSON.parse(users['_body']));
      },
      err => {
        callBackErr(err);
      });
  }

}
