import { Dialog } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';

@Component({
  selector: 'app-customer-chitti-list',
  templateUrl: './customer-chitti-list.component.html',
  styleUrls: ['./customer-chitti-list.component.scss']
})
export class CustomerChittiListComponent {
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'chittitype', 'chittiname', 'CustomerName', 'PhoneNumber','EmailId', 'actions'];
  
  constructor(private router: Router,private dialog:Dialog) { }
 
  addNew(){
    // this.Backbutton = ' Add New';
    setTimeout(() => {
      // this.isLoading = false;
      // this.Backbutton = ' Add New';
      this.dialog.open(CustomerRegistrationComponent,{
        disableClose: true,
      width: '80%',
      height:'auto',
      })
    }, 500)

  }
}
