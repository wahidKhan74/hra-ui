import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public msg  :any = new FormControl;

  public createUserForm :any = new FormGroup({
    firstName : new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    address : new FormGroup({
      city : new FormControl(''),
      zipcode: new FormControl(''),
      state: new FormControl(''),
    })
  });

  constructor() { }

  ngOnInit(): void {
  }

  showMsg(){
    console.log(this.msg.value)
  }

  createUser(){
    console.log(this.createUserForm.value)
  }
}
