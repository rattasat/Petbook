import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AdminService } from '../../../service/admin.service';
import { DatePipe } from '@angular/common';

declare var jquery: any;
declare var $: any;
declare var swal: any;

@Component({
  selector: 'app-reportd-list',
  templateUrl: './reportd-list.component.html',
  styleUrls: ['./reportd-list.component.css']
})
export class ReportdListComponent implements OnInit {

  reports: any = [];
  loading = true;
  deleting = false;
  message = '';
  settings = {
    columns: {
      reportId: {
        title: 'id',
        width: '20%'
      },
      username: {
        title: 'username',
        width: '10%'
      },
      petname: {
        title: 'pet name',
        width: '20%'
      },
      text: {
        title: 'text',
        width: '20%'
      },
      created: {
        title: 'created',
        valuePrepareFunction: (cell, row) => {
          var raw = new Date(row.created);

          var formatted = this.datePipe.transform(raw, 'dd MMM yyyy, HH:mm:ss');
          return formatted;
        },
        width: '20%'
      }
    },
    actions: {
      edit: false,
      width: '10%'
    },
    delete: {
      confirmDelete: true
    },
    pager: {
      display: true,
      perPage: 15
    },
    hideSubHeader: true
  }

  constructor(
    private router: Router,
    private titleService: Title,
    private adminService: AdminService,
    private datePipe: DatePipe
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Petbook Admin');
    this.adminService.getReport()
      .subscribe(
        resp => {
          this.loading = false;
          this.message = resp.body['message'];
          if (this.message == 'ok') {
            this.reports = resp.body['report'];
          }
        },
        err => {
          this.loading = false;
          localStorage.clear();
          this.router.navigate(['/admin/login']);
        }
      )
  }

  deleteReport(id) {
    this.adminService.deleteReport(id)
      .subscribe(
        resp => {
          this.deleting = false;
          location.reload();
        },
        err => {
          this.deleting = false;
          this.router.navigate(['/admin/login']);
        }
      )
  }

  deleteRecord(event) {
    swal({
      type: 'question',
      title: 'Delete report?',
      showCancelButton: true,
      preConfirm: () => {
        this.deleting = true;
        this.deleteReport(event.data.reportId);
      }
    })
  }
}
