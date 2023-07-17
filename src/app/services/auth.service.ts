import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { USERS } from '../mock/user.mock';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router,
  ) { }

  login (email:string, password: string): Observable<User> {
    const user = USERS.find(user => user.email === email && user.password === password);
    return of (user);
  }

  saveStorage(dati: User) {
    const user: User = {
      name: dati.name,
      email: dati.email,
      password: dati.password,
      role: dati.role,
    }
    localStorage.setItem('user', JSON.stringify(user))
  }

  isLogged(): boolean {
    return JSON.parse(localStorage.getItem('user')) !== null;
  }

  logout(): void {
    localStorage.removeItem('user');
    this.router.navigateByUrl('login');
  }
}
