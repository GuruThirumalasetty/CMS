import { Component , OnInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { CmsService } from 'src/app/Services/cms.service';
import Swal from 'sweetalert2';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { find } from 'rxjs';

@Component({
  selector: 'app-customer-chitti-list',
  templateUrl: './customer-chitti-list.component.html',
  styleUrls: ['./customer-chitti-list.component.scss']
})
export class CustomerChittiListComponent implements OnInit{
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['id','notification', 'chittitype', 'chittiname', 'CustomerName', 'PhoneNumber','EmailId', 'actions'];
  button = 'AddNew';
  isLoading: boolean = false;
    data:any;
  notificationForm !:FormGroup;
  constructor(private router: Router,private dialog:MatDialog,
    private spinner: NgxSpinnerService,private cmsService:CmsService,
    private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.getCustomerRegistrationDetails();
    this.notificationForm = this.formBuilder.group({
      Notification : new FormControl('')
    });
    this.getNotification();
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

  getNotification(){
    this.data = [];
    this.cmsService.getNotification().subscribe((res)=>{
      this.data = res;
    });
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

  deleteRegistrationDetails(row:any){
    let id = row.id;
    let customerName = row.customerName;
    Swal.fire({
      title: 'Do you want to Delete '+customerName+' ?',
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
        this.deleteNotification(row.phoneNumber);
      }
    });
  }
  deleteUserLogin(id:number){
    this.cmsService.deleteUserLogin(id).subscribe();
  }

  updateNotification(formValue:any,mobileNumber:any){
    let note = this.data.find((x:any)=>x.PhoneNumber === mobileNumber);
    let data = {
      text : formValue.Notification,
      date : new Date()
    }
    note?.message.push(data);
    this.cmsService.putNotification(note,note.id).subscribe(()=>{
        this.notificationForm.reset();
    });
  }

  deleteNotification(phoneNumber:any){
    let notification = this.data.find((x:any)=>x.PhoneNumber === phoneNumber);
    this.cmsService.deleteNotification(notification.id).subscribe();
  }

}
