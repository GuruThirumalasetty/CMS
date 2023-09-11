import { Component } from '@angular/core';
import { CustomerChittiListComponent } from '../customer-chitti-list.component';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.scss']
})
export class CustomerRegistrationComponent {
  showPassword: boolean = false;

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
    console.log("this.showPassword", this.showPassword)
  }
  constructor(private dialogRef : MatDialogRef<CustomerChittiListComponent>){}

}
