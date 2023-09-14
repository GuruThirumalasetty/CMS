import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  isExpanded = true;
  showSubmenu: boolean = false;
  showSubmenus: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;
  sidenavWidth = 4;
  showSubMenu: boolean = false;
  isDarkMode = false;
  sidenavRestrictions:any;
  userLogin:any;
  adminLogin:any;
  userName:any;


  constructor(private router: Router) { }

  ngOnInit(): void {
    debugger
    this.sidenavRestrictions = localStorage.getItem('sidenavRestrictions');
    this.sidenavRestrictions = JSON.parse(this.sidenavRestrictions);
    this.userLogin = this.sidenavRestrictions.userLogin;
    this.adminLogin = this.sidenavRestrictions.adminLogin;
    this.userName = localStorage.getItem('UserName')
  }
  logout() {
    //this.userAuthService.logout();
    this.router.navigate(['/']); // Redirect to the login page after logout
    localStorage.removeItem('UserName');
    localStorage.removeItem('sidenavRestrictions');
  }
  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
  }
  toggleSubMenu() {
    this.showSubMenu = !this.showSubMenu;
  }

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
      
    }
  }

}
