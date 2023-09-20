import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CmsService {

  constructor(private http:HttpClient) { }

  getAdminLogin(){
    return this.http.get<any>("http://localhost:3000/adminLogin");
  }
  postUserLogin(data:any){
    return this.http.post<any>("http://localhost:3000/userLogin",data);
  }
  deleteUserLogin(id:number){
    return this.http.delete<any>("http://localhost:3000/userLogin/"+id);
  }
  getUserLogin(){
    return this.http.get<any>("http://localhost:3000/userLogin");
  }
  postChittiMasterCreate(data:any){
    return this.http.post<any>("http://localhost:3000/master-chitti-create",data);
  }
  getChittiMasterCreateDetails(){
    return this.http.get<any>("http://localhost:3000/master-chitti-create");
  }
  putChittiMasterCreate(data:any,id:number){
    return this.http.put<any>("http://localhost:3000/master-chitti-create/"+id,data);
  }
  deleteChittiMasterCreateDetails(id:number){
    return this.http.delete<any>("http://localhost:3000/master-chitti-create/"+id);
  }

  getCustomerRegistrationDetails(){
    return this.http.get<any>("http://localhost:3000/customer-registration");
  }
  postCustomerRegistrationDetails(data:any){
    return this.http.post<any>("http://localhost:3000/customer-registration",data);
  }
  putCustomerRegistrationDetails(data:any,id:number){
    let requiredURL = "http://localhost:3000/customer-registration/"+id
    return this.http.put<any>(requiredURL,data);
  }
  deleteCustomerRegistrationDetails(id:number){
    return this.http.delete<any>("http://localhost:3000/customer-registration/"+id);
  }
  getNotification(){
    return this.http.get<any>("http://localhost:3000/userNotifications");
  }
  postNotification(data:any){
    return this.http.post<any>("http://localhost:3000/userNotifications",data);
  }
  putNotification(data:any,id:number){
    return this.http.put<any>("http://localhost:3000/userNotifications/"+id,data);
  }
  deleteNotification(id:any){
    return this.http.delete<any>("http://localhost:3000/userNotifications/"+id);
  }
}
