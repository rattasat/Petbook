import { Component, OnInit } from '@angular/core';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { Router } from '@angular/router';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: any = {};
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.user.firstName = localStorage.getItem('firstName');
    $(".profile-button").dropdown({
      inDuration: 300,
      outDuration: 225,
      constrainWidth: false,
      hover: true,
      gutter: 0,
      belowOrigin: true,
      alignment: 'right',
      stopPropagation: false
    });
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
