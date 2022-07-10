import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

interface User {
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private _secret = 'some secret string';
  private _flag: boolean = false;
  private actualFlag = new Subject<boolean>();

  private _user: User = {
    name: '',
    email: '',
  };

  constructor() {}

  readSecret() {
    return this._secret;
  }

  addItem(user: User) {
    this._user = user;

    this.actualFlag.next((this._flag = !this._flag));
  }

  getFlag(): Observable<boolean> {
    return this.actualFlag.asObservable();
  }

  readUser() {
    return this._user;
  }
}
