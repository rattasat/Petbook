import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private titleService : Title
  ) { }

  ngOnInit() {
    this.titleService.setTitle('PetBook | Register');
  }

}
