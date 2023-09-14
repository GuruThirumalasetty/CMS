import { Component } from '@angular/core';
import { CustomerChittiListComponent } from '../customer-chitti-list.component';
import { MatDialogRef } from '@angular/material/dialog';
import { CmsService } from 'src/app/Services/cms.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.scss']
})
export class CustomerRegistrationComponent {
  showPassword: boolean = false;
  option : any;
  customerRegistrationForm !:FormGroup;

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
  constructor(private dialogRef : MatDialogRef<CustomerChittiListComponent>,
    private cmsService:CmsService,private formbuilder:FormBuilder,
    private formBuilder:FormBuilder){
      // this.customerRegistrationForm = this.formbuilder.group({
      //   chittiName : new FormControl(''),
      //   password: new FormControl(''),
      //   chittiType:new FormControl(''),
      // })
    }
   

    ngOnInit():void{
      this.customerRegistrationForm = this.formBuilder.group({
        customerName : new FormControl('',[Validators.required]),
        phoneNumber : new FormControl(''),
        emailId : new FormControl(''),
        password : new FormControl(''),
        confirmPassword : new FormControl(''),
        DOB : new FormControl(''),
        gender : new FormControl(''),
        aadhar : new FormControl(''),
        panNumber : new FormControl(''),
        address : new FormControl(''),
        chittiType : new FormControl('',[Validators.required]),
        chittiName : new FormControl('',[Validators.required])
      });
    }

  optionChange(val:any) {
    this.option = [];
    this.cmsService.getChittiMasterCreateDetails().subscribe({
      next: (res) => {
        res.map((value:any)=>{
          if(value.chittiType === val){
            this.option.splice(0,0,value.chittiName);
          }
        })
      }
    });
  }

  submitRegistrationDetails(form:any){
    debugger
    if(this.customerRegistrationForm.valid){
      this.cmsService.postCustomerRegistrationDetails(form).subscribe();
      this.dialogRef.close('Save');
    }
    else{
      return;
    }
  }
  closedialog(){
    this.customerRegistrationForm.reset();
    this.dialogRef.close();
  }
}
