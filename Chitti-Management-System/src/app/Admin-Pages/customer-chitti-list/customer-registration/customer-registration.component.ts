import { Component } from '@angular/core';

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

}
