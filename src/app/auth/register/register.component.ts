import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public user:User  = { firstName:"", lastName:"",email:"", city:"", country:"", gender:"", password:""}

  constructor(private authSrv : AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  registerUser(){
      this.authSrv.userRegistration(this.user).subscribe(
      res=>{
        console.log(res);
        sessionStorage.setItem('token',res['token']);
        this.router.navigateByUrl('/auth/signin');
       },
      err=>{
        console.log(err);
      }
    )
  }
  onSelect(selected){
    this.user.country = selected;
    // console.log(selected)
  }

}

interface User{
  firstName:string,
  lastName:string,
  email:string,
  city:string,
  country:string,
  gender:string,
  password:string
}