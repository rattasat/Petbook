import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PetService } from '../../../service/pet.service';
import { Title } from '@angular/platform-browser';
import { SwalComponent } from '@toverux/ngx-sweetalert2';

@Component({
  selector: 'app-mypet',
  templateUrl: './mypet.component.html',
  styleUrls: ['./mypet.component.css']
})
export class MypetComponent implements OnInit {

  param: any;
  pet: any = {};
  loading = true;
  url = location.host + '/pet/' + this.pet._id;
  deleting = false;
  @ViewChild('warning') private warning: SwalComponent;

  constructor(
    private router: Router,
    private titleService: Title,
    private route: ActivatedRoute,
    private petService: PetService
  ) {
    this.route.params.subscribe(params => this.param = params);
    this.url = location.host + '/pet/' + this.param.petid;
  }

  ngOnInit() {
    this.titleService.setTitle('Petbook');
    this.petService.getPet(this.param.petid)
      .subscribe(
        resp => {
          this.loading = false;
          if (resp.status === 200) {
            this.pet = resp.body['pet'];
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

}
