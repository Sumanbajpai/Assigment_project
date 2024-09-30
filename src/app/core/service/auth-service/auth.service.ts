import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = 'Token';

  constructor() { }

  // Method to save token to local storage
  saveToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  // Method to get the token from local storage
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  // Method to remove the token from local storage
  clearToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  // Method to check if user is logged in
  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }
}
