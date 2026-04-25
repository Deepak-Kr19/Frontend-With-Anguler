import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  role = signal<'manager' | 'trainee'>('trainee');

  setRole(role: 'manager' | 'trainee'){
    this.role.set(role);
  }

  // getRole(){
  //   return this.role;
  // }

  isManager(){
    return this.role() === 'manager';
  }
}
