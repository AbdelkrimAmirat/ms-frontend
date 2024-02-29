import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/user.model';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent {


  userForm: FormGroup;

  constructor(private userService:UserService) {

  }

  ngOnInit() {
    this.userForm = new FormGroup({
      userName: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
    });  
  }

  onSubmit() {
    if (this.userForm.valid) {

      const userName = this.userForm.value.userName;
      const email = this.userForm.value.email;
      const password = this.userForm.value.password;
      const newUser = new User(userName, email, password);
      this.userService.saveUser(newUser).subscribe({ });

    }
  }
}
