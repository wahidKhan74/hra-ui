import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }
  public viewMode:string;
  ngOnInit(): void {
  }

  user ={
    name:"John Smith",
    email:"john@gmail.com",
    dob: new Date(),
    number:12012,
    currency:20020
  }

  userList = [{
    name:"John Smith",
    email:"john@gmail.com",
    dob: new Date(),
    number:12012,
    currency:20020
  },{
    name:"Mike Smith",
    email:"john@gmail.com",
    dob: new Date(),
    number:12012,
    currency:20020
  },{
    name:"Will Smith",
    email:"john@gmail.com",
    dob: new Date(),
    number:12012,
    currency:20020
  }]

  changeMode(mode){
    this.viewMode = mode;
  }
  getStyle(){
    return {
      'color':'white' ,'background-color' :'red'
    }
  }
}
