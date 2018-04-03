import { Component, OnInit, trigger, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { PetService } from '../service/pet.service';
import { SwalComponent } from '@toverux/ngx-sweetalert2';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-public-pet',
  templateUrl: './public-pet.component.html',
  styleUrls: ['./public-pet.component.css']
})
export class PublicPetComponent implements OnInit {

  lineFri = environment.lineFri;
  param: any;
  user = {
    firstName: String,
    lastName: String,
    tel: String,
    email: String
  };
  pet: any = {};
  position: any = {};
  loading = true;
  reported = false;
  timer = 1500;

  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('errorSwal') private errorSwal: SwalComponent;

  constructor(
    private titleService: Title,
    private route: ActivatedRoute,
    private petService: PetService,
    private router: Router) {
    this.route.params.subscribe(params => this.param = params);
  }

  ngOnInit() {
    this.titleService.setTitle('Petbook');
    this.petService.getPetOnPublic(this.param.petid)
      .subscribe(
        resp => {
          this.loading = false;
          if (resp.status === 200) {
            if (resp.body['message'] == 'ok') {
              this.user = resp.body['user']
              this.pet = resp.body["pet"];
            }
          }
        },
        err => {
          this.loading = false;
          if (err.status === 404) {
            this.router.navigate(['/error/notfound'])
          }
        }
      )
  }

  reportLocation() {
    if (navigator.geolocation) {
      this.reported = true;
      navigator.geolocation.getCurrentPosition((position) => {
        this.reported = false;
        this.position.latitude = position.coords.latitude;
        this.position.longitude = position.coords.longitude;
        this.petService.reportLocationOnPublic(this.position, this.param.petid)
          .subscribe(
            resp => {
              this.reported = false;
              if (resp.status === 200) {
                if (resp.body['message'] == 'ok') {
                  this.successSwal.show();
                }
              }
            },
            err => {
              this.reported = false;
              if (err.status === 500) {
                this.errorSwal.show();
              } else if (err.status === 404) {
                alert('unknow pet');
              }
            }
          )
      }, (error) => {
        this.reported = false;
        switch (error.code) {
          case error.PERMISSION_DENIED:
            this.reported = false;
            alert("User denied the request for Geolocation.");
            break;
          case error.POSITION_UNAVAILABLE:
            this.reported = false;
            alert("Location information is unavailable.");
            break;
          case error.TIMEOUT:
            this.reported = false;
            alert("The request to get location timed out.");
            break;
        }
      }, {
          timeout: 10000
        });
    }
    else {
      alert("Geolocation is not supported by this browser.");
    }
  }
}
