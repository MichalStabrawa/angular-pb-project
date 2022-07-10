import { Injectable } from '@angular/core';

interface User {
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private _secret = 'some secret string';
  private flag: boolean = false;

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
    this.flag = !this.flag;
  }

  returnFlag() {
    return this.flag;
  }

  readUser() {
    return this._user;
  }
}
