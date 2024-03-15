import { Injectable } from '@angular/core';
import { Post } from '../model/post.model';
import { Observable, Observer } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private savePostApiUrl = 'http://localhost:8080/posts/save-post';
  private getAllPostsApiUrl = 'http://localhost:8080/posts/get-all-posts';
  private getPostsByUserIdApiUrl =
    'http://localhost:8080/posts/get-posts-by-user-id';
  private deletePostByIdApiUrl =
    'http://localhost:8080/posts/delete-post-by-id';
  private getPostByIdApiUrl = 'http://localhost:8080/posts/get-post-by-id';

  constructor(private http: HttpClient) {}

  public savePost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.savePostApiUrl, post);
  }

  public getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.getAllPostsApiUrl);
  }

  public getPostsByUserId(id: number): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.getPostsByUserIdApiUrl}/${id}`);
  }

  public deletePostById(id: number): Observable<any> {
    return this.http.post<any>(`${this.deletePostByIdApiUrl}/${id}`, {});
  }

  public getPostById(postId: number): Observable<Post> {
    return this.http.get<Post>(`${this.getPostByIdApiUrl}/${postId}`);
  }
}
