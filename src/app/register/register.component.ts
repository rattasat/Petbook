import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { SwalComponent } from '@toverux/ngx-sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: any = {};
  confirmPassword: any = {};
  creating = false;
  @ViewChild('already') private already: SwalComponent;

  constructor(
    private titleService: Title,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.titleService.setTitle('PetBook | Register');
  }

  register() {
    this.creating = true;
    this.userService.register(this.user)
      .subscribe(
        resp => {
          this.creating = false;
          if (resp.status === 201) {
            localStorage.setItem('username', resp.body['auth']);
            localStorage.setItem('firstName', resp.body['firstName']);
            this.router.navigate(['/petlist']);
          }
        },
        err => {
          this.creating = false;
          if (err.status === 500) {
            this.already.show();
          } else {
            this.router.navigate(['/login'])
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
