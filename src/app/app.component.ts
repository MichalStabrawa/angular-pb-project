import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface User {
  name: string;
  email: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private _router: Router) {}
  title = 'angular-snake';
  flag = false;
  veganValue = false;
  currentItem = 'Television';
  name = '';
  email = '';
  user: User = {
    name: '',
    email: '',
  };

  addItem(user: User) {
    this.user = user;
    this.flag = true;
  }

  goBack() {
    this.flag = false;
    this._router.navigate(['/A']);
  }
}
