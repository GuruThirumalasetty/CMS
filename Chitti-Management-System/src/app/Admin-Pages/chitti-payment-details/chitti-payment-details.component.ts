import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-chitti-payment-details',
  templateUrl: './chitti-payment-details.component.html',
  styleUrls: ['./chitti-payment-details.component.scss']
})
export class ChittiPaymentDetailsComponent {
  chittipaymentForm !: FormGroup
  constructor(private formbuilder:FormBuilder,){
    this.chittipaymentForm = this.formbuilder.group({
      chittiType: new FormControl(''),
      chittiName: new FormControl(''),
      CustomerName: new FormControl(''),
      PaymentType: new FormControl(''),
      PaymentMonth: new FormControl(''),
      PaymentDate: new FormControl(''),
      Amount: new FormControl(''),
      TranferType: new FormControl(''),
    })
  }

  ngOnInit(): void {

  }
  closedialog(){

  }
  chittiTypeChange(value:any){

  }
  submitchittipaymentDetails(form:any){

  }
}
