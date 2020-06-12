import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUri ='https://reqres.in/api'
  constructor(private http:HttpClient) { }
  private userListUri = `${this.baseUri}/users`;

  getUserList(){
      return this.http.get(this.userListUri);
  }
}
