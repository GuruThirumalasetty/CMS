import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html',
  styleUrls: ['./otp-verification.component.scss']
})
export class OtpVerificationComponent {
  otp: string = '';
  number:string='';
  receivedOtp: string = '123456';
  Defaultpage:boolean=true;
  otppage:boolean=false;

  constructor(){

  }
  onOtpChange() {
    // Ensure the OTP input is limited to 6 characters
    if (this.otp.length > 6) {
      this.otp = this.otp.slice(0, 6);
    }
  }

  verifyOtp() {
    if (this.otp === this.receivedOtp) {
      Swal.fire('OTP verified successfully')
    } else {
      console.error('OTP verification failed');
    }
  }
  sendotp(){
  this.otppage=true
  this.Defaultpage=false;
  }
}
