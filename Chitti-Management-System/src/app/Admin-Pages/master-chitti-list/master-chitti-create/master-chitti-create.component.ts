import { Dialog } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-master-chitti-create',
  templateUrl: './master-chitti-create.component.html',
  styleUrls: ['./master-chitti-create.component.scss']
})
export class MasterChittiCreateComponent {
  minbid:boolean=false;
  maxbid:boolean=false;
  biddate:boolean=false;
  amounttocompany:boolean=false;
  companychittimonth:boolean=false;
  submit:boolean=false;
  CompanyChitti:boolean = false;
  Deduction: boolean = false;
  isLoading: boolean = false;
  Backbutton = ' Back';
  constructor(private router: Router,private dialog:Dialog) { }
  ngOnInit(): void {
  }
  addBack() {
    this.isLoading = true;
    this.Backbutton = ' Back';
    setTimeout(() => {
      this.isLoading = false;
      this.Backbutton = ' Back';
     //z this.spinner.show();
      // setTimeout(() => this.spinner.hide(), 1000);
      this.router.navigate(['/master-chitti']);
      
    }, 500)
    
  }
  closedialog(){
    this.dialog.closeAll();
  }
  chittiTypeChange(value:any){
    debugger
    if(value=="FixedChitti"){
    this.CompanyChitti=true;
    this.submit=true;
    this.Deduction=true;
    this.companychittimonth=false;
      this.amounttocompany=false;
      this.minbid=false;
      this.maxbid=false;
      this.biddate=false;
    }
  
    // else{
    // this.CompanyChitti=false;
    // this.submit=false;
    // this.Deduction=false;
    // }
    if(value=="CompanyChitti"){
      this.CompanyChitti=true;
      this.companychittimonth=true;
      this.amounttocompany=true;
      this.submit=true;
      this.Deduction=false;
      this.minbid=false;
      this.maxbid=false;
      this.biddate=false;
    }
    // else{
    //   this.CompanyChitti=false;
    //   this.companychittimonth=false;
    //   this.amounttocompany=false;
    //   this.submit=false;
    // }
   if(value=="DividendChitti"){
    this.CompanyChitti=true;
    this.submit=true;
    this.Deduction=true;
    this.companychittimonth=true;
    this.amounttocompany=false;
    this.minbid=true;
      this.maxbid=true;
      this.biddate=true;
   }
  
  }
}
