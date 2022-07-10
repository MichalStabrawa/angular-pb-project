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
    this._storage.getFlag().subscribe((click) => {
      this.flag = click;
    });
    this._storage.goBack(this.flag).subscribe((e) => {
      this.flag = e;
    });
  }

  goBack() {
    this.flag = false;
    this._storage.goBack(this.flag);
    this._router.navigate(['/A']);
  }
}
