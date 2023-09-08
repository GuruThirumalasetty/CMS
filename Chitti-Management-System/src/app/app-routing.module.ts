import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideNavComponent } from './Home/side-nav/side-nav.component';
import { LoginComponent } from './Home/login/login.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"side-nav",component:SideNavComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
