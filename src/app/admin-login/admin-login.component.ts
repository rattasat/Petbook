import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  user: any = {};
  submitting = false;
  invalid = false;

  constructor(
    private titleService: Title,
    private router: Router,
    private adminService: AdminService
  ) { }

  ngOnInit() {
    if (localStorage.getItem('usertoken')) {
      this.router.navigate(['/admin/userlist']);
    }
    this.titleService.setTitle('Petbook Admin | Login')
  }

  login() {
    this.submitting = true;
    this.adminService.adminLogin(this.user).subscribe(
      resp => {
        this.submitting = false;
        if (resp.status === 200) {
          localStorage.setItem('usertoken', resp.body['auth']);
          localStorage.setItem('firstName', resp.body['username']);
          this.router.navigate(['/admin/userlist']);
        }
      },
      err => {
        this.submitting = false;
        if (err.status === 404) {
          this.invalid = true;
        } else {
          this.router.navigate(['login']);
        }
      }
    )
  }

  chkspace(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode == 32)
      return false;
    return true;
  }

  chkNum(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
      return false;
    return true;
  }

}
