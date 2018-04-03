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
      alert('test');
      // this.reported = true;
      // navigator.geolocation.getCurrentPosition((position) => {
      //   this.position.latitude = position.coords.latitude;
      //   this.position.longitude = position.coords.longitude;
      //   this.petService.reportLocationOnPublic(this.position, this.param.petid)
      //     .subscribe(
      //       resp => {
      //         this.reported = false;
      //         if (resp.status === 200) {
      //           if (resp.body['message'] == 'ok') {
      //             this.successSwal.show();
      //           }
      //         }
      //       },
      //       err => {
      //         this.reported = false;
      //         if (err.status === 500) {
      //           this.errorSwal.show();
      //         } else if (err.status === 404) {
      //           alert('unknow pet');
      //         }
      //       }
      //     )
      // });
    }
    else {
      alert("Geolocation is not supported by this browser.");
    }
  }
}
