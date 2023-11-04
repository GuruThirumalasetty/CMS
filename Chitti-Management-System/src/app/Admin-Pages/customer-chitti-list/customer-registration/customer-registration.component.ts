import { Component, Inject } from '@angular/core';
import { CustomerChittiListComponent } from '../customer-chitti-list.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
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
  button : string = "Submit";
  phoneReadonly : boolean = false;
  passReadonly : boolean = false;
  customerRegistrationForm !:FormGroup;
  customerExistedErrorMsg:boolean = false;
  readonlyOfAll: boolean = false;
  mobileNumber: any;

  toggleShowPassword() {
    if(!this.editData && !this.readonlyOfAll)
      this.showPassword = !this.showPassword;
  }
  constructor(private dialogRef : MatDialogRef<CustomerChittiListComponent>,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private cmsService:CmsService,
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
        phoneNumber : new FormControl('',[Validators.required]),
        emailId : new FormControl(''),
        password : new FormControl('',[Validators.required]),
        //confirmPassword : new FormControl(''),
        DOB : new FormControl(''),
        gender : new FormControl(''),
        aadhar : new FormControl(''),
        panNumber : new FormControl(''),
        address : new FormControl(''),
        chittiType : new FormControl('',[Validators.required]),
        chittiName : new FormControl('',[Validators.required])
      });
      if(this.editData){
        this.phoneReadonly = true;
        this.passReadonly = true;
        this.button = 'Update';
        this.chittiTypeChange(this.editData.chittiType);
        this.customerRegistrationForm.controls['customerName'].setValue(this.editData.customerName);
        this.customerRegistrationForm.controls['phoneNumber'].setValue(this.editData.phoneNumber);
        this.customerRegistrationForm.controls['emailId'].setValue(this.editData.emailId);
        this.customerRegistrationForm.controls['password'].setValue(this.editData.password);
        this.customerRegistrationForm.controls['DOB'].setValue(this.editData.DOB);
        this.customerRegistrationForm.controls['gender'].setValue(this.editData.gender);
        this.customerRegistrationForm.controls['aadhar'].setValue(this.editData.aadhar);
        this.customerRegistrationForm.controls['address'].setValue(this.editData.address);
        this.customerRegistrationForm.controls['panNumber'].setValue(this.editData.panNumber);
        this.customerRegistrationForm.controls['chittiType'].setValue(this.editData.chittiType);
        this.customerRegistrationForm.controls['chittiName'].setValue(this.editData.chittiName);
      }
    }

    chittiTypeChange(val:any) {
    let mobileNumber = this.customerRegistrationForm.controls['phoneNumber'].value;
    this.option = [];
    this.cmsService.getChittiMasterCreateDetails().subscribe((res) => {
        res.map((value:any)=>{
          if(value.chittiType === val){
            this.option.splice(0,0,value.chittiName);
          }
          this.cmsService.getCustomerRegistrationDetails().subscribe((res:any)=>{
            let customers = res.filter((x:any)=>x.phoneNumber == mobileNumber);
            let chittiNames = customers.map((x:any)=>{ return x.chittiName; });
            this.option = this.option.filter((item:any) => !chittiNames.includes(item));
          })
        })
      });
      // this.removeRepeatedChittiNames(mobileNumber);
  }

  // removeRepeatedChittiNames(mobileNumber:any){
  //   debugger
  //   this.cmsService.getCustomerRegistrationDetails().subscribe((res:any)=>{
  //     let customers = res.filter((x:any)=>x.phoneNumber == mobileNumber);
  //     let chittiNames = customers.map((x:any)=>{
  //       return x.chittiName;
  //     })
  //     this.option = this.option.filter((item:any) => !chittiNames.includes(item));
  //   })
  // }


  // submitRegistrationDetails(form:any){
  //   debugger
  //   if(!this.editData){
  //     let mobileNumber = form.phoneNumber;
  //     let chittiName = form.chittiName;
  //     if(mobileNumber){
  //         this.cmsService.getCustomerRegistrationDetails().subscribe((res:any)=>{
  //           let customers = res.filter((x:any)=>x.phoneNumber === mobileNumber);
  //           let customerCreationCheck = customers.find((x:any)=>x.chittiName === chittiName);
  //           if(this.customerRegistrationForm.valid){
  //             if(!customerCreationCheck){
  //               this.cmsService.postCustomerRegistrationDetails(form).subscribe({
  //                 next:()=>{
  //                   this.customerRegistrationForm.reset();
  //                   this.userCredentials(form.phoneNumber,form.password);
  //                   this.sendNotification('Hiiii '+form.customerName,form.phoneNumber);
  //                   this.dialogRef.close('Save');
  //                 }
  //               });
  //             }
  //             else{
  //               this.customerExistedErrorMsg = true;
  //             }
  //           }
  //           else{
  //             return;
  //           }
  //         })
  //     }
  //     else{
  //       return;
  //     }
  //   }
  //   else{
  //     this.updateRegistrationDetails();
  //   }
    
  // }
  submitRegistrationDetails(form:any){
    if(!this.editData){
      if(this.customerRegistrationForm.valid){
        if(this.mobileNumber)
          this.customerRegistrationForm.controls['phoneNumber'].setValue(this.mobileNumber);
        this.cmsService.postCustomerRegistrationDetails(form).subscribe({
          next:()=>{
            this.customerRegistrationForm.reset();
            this.userCredentials(form.phoneNumber,form.password);
            this.sendNotification('Hiiii '+form.customerName,form.phoneNumber);
            this.dialogRef.close('Save');
          }
        });
      }
      else{
        return;
      }
    }
    else{
      this.updateRegistrationDetails();
    }
    
  }
  closedialog(){
    this.customerRegistrationForm.reset();
    this.dialogRef.close();
  }

  updateRegistrationDetails(){
    if(this.customerRegistrationForm.valid){
      this.cmsService.putCustomerRegistrationDetails(this.customerRegistrationForm.value,this.editData.id).subscribe({
        next:()=>{
          this.customerRegistrationForm.reset();
          this.dialogRef.close('Update');
        }
      });
    }
  }
  userCredentials(phoneNumber:any,password:any){
    let data = {
      "username" : phoneNumber,
      "password" : password
    }
    this.cmsService.postUserLogin(data).subscribe();
  }

  hasError(FormControlName:string,errorName:any){
    return this.customerRegistrationForm.controls[FormControlName].hasError(errorName);
  }

  checkNumber(number:any){
    // if(!this.editData){
    //   //let value = number.value.toUpperCase();
    //   let value = number.value;
    //   let username
    //   this.cmsService.getUserLogin().subscribe((res:any)=>{
    //     //username = res?.map((r: any) => r.username.toUpperCase())
    //     username = res?.map((r: any) => r.username);
    //     username?.includes(value) ? this.phoneError = true :this.phoneError = false;
    //   })
    // }
    this.customerRegistrationForm.controls['chittiType'].reset()
    this.customerRegistrationForm.controls['chittiName'].reset()
    this.option = [];
  }
  sendNotification(message:any,mobileNumber:any){
    let notificationArray = [
      {
        text : message,
        date : new Date()
      }
    ];
    let data = {
      "message": notificationArray,
      "PhoneNumber":mobileNumber
    }
    this.cmsService.postNotification(data).subscribe();
  }

  mobileNumberSearch(){
    debugger
    if(!this.editData){
      this.mobileNumber = this.customerRegistrationForm.controls['phoneNumber'].value;
      this.cmsService.getCustomerRegistrationDetails().subscribe((res:any)=>{
        let customers = res.filter((x:any)=>x.phoneNumber == this.mobileNumber);
        if(customers.length > 0){
          this.customerRegistrationForm.controls['chittiType'].reset();
          this.customerRegistrationForm.controls['chittiName'].reset();
          this.option = [];
          this.customerRegistrationForm.controls['customerName'].setValue(customers[0].customerName);
          this.customerRegistrationForm.controls['address'].setValue(customers[0].address);
          this.customerRegistrationForm.controls['emailId'].setValue(customers[0].emailId);
          this.customerRegistrationForm.controls['panNumber'].setValue(customers[0].panNumber);
          this.customerRegistrationForm.controls['password'].setValue(customers[0].password);
          this.customerRegistrationForm.controls['aadhar'].setValue(customers[0].aadhar);
          this.customerRegistrationForm.controls['gender'].setValue(customers[0].gender);
          this.customerRegistrationForm.controls['DOB'].setValue(customers[0].DOB);
          this.readonlyOfAll = true;
        }
    })
    }
    
  }
}
