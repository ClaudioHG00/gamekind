import { Observable, ReplaySubject, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { USERS } from '../mock/user.mock';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  ruoloUtente = new ReplaySubject<string>(1);
  ruoloUtente$ = this.ruoloUtente.asObservable();

  constructor() { }

  insertUser(form: any): Observable<any[]> {
    USERS.push(form);
    return of (USERS);
  }

  getUser(email: string): Observable<User> {
    const user = USERS.find(user => user.email === email);
    return of (user);
  }

  updateRuoloUtente(ruolo: string) {
    this.ruoloUtente.next(ruolo);
  }
}
