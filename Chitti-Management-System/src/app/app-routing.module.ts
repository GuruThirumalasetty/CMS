import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideNavComponent } from './Home/side-nav/side-nav.component';
import { LoginComponent } from './Home/login/login.component';
import { MasterChittiListComponent } from './Admin-Pages/master-chitti-list/master-chitti-list.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"login",component:LoginComponent},
  {path:"side-nav",component:SideNavComponent},
  {
    path: 'master-chitti-list',
    component: SideNavComponent,
    children: [
      { path: '', component:MasterChittiListComponent  }
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
