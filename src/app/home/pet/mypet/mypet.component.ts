import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PetService } from '../../../service/pet.service';
import { Title } from '@angular/platform-browser';
import { SwalComponent } from '@toverux/ngx-sweetalert2';
import { SelectItem } from 'primeng/api';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-mypet',
  templateUrl: './mypet.component.html',
  styleUrls: ['./mypet.component.css']
})
export class MypetComponent implements OnInit {

  param: any;
  pet: any = {};
  udPet: any = {};
  loading = true;
  url = location.host + '/pet/' + this.pet._id;
  deleting = false;
  test = "tasd"
  petGender: SelectItem[];
  @ViewChild('warning') private warning: SwalComponent;
  @ViewChild('wrnUpdate') private wrnUpdate: SwalComponent;

  constructor(
    private router: Router,
    private titleService: Title,
    private route: ActivatedRoute,
    private petService: PetService
  ) {
    this.route.params.subscribe(params => this.param = params);
    this.url = 'https://' + location.host + '/pet/' + this.param.petid;
    this.petGender = [
      {
        label: 'Unknow', value: null
      },
      {
        label: 'Male', value: 'Male'
      },
      {
        label: 'Female', value: 'Female'
      }
    ]
  }

  ngOnInit() {
    this.titleService.setTitle('Petbook');
    $('.materialboxed').materialbox();
    this.petService.getPet(this.param.petid)
      .subscribe(
        resp => {
          this.loading = false;
          if (resp.status === 200) {
            this.pet = resp.body['pet'];
            this.udPet.gender = this.pet.gender;
          }
        },
        err => {
          this.loading = false;
          if (err.status === 404) {
            if (err.error['message'] == 'not found pet') {
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

  deletePet() {
    this.deleting = true;
    this.petService.deletePet(this.param.petid).subscribe(
      resp => {
        this.deleting = false;
        if (resp.status === 200) {
          this.router.navigate(['/petlist']);
        }
      },
      err => {
        this.deleting = false;
        this.router.navigate(['/login']);
      }
    )
  }

  reportPet(message) {
    if (message.trim() == '') {
      this.warning.show();
    }
    else {
      this.deleting = true;
      this.petService.reportLost(this.param.petid, message)
        .subscribe(
          resp => {
            this.deleting = false;
            if (resp.status === 200) {
              this.router.navigate(['/reports/' + this.pet._id]);
            }
          },
          err => {
            this.deleting = false;
            if (err.status === 404) {
              if (err.error['message'] == 'not found pet') {
                this.router.navigate(['/petlist']);
              } else {
                localStorage.clear();
                this.router.navigate(['/login']);
              }
            } else {
              localStorage.clear();
              this.router.navigate(['/login']);
            }
          }
        )
    }
  }

  updateStatus() {
    this.deleting = true;
    this.petService.updatePet(this.param.petid, {
      lostStatus: false
    })
      .subscribe(
        resp => {
          this.deleting = false;
          if (resp.status === 200) {
            location.reload();
          }
        },
        err => {
          this.deleting = false;
          if (err.status === 404) {
            if (err.error['message'] == 'not found pet') {
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

  updatePet() {
    if (this.udPet.type == "") {
      delete this.udPet.type;
    }
    if (this.udPet.breed == "") {
      delete this.udPet.breed;
    }
    if (this.udPet.name == "") {
      delete this.udPet.name;
    }
    if (this.udPet.ageYear == "") {
      delete this.udPet.ageYear;
    }
    if (this.udPet.ageMonth == "") {
      delete this.udPet.ageMonth;
    }
    if (this.udPet.color == "") {
      delete this.udPet.color;
    }
    if (Object.keys(this.udPet).length <= 1 && this.udPet.gender == this.pet.gender) {
      this.wrnUpdate.show();
    }
    else {
      this.deleting = true;
      this.petService.updatePet(this.param.petid, this.udPet)
        .subscribe(
          resp => {
            this.deleting = false;
            if (resp.status === 200) {
              location.reload();
            }
          },
          err => {
            this.deleting = false;
            if (err.status === 404) {
              if (err.error['message'] == 'not found pet') {
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
  }

  clearPet() {
    delete this.udPet.type;
    delete this.udPet.breed;
    delete this.udPet.name;
    delete this.udPet.ageYear;
    delete this.udPet.ageMonth;
    this.udPet.gender = this.pet.gender;
    delete this.udPet.color;
  }

  chkNum(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
      return false;
    return true;
  }

  chkspace(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode == 32)
      return false;
    return true;
  }
}
