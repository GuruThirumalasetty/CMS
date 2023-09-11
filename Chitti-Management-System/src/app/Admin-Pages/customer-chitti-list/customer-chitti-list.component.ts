import { Dialog } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-customer-chitti-list',
  templateUrl: './customer-chitti-list.component.html',
  styleUrls: ['./customer-chitti-list.component.scss']
})
export class CustomerChittiListComponent {
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'chittitype', 'chittiname', 'CustomerName', 'PhoneNumber','EmailId', 'actions'];
  button = 'AddNew';
  isLoading: boolean = false;
  constructor(private router: Router,private dialog:MatDialog,private spinner: NgxSpinnerService) { }
 
  // addNew(){
  
  //   setTimeout(() => {
     
  //     this.dialog.open(CustomerRegistrationComponent,{
  //       disableClose: true,
  //     width: '80%',
  //     height:'auto',
  //     })
  //   }, 500)

  // }
  addNew() {
    this.isLoading = true;
    this.button = ' Wait';
    this.spinner.show();
    setTimeout(() => {
      this.spinner.show();
      this.isLoading = false;
      this.button = ' AddNew';
      this.dialog.open(CustomerRegistrationComponent,{
        disableClose: true,
      width: '80%',
      height:'auto',
      }).afterClosed().subscribe(val=>{
      
      })
      this.spinner.hide()
    }, 1000 )
  }
}
