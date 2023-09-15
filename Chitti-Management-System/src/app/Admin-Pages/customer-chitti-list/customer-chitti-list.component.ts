import { Component , OnInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { CmsService } from 'src/app/Services/cms.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customer-chitti-list',
  templateUrl: './customer-chitti-list.component.html',
  styleUrls: ['./customer-chitti-list.component.scss']
})
export class CustomerChittiListComponent implements OnInit{
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'chittitype', 'chittiname', 'CustomerName', 'PhoneNumber','EmailId', 'actions'];
  button = 'AddNew';
  isLoading: boolean = false;
  constructor(private router: Router,private dialog:MatDialog,private spinner: NgxSpinnerService,private cmsService:CmsService) { }

  ngOnInit(): void {
    this.getCustomerRegistrationDetails();
  }
  addNew() {
    this.isLoading = true;
    this.button = ' Wait';
    this.spinner.show();
    setTimeout(() => {
      this.spinner.show();
      this.isLoading = false;
      this.button = 'AddNew';
      this.dialog.open(CustomerRegistrationComponent,{
        disableClose: true,
      width: '80%',
      height:'auto',
      }).afterClosed().subscribe(()=>{
        this.getCustomerRegistrationDetails();
      })
      this.spinner.hide()
    }, 1000 )
  }

  getCustomerRegistrationDetails(){
    this.cmsService.getCustomerRegistrationDetails().subscribe((res:any)=>{
      this.dataSource = new MatTableDataSource(res);
    });
  }

  editRegistrationDetails(form:any){
    Swal.fire({
      title: 'Do you want to make changes?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        this.dialog.open(CustomerRegistrationComponent, {
          width: '80%',
          data: form,
        }).afterClosed().subscribe((dialogResult) => {
          if (dialogResult === 'Update') {
            this.getCustomerRegistrationDetails();
          }
        });
      }
    });
  }

  deleteRegistrationDetails(id:number){
    Swal.fire({
      title: 'Do you want to Delete ?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
          this.cmsService.deleteCustomerRegistrationDetails(id).subscribe({
          next:()=>{
            this.deleteUserLogin(id);
            this.getCustomerRegistrationDetails();
          }
        });
      }
    });
  }
  deleteUserLogin(id:number){
    this.cmsService.deleteUserLogin(id).subscribe();
  }


}
