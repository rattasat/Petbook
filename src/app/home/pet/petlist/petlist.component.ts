import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { PetService } from '../../../service/pet.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-petlist',
  templateUrl: './petlist.component.html',
  styleUrls: ['./petlist.component.css']
})
export class PetlistComponent implements OnInit {

  message: String;
  pets: Object[];
  loading = true;
  constructor(
    private router: Router,
    private titleService: Title,
    private petService: PetService
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Petbook');
    if (!localStorage.getItem('username')) {
      this.router.navigate(['/login'])
    }
    else {
      this.petService.getPetList()
        .subscribe(
          resp => {
            this.loading = false;
            if (resp.status === 200) {
              this.message = resp.body['message'];
              if (this.message == 'ok') {
                this.pets = resp.body['pets']
              }
            }
          },
          err => {
            this.loading = false;
            localStorage.clear();
            this.router.navigate(['/login']);
          }
        )
    }
  }
}
