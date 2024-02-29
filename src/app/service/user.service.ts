import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private saveUserApiUrl = 'http://localhost:8080/users/save-user';
  private getAllUsersUrl = 'http://localhost:8080/users/get-all-users';
  private getUserByIdUrl = 'http://localhost:8080/users/get-user-by-id';

  constructor(private http:HttpClient) {
  }

  public saveUser(user : User): Observable<User>{
    return this.http.post<User>(this.saveUserApiUrl, user);
  }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.getAllUsersUrl)
  }

  public getUserById(id: number): Observable<User>{
    return this.http.get<User>(`${this.getUserByIdUrl}/${id}`)
  }




}
