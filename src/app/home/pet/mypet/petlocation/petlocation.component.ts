import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PetService } from '../../../../service/pet.service';
import { MapsAPILoader } from '@agm/core';
import { SwalComponent } from '@toverux/ngx-sweetalert2';

@Component({
  selector: 'app-petlocation',
  templateUrl: './petlocation.component.html',
  styleUrls: ['./petlocation.component.css']
})
export class PetlocationComponent implements OnInit {

  //date for parameter
  dates: Date[] = null;
  sdate: Date;
  fdate: Date;
  //petid param
  param: any;
  //res message 
  message: String;
  //map zoom 
  maxzoom = 16;
  //map markers
  markers: any;
  //loading
  finding = false;
  //maxdate
  maxDate = new Date();

  latlngBounds: any;

  @ViewChild('notfondSwal') private notfondSwal: SwalComponent;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private petService: PetService,
    private mapsAPILoader: MapsAPILoader
  ) {
    this.route.params.subscribe(params => this.param = params);
  }

  ngOnInit() {
    this.petService.getLocation({
      sdate: null,
      fdate: null
    }, this.param.petid)
      .subscribe(
        resp => {
          this.message = resp.body['message'];
          if (resp.status === 200) {
            if (resp.body['message'] == 'ok') {
              this.markers = resp.body['location'];
              this.setMap();
            }
          }
        },
        err => {
          this.message = err.error['message'];
          if (err.status === 404) {
            if (err.error['message'] == 'not found pet') {
              this.router.navigate(['/petlist']);
            } else if (err.error['message'] == 'not found user') {
              this.router.navigate(['/login']);
            }
          } else {
            this.router.navigate(['/login']);
          }
        }
      )
  }

  getLocation() {
    this.finding = true;
    if (this.dates == null) {
      this.sdate = null;
      this.fdate = null;
    } else if (this.dates[1] == null) {
      this.sdate = new Date(this.dates[0]);
      this.fdate = new Date(this.dates[0]);
      this.fdate.setHours(23, 59, 59, 999);
    } else if (this.dates[1] != null) {
      this.sdate = new Date(this.dates[0]);
      this.fdate = new Date(this.dates[1]);
      this.fdate.setHours(23, 59, 59, 999);
    }
    this.petService.getLocation({
      sdate: this.sdate,
      fdate: this.fdate
    }, this.param.petid)
      .subscribe(
        resp => {
          this.finding = false;
          if (resp.status === 200) {
            if (resp.body['message'] == 'ok') {
              this.markers = resp.body['location'];
              this.setMap();
            } else if (resp.body['message'] == 'no location') {
              this.notfondSwal.show();
            }
          }
        },
        err => {
          this.finding = false;
          if (err.status === 404) {
            if (err.body['message'] == 'not found pet') {
              this.router.navigate(['/petlist']);
            } else {
              this.router.navigate(['/login']);
            }
          } else {
            this.router.navigate(['/login']);
          }
        }
      )
  }

  setMap() {
    this.mapsAPILoader.load().then(() => {
      this.latlngBounds = new window['google'].maps.LatLngBounds();
      this.markers.forEach(location => {
        this.latlngBounds.extend(new window['google'].maps.LatLng(location.latitude, location.longitude));
      });
    });
  }
}
