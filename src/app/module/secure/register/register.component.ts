import { Component } from '@angular/core';
import { UserService } from '../../../service/user.service';
import { User } from 'src/app/model/user.model';
import { Router } from '@angular/router';
import { skip } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  userName: string;
  email: any;
  password: any;
  password2: any;
  user: User;
  message: string;

  userForm: FormGroup;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.userForm = new FormGroup(
      {
        userName: new FormControl(null, [
          Validators.required,
          Validators.minLength(3),
        ]),
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, [Validators.required]),
        password2: new FormControl(null, [Validators.required]),
      },
      {
        validators: this.checkPasswords;
      }
    );
  }

  checkPasswords(group : FormGroup) {
    let pass1 = group.get('password')?.value;
    let pass2 = group.get('password2')?.value;
    return pass1 === pass2 ? null : {notSame : true};
  }

  register() {
    if (this.userForm.value.password === this.userForm.value.password2) {
      this.message = '';
      if (this.userForm.valid) {
        const userName = this.userForm.value.userName;
        const email = this.userForm.value.email;
        const password = this.userForm.value.password;
        const newUser = new User(userName, email, password);
        this.userService.saveUser(newUser).subscribe({});
      }

      this.userForm.reset({
        userName: '',
        email: '',
        password: '',
      });

      this.router.navigate(['/login']);
    } else {
      this.message = 'Passeword not conform';
    }
  }
}
