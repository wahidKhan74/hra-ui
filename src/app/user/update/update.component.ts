import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  public submitted:boolean = false;
  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
  }

  updateUserForm :any =  this.formBuilder.group({
    firstName:['',Validators.required],
    lastName:[''],
    email:['',[Validators.required,Validators.email]],
    address: this.formBuilder.group({
      city:['',[Validators.required,Validators.maxLength(6),Validators.minLength(3)]],
      state:[''],
      zipcode:['']
    })
  })


  updateUser(){
    this.submitted = true;
    console.log(this.updateUserForm);
    
  }

  get f1 (){
    return this.updateUserForm.controls;
  }
  get f2 (){
    return this.updateUserForm.controls.address.controls;
  }
}
