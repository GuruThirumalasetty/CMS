import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideNavComponent } from './Home/side-nav/side-nav.component';
import { LoginComponent } from './Home/login/login.component';
import { MasterChittiListComponent } from './Admin-Pages/master-chitti-list/master-chitti-list.component';
import { DasboardComponent } from './dasboard/dasboard.component';
import { authGuardGuard } from './Guard/auth-guard.guard';
import { CustomerChittiListComponent } from './Admin-Pages/customer-chitti-list/customer-chitti-list.component';
import { ChittiPaymentListComponent } from './Admin-Pages/chitti-payment-list/chitti-payment-list.component';
import { MyChittsComponent } from './User-Pages/my-chitts/my-chitts.component';
import { MyProfileComponent } from './User-Pages/my-profile/my-profile.component';
import { UserPaymentComponent } from './User-Pages/user-payment/user-payment.component';
import { OtpVerificationComponent } from './otp-verification/otp-verification.component';

const routes: Routes = [
  {
    path:"",
    component:LoginComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"side-nav",
    component:SideNavComponent,
    canActivate:[authGuardGuard]
  },
  {
    path: 'dashboard',
    component: SideNavComponent,
    canActivate:[authGuardGuard],
    children: [
      { path: '', component: DasboardComponent }
    ]
  },
  {
    path: 'master-chitti-list',
    component: SideNavComponent,
    canActivate:[authGuardGuard],
    children: [
      { path: '', component:MasterChittiListComponent  }
     
    ]
  },
  {
    path: 'customer-list',
    component: SideNavComponent,
    children: [
      { path: '', component:CustomerChittiListComponent  }
     
    ]
  },
  {
    path: 'customer-payment-list',
    component: SideNavComponent,
    children: [
      { path: '', component:ChittiPaymentListComponent  }     
    ]
  },
  {
    path:'my-chits',
    component:SideNavComponent,
    children:[
      {path:'',component:MyChittsComponent}
    ]
  },
  {
    path:'my-profile',
    component:SideNavComponent,
    children:[
      {path:'',component:MyProfileComponent}
    ]
  },
  {
    path:'user-payment',
    component:SideNavComponent,
    children:[
      {path:'',component:UserPaymentComponent}
    ]
  },
  
  {
    path: 'otp-vrification',
    component: SideNavComponent,
    children: [
      { path: '', component:OtpVerificationComponent  }
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
