import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false; 
  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
