import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { environment } from '../../environments/environment';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any = {};
  submitting = false;
  invalid = false;
  lineFri = environment.lineFri;

  constructor(
    private titleService: Title,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    if (localStorage.getItem('username')) {
      this.router.navigate(['/petlist']);
    }
    this.titleService.setTitle('Petbook | Login')
  }

  login() {
    this.submitting = true;
    this.userService.userLogin(this.user).subscribe(
      resp => {
        this.submitting = false;
        if (resp.status === 200) {
          localStorage.setItem('username', resp.body['auth']);
          localStorage.setItem('firstName', resp.body['firstName']);
          this.router.navigate(['/petlist']);
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
