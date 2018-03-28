import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  lineFri = environment.lineFri;

  constructor(
    private router: Router
  ) {
    // this.router.navigate(['/petlist']);
  }

  ngOnInit() {
  }

}
