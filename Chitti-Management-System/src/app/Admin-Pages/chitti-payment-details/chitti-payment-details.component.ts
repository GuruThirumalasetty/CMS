import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup , Validators} from '@angular/forms';
import { CmsService } from 'src/app/Services/cms.service';

@Component({
  selector: 'app-chitti-payment-details',
  templateUrl: './chitti-payment-details.component.html',
  styleUrls: ['./chitti-payment-details.component.scss']
})
export class ChittiPaymentDetailsComponent {
  chittipaymentForm !: FormGroup
  chittiNameOptions:any;
  customerNameOptions:any;
  constructor(private formbuilder:FormBuilder,private cmsService:CmsService){
    this.chittipaymentForm = this.formbuilder.group({
      chittiType: new FormControl('',[Validators.required]),
      chittiName: new FormControl('',[Validators.required]),
      CustomerName: new FormControl('',[Validators.required]),
      PaymentType: new FormControl(''),
      PaymentMonth: new FormControl(''),
      PaymentDate: new FormControl(''),
      Amount: new FormControl('',[Validators.required]),
      TranferType: new FormControl(''),
    })
  }

  ngOnInit(): void {

  }
  chittiTypeChange(val:any){
    this.chittiNameOptions = [];
    this.cmsService.getChittiMasterCreateDetails().subscribe({
      next: (res) => {
        res.map((value:any)=>{
          if(value.chittiType === val){
            this.chittiNameOptions.splice(0,0,value.chittiName);
          }
        })
      }
    });
  }
  chittiNameChange(val:any){
    this.customerNameOptions = [];
    this.cmsService.getCustomerRegistrationDetails().subscribe(res=>{
      res.map((value:any)=>{
        if(value.chittiName === val)
          this.customerNameOptions.splice(0,0,value.customerName);
      })
    })
  }
  submitchittipaymentDetails(form:any){
    if(form.valid){
      // this.cmsService.postPaymentDetails(form.value).subscribe();
    }
    console.log(form.value);
  }
  hasError(formControlName:any,error:any){
    debugger
    this.chittipaymentForm.controls[formControlName].hasError(error);
  }
}
