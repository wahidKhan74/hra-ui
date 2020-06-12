import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public authSrv:AuthService) { }

  ngOnInit(): void {
  }

  flightdata = [
    {
      name:"Indigo",
      time:"2:00",
      airpot:"KM"
    },{
      name:"Spice Jet",
      time:"2:30",
      airpot:"HYM"
    },{
      name:"Air India",
      time:"4:00",
      airpot:"HYSM"
    }
  ]
  public filterdata ;

  searchFlight(value){
    let filterdata = this.flightdata.filter( res=> res.name.indexOf(value) > -1)
    this.filterdata = filterdata
  }
}
