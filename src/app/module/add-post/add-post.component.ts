import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from 'src/app/model/post.model';
import { User } from 'src/app/model/user.model';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent {
  postForm: FormGroup;
  user: User;

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postForm = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      content: new FormControl(null, [Validators.required]),
    });
  }

  onSubmit() {
    if (this.postForm.valid) {
      const title = this.postForm.value.title;
      const content = this.postForm.value.content;
      this.user = JSON.parse(localStorage.getItem('user') as any);
      const userId = this.user.id as any;
      const newPost = new Post(title, content, userId);
      this.postService.savePost(newPost).subscribe({});
    }
  }
}
