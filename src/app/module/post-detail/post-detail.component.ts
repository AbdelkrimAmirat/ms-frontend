import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/model/post.model';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
})
export class PostDetailComponent {
  post: Post;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const postId = params.get('postId');
      if (postId) {
        this.fetchPost(Number(postId));
      }
    });
  }

  fetchPost(postId: number) {
    this.postService.getPostById(postId).subscribe((result) => {
      this.post = result;
    });
  }
}
