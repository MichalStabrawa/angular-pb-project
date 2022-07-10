import { Component } from '@angular/core';
import { StorageService } from './storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StorageService],
})
export class AppComponent {
  title = 'angular-snake';

  veganValue = false;
  currentItem = 'Television';
  name = '';
  email = '';
  flag: boolean = false;
  user = {
    name: '',
    email: '',
  };

  constructor(private _storage: StorageService) {}

  ngOnInit(): void {
    this.flag = this._storage.returnFlag();
  }
}
