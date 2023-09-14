import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { ChittiPaymentDetailsComponent } from '../chitti-payment-details/chitti-payment-details.component';

@Component({
  selector: 'app-chitti-payment-list',
  templateUrl: './chitti-payment-list.component.html',
  styleUrls: ['./chitti-payment-list.component.scss']
})
export class ChittiPaymentListComponent {
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'Paymenttype', 'chittiname', 'CustomerName', 'PaymentMonth','PaymentDate','Amount','TransferType', 'actions'];
  button = 'AddNew';
  isLoading: boolean = false;
  constructor(private spinner: NgxSpinnerService,private dialog:MatDialog){}
  ngOnInit(): void {

  }
  addNew(){
    this.isLoading = true;
    this.button = ' Wait';
    this.spinner.show();
    setTimeout(() => {
      this.spinner.show();
      this.isLoading = false;
      this.button = ' AddNew';
      this.dialog.open(ChittiPaymentDetailsComponent,{
        disableClose: true,
      width: '80%',
      height:'auto',
      }).afterClosed()
      this.spinner.hide();
  })
}
  editRegistrationDetails(form:any){

  }
  
}


