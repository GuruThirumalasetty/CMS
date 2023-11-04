import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Home/login/login.component';
import { SideNavComponent } from './Home/side-nav/side-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core'
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatMenuModule } from '@angular/material/menu';
import { MasterChittiListComponent } from './Admin-Pages/master-chitti-list/master-chitti-list.component';
import { CustomerChittiListComponent } from './Admin-Pages/customer-chitti-list/customer-chitti-list.component';
import { MasterChittiCreateComponent } from './Admin-Pages/master-chitti-list/master-chitti-create/master-chitti-create.component';
import { CustomerRegistrationComponent } from './Admin-Pages/customer-chitti-list/customer-registration/customer-registration.component';
import { DasboardComponent } from './dasboard/dasboard.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ChittiPaymentDetailsComponent } from './Admin-Pages/chitti-payment-details/chitti-payment-details.component';
import { ChittiPaymentListComponent } from './Admin-Pages/chitti-payment-list/chitti-payment-list.component';
import { MyChittsComponent } from './User-Pages/my-chitts/my-chitts.component';
import { MyProfileComponent } from './User-Pages/my-profile/my-profile.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { UserPaymentComponent } from './User-Pages/user-payment/user-payment.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SideNavComponent,
    MasterChittiListComponent,
    CustomerChittiListComponent,
    MasterChittiCreateComponent,
    CustomerRegistrationComponent,
    DasboardComponent,
    ChittiPaymentDetailsComponent,
    ChittiPaymentListComponent,
    MyChittsComponent,
    MyProfileComponent,
    UserPaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    ReactiveFormsModule,
    FormsModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatPaginatorModule,
    MatTableModule,
    MatTooltipModule,
    FlexLayoutModule,
    NgxSpinnerModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
