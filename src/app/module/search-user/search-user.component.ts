import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Post } from 'src/app/model/post.model';
import { User } from 'src/app/model/user.model';
import { PostService } from 'src/app/service/post.service';
import { UserService } from 'src/app/service/user.service';
import { faTrash, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.scss'],
})
export class SearchUserComponent {
  id = new FormControl();
  user: User;

  userErrorMessage: string;
  postErrorMessage: string;

  icon1 = faUser;
  icon2 = faTrash;

  constructor(
    private userService: UserService,
    private postService: PostService
  ) {}

  /***********************************************************************/
  searchUser(): void {
    const myId = this.id.value;
    this.userService.getUserById(myId).subscribe({
      next: (user) => {
        this.user = user;
        if (user == undefined) this.userErrorMessage = 'User not found';
        else this.userErrorMessage = '';
      },
      error: (err) => {
        this.userErrorMessage = 'Error while searching a user';
        this.user = new User('', '', '');
      },
    });
  }

  /***********************************************************************/
  deleteUser() {
    const myId = this.id.value;

    this.userService.deleteUserById(myId).subscribe({
      next: () => {
        this.userErrorMessage = 'User deleted successfully';
        this.user = null as any;
      },
      error: (err) => {
        this.userErrorMessage = 'User not found';
      },
    });
  }

  /***********************************************************************/
  posts: Post[] = [];
  searchPosts(user: User) {
    const myId = user.id;
    this.postService.getPostsByUserId(myId as any).subscribe((result) => {
      this.posts = result;
    });
  }

  /********************************************************************** */
  deletePost(post: Post) {
    const myId = post.id;

    this.postService.deletePostById(myId as any).subscribe({
      next: () => {
        this.postErrorMessage = 'Post:' + post.id + '  deleted successfully';
        post = null as any;
      },
    });

    this.posts.splice(this.posts.indexOf(post), 1);

    //this.searchPosts(this.user);
  }

  /********************************************************************** */
}
