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
 
  // addNew(){
  
  //   setTimeout(() => {
     
  //     this.dialog.open(CustomerRegistrationComponent,{
  //       disableClose: true,
  //     width: '80%',
  //     height:'auto',
  //     })
  //   }, 500)

  // }
  ngOnInit(): void {
    this.getCustomerRegistrationDetails();
  }
  addNew() {
    debugger
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
    // Swal.fire({
    //   title: 'Are you sure?',
    //   text: "Do you want to Edit",
    //   icon: 'warning',
    //   showCancelButton: true,
    //   confirmButtonColor: '#3085d6',
    //   cancelButtonColor: '#d33',
    //   confirmButtonText: 'Yes, edit it!'
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //       this.dialog.open(CustomerRegistrationComponent,{
    //       width:'80%',
    //       height:'auto',
    //       data:form
    //     });
    //   }
    // })

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
    
  }


}
