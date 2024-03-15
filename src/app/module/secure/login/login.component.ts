import { Component } from '@angular/core';
import { UserService } from '../../../service/user.service';
import { User } from 'src/app/model/user.model';
import { Router } from '@angular/router';
import { skip } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: any;
  password: any;
  user: User;

  constructor(private userService: UserService) {}

  login() {
    this.userService.login(this.email, this.password).subscribe((result) => {
      if (result != undefined) {
        this.user = result;

        window.location.href = 'http://localhost:4200/home';

        localStorage.setItem('user', JSON.stringify(this.user as any));
      } else {
        this.user = undefined as any;
        alert('User not found');
      }
    });
  }
}
