import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { PetService } from '../service/pet.service';

@Component({
  selector: 'app-public-report',
  templateUrl: './public-report.component.html',
  styleUrls: ['./public-report.component.css']
})
export class PublicReportComponent implements OnInit {

  reports: any = [];
  loading = true;
  message: String;
  constructor(
    private titleService: Title,
    private router: Router,
    private petService: PetService
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Petbook');
    this.petService.getReportDaily().subscribe(
      data => {
        this.loading = false;
        this.message = data['message'];
        if (this.message == 'ok') {
          this.reports = data['report'];
        }
      },
      err => {
        this.router.navigate(['/error/notfound'])
      }
    )
  }

}
