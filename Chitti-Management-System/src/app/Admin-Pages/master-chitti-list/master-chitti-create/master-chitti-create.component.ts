import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CmsService } from 'src/app/Services/cms.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatDialogRef  } from '@angular/material/dialog';

@Component({
  selector: 'app-master-chitti-create',
  templateUrl: './master-chitti-create.component.html',
  styleUrls: ['./master-chitti-create.component.scss']
})
export class MasterChittiCreateComponent {
  minbid:boolean=false;
  maxbid:boolean=false;
  biddate:boolean=false;
  amounttocompany:boolean=false;
  companychittimonth:boolean=false;
  submit:boolean=false;
  CompanyChitti:boolean = false;
  Deduction: boolean = false;
  isLoading: boolean = false;
  Backbutton = ' Back';
  addNewBtn : string = 'Submit';
  constructor(private formbuilder:FormBuilder,
    private router: Router,
    private dialog:MatDialog,private cmsService:CmsService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef : MatDialogRef<MasterChittiCreateComponent>
    ) { }
  chittiMasterCreateForm !: FormGroup
  ngOnInit(): void {
    this.chittiMasterCreateForm = this.formbuilder.group({
      chittiType : new FormControl(['',Validators.required]),
      chittiName : new FormControl(''),
      noOfMembers : new FormControl(''),
      noOfMonths : new FormControl(''),
      companyChittiMonth : new FormControl(''),
      startFrom : new FormControl(''),
      endTo : new FormControl(''),
      monthlyAmount : new FormControl(''),
      chittiValue : new FormControl(''),
      amountAfterLifting : new FormControl(''),
      amountToCompany : new FormControl(''),
      deduction : new FormControl(''),
      maxBidAmount : new FormControl(''),
      minBidAmount : new FormControl(''),
      bidDate : new FormControl(''),
    });

    if(this.editData){
      this.chittiTypeChange(this.editData.chittiType);
      this.addNewBtn = 'Update';
      this.chittiMasterCreateForm.controls['chittiType'].setValue(this.editData.chittiType);
      this.chittiMasterCreateForm.controls['chittiName'].setValue(this.editData.chittiName);
      this.chittiMasterCreateForm.controls['noOfMembers'].setValue(this.editData.noOfMembers);
      this.chittiMasterCreateForm.controls['noOfMonths'].setValue(this.editData.noOfMonths);
      this.chittiMasterCreateForm.controls['companyChittiMonth'].setValue(this.editData.companyChittiMonth);
      this.chittiMasterCreateForm.controls['startFrom'].setValue(this.editData.startFrom);
      this.chittiMasterCreateForm.controls['endTo'].setValue(this.editData.endTo);
      this.chittiMasterCreateForm.controls['monthlyAmount'].setValue(this.editData.monthlyAmount);
      this.chittiMasterCreateForm.controls['chittiValue'].setValue(this.editData.chittiValue);
      this.chittiMasterCreateForm.controls['amountAfterLifting'].setValue(this.editData.amountAfterLifting);
      this.chittiMasterCreateForm.controls['amountToCompany'].setValue(this.editData.amountToCompany);
      this.chittiMasterCreateForm.controls['deduction'].setValue(this.editData.deduction);
      this.chittiMasterCreateForm.controls['maxBidAmount'].setValue(this.editData.maxBidAmount);
      this.chittiMasterCreateForm.controls['minBidAmount'].setValue(this.editData.minBidAmount);
      this.chittiMasterCreateForm.controls['bidDate'].setValue(this.editData.bidDate);
    }
  }
  addBack() {
    this.isLoading = true;
    this.Backbutton = ' Back';
    setTimeout(() => {
      this.isLoading = false;
      this.Backbutton = ' Back';
      //z this.spinner.show();
      // setTimeout(() => this.spinner.hide(), 1000);
      this.router.navigate(['/master-chitti']);
    }, 500)
    
  }
  closedialog(){
    this.chittiMasterCreateForm.reset();
    this.dialogRef.close();
  }
  chittiTypeChange(value:any){
    if(value=="FixedChitti"){
    this.CompanyChitti=true;
    this.submit=true;
    this.Deduction=true;
    this.companychittimonth=false;
      this.amounttocompany=false;
      this.minbid=false;
      this.maxbid=false;
      this.biddate=false;
    }
  
    // else{
    // this.CompanyChitti=false;
    // this.submit=false;
    // this.Deduction=false;
    // }
    else if(value=="CompanyChitti"){
      this.CompanyChitti=true;
      this.companychittimonth=true;
      this.amounttocompany=true;
      this.submit=true;
      this.Deduction=false;
      this.minbid=false;
      this.maxbid=false;
      this.biddate=false;
    }
    // else{
    //   this.CompanyChitti=false;
    //   this.companychittimonth=false;
    //   this.amounttocompany=false;
    //   this.submit=false;
    // }
   else if(value=="DividendChitti"){
    this.CompanyChitti=true;
    this.submit=true;
    this.Deduction=true;
    this.companychittimonth=true;
    this.amounttocompany=false;
    this.minbid=true;
    this.maxbid=true;
    this.biddate=true;
   }
   else{
    this.minbid=false;
    this.maxbid =false;
    this.biddate=false;
    this.amounttocompany=false;
    this.companychittimonth=false;
    this.CompanyChitti = false;
    this.Deduction  = false;
   }
  }

  submitForm(form:any){
    if(!this.editData){
        if(this.chittiMasterCreateForm.valid){
        this.cmsService.postChittiMasterCreate(form).subscribe();
        this.chittiMasterCreateForm.reset();
        this.dialogRef.close('Submit');
        this.addNewBtn = 'Submit';
      }
    }
    else{
      this.updateChittiDetails();
    }
  }

  updateChittiDetails(){
    if(this.chittiMasterCreateForm.valid){
      this.cmsService.putChittiMasterCreate(this.chittiMasterCreateForm.value,this.editData.id).subscribe({
        next:()=>{
          this.chittiMasterCreateForm.reset();
          this.dialogRef.close('Update');
        }
      })
    }
  }
}
