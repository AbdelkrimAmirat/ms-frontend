import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  email: String;
  password: String;

  constructor() {
    this.email = localStorage.getItem('email') as any;
    this.password = localStorage.getItem('password') as any;
  }
}
