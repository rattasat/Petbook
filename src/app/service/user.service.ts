import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class UserService {

  apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  userLogin(user) {
    return this.http.post(this.apiUrl + '/user/login', user, {
      observe: 'response'
    });
  }

  getUser() {
    return this.http.get(this.apiUrl + '/user', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('username')
      }),
      observe: 'response'
    });
  }



}
