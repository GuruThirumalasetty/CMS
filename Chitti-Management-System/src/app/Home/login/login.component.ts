import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CmsService } from 'src/app/Services/cms.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({});
  constructor(private formBuilder: FormBuilder,private router: Router,private authService: AuthService,private cmsService:CmsService) { }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: ['']
    });
  }  
  onSubmit() {
    if (this.loginForm.valid) {
      const username = this.loginForm.value.username;
      const password = this.loginForm.value.password;
  
      if (this.authService.login(username, password)) {
        this.router.navigate(['/dashboard']); 
      } else {
       
      }
    }
  }
  adminLogin(){
    this.cmsService.getAdminLogin().subscribe({
      next:(res)=>{
        if (this.loginForm.valid) {
          const username = this.loginForm.value.username;
          const password = this.loginForm.value.password;
          if(username == res[0].username && password === res[0].password){
            this.router.navigate(['/dashboard']);
            localStorage.setItem('UserName',username);
          }
        }
      }
    })
  }
}
