import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUri ='https://reqres.in/api';

  constructor(private http:HttpClient, private router:Router) { }
  private registerUri = `${this.baseUri}/register`;
  private loginUri = `${this.baseUri}/login`;

  userRegistration(body){
    //http methods return observables
    return this.http.post(this.registerUri,body);
  }
  userLogin(body){
    //http methods return observables
    return this.http.post(this.loginUri,body);
  }
  
  isUserLoggedIn(){
    if(sessionStorage.getItem('token')){
      return true;
    }else{
      return false;
    }
  }

  logOut(){
    sessionStorage.clear();
    sessionStorage.removeItem('token');
    this.router.navigateByUrl('/auth/signin');
  }
}
