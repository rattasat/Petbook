import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AdminService } from '../../../service/admin.service';
import { Cell, LocalDataSource } from 'ng2-smart-table';
import { Row } from 'ng2-smart-table/lib/data-set/row';
import { BtnDelComponent } from '../btn-del/btn-del.component';

declare var jquery: any;
declare var $: any;
declare var swal: any;

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  // users: any = [];
  loading = true;
  ban = false;

  constructor(
    private router: Router,
    private titleService: Title,
    private adminService: AdminService
  ) {
    this.settings = Object.assign({}, this.mySettings)
  }

  users: LocalDataSource = new LocalDataSource();
  settings;
  mySettings = {
    columns: {
      ban: {
        title: 'action',
        type: 'custom',
        renderComponent: BtnDelComponent,
        width: '10%',
        filter: false
      },
      username: {
        title: 'username',
        defaultValue: '-',
        width: '15%'
      },
      firstName: {
        title: 'first name',
        defaultValue: '-',
        width: '15%'
      },
      lastName: {
        title: 'last name',
        defaultValue: '-',
        width: '15%'
      },
      tel: {
        title: 'tel',
        defaultValue: '-',
        width: '15%'
      },
      email: {
        title: 'email',
        defaultValue: '-',
        width: '15%'
      },
      lineStatus: {
        title: 'line status',
        defaultValue: '-',
        width: '15%'
      }
    },
    actions: false,
    pager: {
      display: true,
      perPage: 15
    },
    hideSubHeader: true
  };

  ngOnInit() {
    this.titleService.setTitle('Petbook Admin');
    if (!localStorage.getItem('usertoken')) {
      this.router.navigate(['/admin/login'])
    }
    else {
      this.adminService.getUserList()
        .subscribe(
          resp => {
            this.loading = false;
            this.users = resp.body['user'];
          },
          err => {
            this.loading = false;
            localStorage.clear();
            this.router.navigate(['/admin/login']);
          }
        )
    }
  }
}
