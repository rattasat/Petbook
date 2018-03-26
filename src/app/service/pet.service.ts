import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class PetService {

  apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  getPetList() {
    return this.http.get(this.apiUrl + '/pet/petlist', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('username')
      }),
      observe: 'response'
    });
  }

  getPet(petid) {
    return this.http.get(this.apiUrl + '/pet/' + petid, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('username')
      }),
      observe: 'response'
    });
  }

  createPet(pet) {
    return this.http.post(this.apiUrl + '/pet/create', pet, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('username')
      }),
      observe: 'response'
    });
  }

  deletePet(petid) {
    return this.http.get(this.apiUrl + '/pet/delete/' + petid, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('username')
      }),
      observe: 'response'
    });
  }

  getLocation(date, petid) {
    return this.http.post(this.apiUrl + '/location/get/' + petid, date, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('username')
      }),
      observe: 'response'
    });
  }

  getPetOnPublic(petid) {
    return this.http.get(this.apiUrl + '/pub/pet/' + petid, {
      observe: 'response'
    });
  }

  reportLocationOnPublic(position, petid) {
    return this.http.post(this.apiUrl + '/pub/location/' + petid,
      position, {
        observe: 'response'
      });
  }

  reportLost(petid, message) {
    return this.http.post(this.apiUrl + '/report/create/' + petid, {
      message: message
    }, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('username')
        }),
        observe: 'response'
      });
  }

  updatePet(petid, pet) {
    return this.http.post(this.apiUrl + '/pet/update/' + petid, pet, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('username')
      }),
      observe: 'response'
    });
  }

  getReport(petid) {
    return this.http.get(this.apiUrl + '/report/get/' + petid, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('username')
      }),
      observe: 'response'
    });
  }

}
