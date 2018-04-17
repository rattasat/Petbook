import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
import { Router } from '@angular/router';
import { AdminService } from '../../../service/admin.service';
declare var jquery: any;
declare var $: any;
declare var swal: any;


@Component({
  selector: 'app-btn-del',
  templateUrl: './btn-del.component.html',
  styleUrls: ['./btn-del.component.css']
})
export class BtnDelComponent implements ViewCell, OnInit {

  constructor(
    private router: Router,
    private adminService: AdminService
  ) { }

  renderValue: string;

  @Input() value;
  @Input() rowData: any;

  ngOnInit() {
    this.renderValue = this.value;
  }

  banUser() {
    var block = true;
    if (this.renderValue) {
      block = false;
    }
    this.adminService.updateUser({
      ban: block
    }, this.rowData.username)
      .subscribe(
        resp => {
          if (resp.status === 200) {
            location.reload();
          }
        },
        err => {
          if (err.status === 500) {
            location.reload();
          }
          if (err.status === 404) {
            this.router.navigate(['/admin/login']);
          }
        }
      )
  }

  confirmDelete() {
    swal({
      type: 'question',
      title: 'Block ' + this.rowData.username + '?',
      showCancelButton: true,
      preConfirm: () => {
        this.banUser();
      }
    })
  }
}
