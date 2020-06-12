import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public userList:any;
  constructor(private userSrv:UserService) { }

  ngOnInit(): void {
    this.getAllUser();
  }

  getAllUser(){
      this.userSrv.getUserList().subscribe(
        res=>{
          console.log(res);
          this.userList = res['data'];
        },err=>{
          console.log(err);
        }
      )
  }
}
