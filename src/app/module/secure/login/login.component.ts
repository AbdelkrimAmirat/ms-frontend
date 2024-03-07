import { Component } from '@angular/core';
import { UserService } from '../../../service/user.service';
import { User } from 'src/app/model/user.model';
import { Router } from '@angular/router';
import { window } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: any;
  password: any;
  user: User;
  token: String;

  constructor(private userService: UserService, private router: Router) {}

  login() {
    this.userService.login(this.email, this.password).subscribe((result) => {
      if (result != undefined) {
        this.user = result;

        this.router.navigate(['/search-user']);

        //alert('User :' + this.user.userName + 'connected');

        //localStorage.setItem('email', this.user.email);
        //localStorage.setItem('password', this.user.password);

        localStorage.setItem('user', JSON.stringify(this.user as any));
      } else {
        this.user = undefined as any;
        alert('User not found');
      }
    });
  }
}
