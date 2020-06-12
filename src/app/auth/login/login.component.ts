import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user:User  = { email:"", password:""}

  constructor(private authSrv:AuthService,private router :Router) { }

  ngOnInit(): void {
  }

  userLogin(){
    console.log(this.user);
    this.authSrv.userLogin(this.user).subscribe(
      res=>{
        sessionStorage.setItem('token',res['token']);
        this.router.navigateByUrl('/user/list');
      },err=>{
        console.log(err);
      }
    )
  }
}

interface User{
  email:string,
  password:string
}