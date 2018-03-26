import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any = {};

  constructor(
    private titleService: Title,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Petbook | Login')
    // $('#loginForm').validate({
    //   rules: {
    //     username: {
    //       required: true,
    //       minlength: 5
    //     }
    //   },
    //   messages: {
    //     username: {
    //       required: 'Enter username.',
    //       minlength: 'Enter at least 5 characters'
    //     }
    //   },
    //   errorElement: 'div',
    //   errorPlacement: function (error, element) {
    //     var placement = $(element).data('error');
    //     if (placement) {
    //       $(placement).append(error)
    //     } else {
    //       error.insertAfter(element);
    //     }
    //   }
    // });
  }

  login() {
    this.userService.userLogin(this.user).subscribe(
      resp => {
        if (resp.status === 200) {
          localStorage.setItem('username', resp.body['auth']);
          localStorage.setItem('firstName', resp.body['firstName']);
          this.router.navigate(['/petlist']);
        }
      },
      err => {
        if (err.status === 404) {
          alert('invalid username or password');
        } else {

        }
      }
    )
  }
}
