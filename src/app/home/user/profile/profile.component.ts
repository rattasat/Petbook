import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../service/user.service';
import { Title } from '@angular/platform-browser';
import { SwalComponent } from '@toverux/ngx-sweetalert2';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: any = {};
  udUser: any = {};
  loading = true;
  updating = false;
  @ViewChild('warning') private warning: SwalComponent;

  constructor(
    private router: Router,
    private titleService: Title,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Petbook');
    this.userService.getUser()
      .subscribe(
        resp => {
          this.loading = false;
          if (resp.status === 200) {
            this.user = resp.body['user'];
          }
        },
        err => {
          this.loading = false;
          localStorage.clear();
          this.router.navigate(['/login']);
        }
      )
  }

  updateUser() {
    if (this.udUser.firstName == "") {
      delete this.udUser.firstName;
    }
    if (this.udUser.lastName == "") {
      delete this.udUser.lastName;
    }
    if (this.udUser.tel == "") {
      delete this.udUser.tel;
    }
    if (this.udUser.email == "") {
      delete this.udUser.email;
    }
    if (Object.keys(this.udUser).length != 0) {
      this.updating = true;
      this.userService.updateUser(this.udUser)
        .subscribe(
          resp => {
            this.updating = false;
            if (this.udUser.firstName) {
              localStorage.setItem('firstName', this.udUser.firstName);
            }
            location.reload();
          },
          err => {
            this.updating = false;
            localStorage.clear();
            this.router.navigate(['/login']);
          }
        )
    }
    else {
      this.warning.show();
    }
  }

  clearUser() {
    delete this.udUser.firstName;
    delete this.udUser.lastName;
    delete this.udUser.tel;
    delete this.udUser.email;
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
