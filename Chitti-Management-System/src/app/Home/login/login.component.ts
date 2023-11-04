import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CmsService } from 'src/app/Services/cms.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({});

  showLoginForm: boolean = false;

  adminREquirement:any = {
    adminLogin : true,
    userLogin : false
  }
  userRequirement:any = {
    adminLogin : false,
    userLogin : true
  }
  
  constructor(private formBuilder: FormBuilder,private router: Router,private authService: AuthService,private cmsService:CmsService,private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: ['']
    });
  }  


  toggleLoginForm() {
    this.showLoginForm = !this.showLoginForm;
  }

  // onSubmit() {
  //   if (this.loginForm.valid) {
  //     const username = this.loginForm.value.username;
  //     const password = this.loginForm.value.password;
  
  //     if (this.authService.login(username, password)) {
  //       this.router.navigate(['/dashboard']); 
  //     } else {
       
  //     }
  //   }
  // }

  onSubmit(form:any){
    if(this.loginForm.valid){
      this.cmsService.getAdminLogin().subscribe({
        next:(res)=>{
          res.map((value:any)=>{
            if(value.username === form.username && value.password === form.password){
              localStorage.setItem('UserName',form.username);
              localStorage.setItem('sidenavRestrictions',JSON.stringify(this.adminREquirement));
              this.router.navigate(['dashboard']);
            }
            else{
              this.cmsService.getUserLogin().subscribe({
                next:(res)=>{
                  res.map((val:any)=>{
                    if(val.username === form.username && val.password === form.password){
                      localStorage.setItem('UserName',form.username);
                      localStorage.setItem('sidenavRestrictions',JSON.stringify(this.userRequirement));
                      this.router.navigate(['dashboard']);
                    }
                    else{
                      this.snackBar.open("You Entered Credentials are Wrong", "Okay",{horizontalPosition:'end',duration:4000});
                    }
                  });
                }
              });
            }
          });
        }
      });
    }
  }

}
