import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  isAdmin: boolean = true}{
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return user && user.role === 'admin'; 
  }
