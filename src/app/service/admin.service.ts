import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class AdminService {

  apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  adminLogin(user) {
    return this.http.post(this.apiUrl + '/admin/login', user, {
      observe: 'response'
    });
  }

  getUserList() {
    return this.http.get(this.apiUrl + '/admin/user/list', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('usertoken')
      }),
      observe: 'response'
    });
  }

  getReport() {
    return this.http.get(this.apiUrl + '/admin/report/list', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('usertoken')
      }),
      observe: 'response'
    });
  }

  updateUser(user, username) {
    return this.http.post(this.apiUrl + '/admin/user/update/' + username, user, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('usertoken')
      }),
      observe: 'response'
    });
  }

  deleteReport(id) {
    return this.http.get(this.apiUrl + '/admin/report/remove/' + id, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('usertoken')
      }),
      observe: 'response'
    });
  }
}
