import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.scss']
})
export class SearchUserComponent {

  id=new FormControl();
  user: User;
  errorMessage: string;

  constructor(private userService: UserService) {}

  searchUser(): void {
    const myId = this.id.value;
    this.userService.getUserById(myId).subscribe({
      next: (user) => {
        this.user = user;
        this.errorMessage = '';
      },
      error: (err) => {
        this.errorMessage = 'Utilisateur introuvable';
        this.user = new User('','','');
      }
    });
  }

}
