import { Component } from '@angular/core';
import { User2 } from '../user2';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-form-test',
  templateUrl: './form-test.component.html',
  styleUrls: ['./form-test.component.scss'],
})
export class FormTestComponent {
  topics = ['Angular', 'React', 'Vue'];
  userModel = new User2('Tom', 'tom@tom.com', 9876543210, '', 'morning', true);

  constructor(private enrolService: UserService) {}

  onSubmit() {
    console.log(this.userModel);
    this.enrolService.enroll(this.userModel).subscribe(
      (data) => console.log('Success', data),
      (error) => console.log('Error!', error)
    );
  }
}
