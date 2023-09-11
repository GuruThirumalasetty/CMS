import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;
  private authenticatedUser: string | null = null;
  constructor() { }

  login(username: string, password: string): boolean {
    if (username === 'koti' && password === 'koti@123') {
      this.authenticatedUser = username;
      localStorage.setItem('UserName',username)
      return true;
    }
    return false;
  }
}
