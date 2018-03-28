import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { PetService } from '../../../service/pet.service';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css']
})
export class ReportListComponent implements OnInit {

  loading = true;
  param: any;
  pet: any = {};
  reports = [];
  message: String;

  constructor(
    private titleService: Title,
    private router: Router,
    private route: ActivatedRoute,
    private petService: PetService
  ) {
    this.route.params.subscribe(params => this.param = params);
  }

  ngOnInit() {
    this.titleService.setTitle('Petbook');
    this.petService.getReport(this.param.petid)
      .subscribe(
        resp => {
          this.loading = false;
          this.pet = resp.body['pet'];
          this.message = resp.body['message'];
          if (resp.body['message'] == 'ok') {
            this.reports = resp.body['reports'];
            console.log(this.reports);
          }
        },
        err => {
          this.loading = false;
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
