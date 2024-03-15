import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WpService {
  private wpAllPostsApiUrl = 'https://wordpress.qodefy.com/wp-json/wp/v2/posts';
  private wpPostByIdApiUrl = 'https://wordpress.qodefy.com/wp-json/wp/v2/posts';

  id: number = 13;
  constructor(private http: HttpClient) {}

  getWpPosts() {
    return this.http.get(this.wpAllPostsApiUrl);
  }

  //getWpPostById() {
  //  return this.http.get(`${this.wpPostByIdApiUrl}/${this.id}`);
  //}
}
