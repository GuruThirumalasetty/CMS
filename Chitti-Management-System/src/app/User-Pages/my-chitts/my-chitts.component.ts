import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-chitts',
  templateUrl: './my-chitts.component.html',
  styleUrls: ['./my-chitts.component.scss']
})
export class MyChittsComponent {

  constructor(private router:Router){}

  array = [
    {chittiType:'Company Chitti',chittiName:'Aravind Chitti',customerName:'Guru',dueAmount:'20,000',date:new Date(),phoneNumber:'9133800412'},
    {chittiType:'Fixed Chitti',chittiName:'Aravind Chitti',customerName:'Koti',dueAmount:'15,000',date:new Date(),phoneNumber:'8555021827'},
  ]
  payNow(arr:any){
    console.log(arr.dueAmount);
    this.router.navigate(['/user-payment']);
  }
  myProfile(arr:any){
    console.log(arr)
    this.router.navigate(['/my-profile']);
  }
}
