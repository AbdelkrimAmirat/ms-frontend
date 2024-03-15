import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isLoggedIn: boolean = false;
  user: User;
  userName: String = ' ';

  constructor(private router: Router) {}

  ngOnInit() {
    this.checkUserIsLoggedIn();
  }

  checkUserIsLoggedIn() {
    if (localStorage.getItem('user') != undefined) {
      this.user = JSON.parse(localStorage.getItem('user') as any);
      this.isLoggedIn = true;
      this.userName += this.user.userName;
    } else this.isLoggedIn = false;
  }

  logOut() {
    localStorage.removeItem('user');
    this.checkUserIsLoggedIn();
    this.router.navigate(['/login']);
  }
}
