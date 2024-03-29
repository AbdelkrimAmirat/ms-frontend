import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { Observable } from 'rxjs';
import { Post } from '../model/post.model';
import { User2 } from '../module/user2';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private loginApiUrl = 'http://localhost:8080/users/login';
  private saveUserApiUrl = 'http://localhost:8080/users/save-user';
  private getAllUsersUrl = 'http://localhost:8080/users/get-all-users';
  private getUserByIdUrl = 'http://localhost:8080/users/get-user-by-id';
  private deleteUserByIdUrl = 'http://localhost:8080/users/delete-user-by-id';
  //private enrolUrl = 'http://localhost:8080/users/post-user';
  private enrolUrl = '';
  constructor(private http: HttpClient) {}

  public saveUser(user: User): Observable<User> {
    return this.http.post<User>(this.saveUserApiUrl, user);
  }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.getAllUsersUrl);
  }

  public getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.getUserByIdUrl}/${id}`);
  }

  public deleteUserById(id: number): Observable<any> {
    return this.http.post<any>(`${this.deleteUserByIdUrl}/${id}`, {});
  }

  public login(email: String, password: String): Observable<User> {
    let params = new HttpParams()
      .set('email', email.toString())
      .set('password', '' + password);
    return this.http.get<User>(`${this.loginApiUrl}`, { params });
  }

  public enroll(user: User2): Observable<User2> {
    return this.http.post<any>(this.enrolUrl, user);
  }
}
