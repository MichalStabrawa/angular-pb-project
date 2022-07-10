import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from './storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-snake';

  veganValue = false;
  currentItem = 'Television';
  name = '';
  email = '';
  public flag!: boolean;

  constructor(private _storage: StorageService, private _router: Router) {}

  ngOnInit(): void {
    this.flag = this._storage.returnFlag();
  }

  goBack() {
    this.flag = false;
    this._router.navigate(['/A']);
  }
}
