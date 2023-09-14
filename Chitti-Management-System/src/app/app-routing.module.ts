import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideNavComponent } from './Home/side-nav/side-nav.component';
import { LoginComponent } from './Home/login/login.component';
import { MasterChittiListComponent } from './Admin-Pages/master-chitti-list/master-chitti-list.component';
import { DasboardComponent } from './dasboard/dasboard.component';
import { authGuardGuard } from './Guard/auth-guard.guard';
import { CustomerChittiListComponent } from './Admin-Pages/customer-chitti-list/customer-chitti-list.component';
import { ChittiPaymentListComponent } from './Admin-Pages/chitti-payment-list/chitti-payment-list.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
