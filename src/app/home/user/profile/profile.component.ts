import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../service/user.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: any = {};
  loading = true;

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
          this.router.navigate(['/login']);
        }
      )
  }
}
