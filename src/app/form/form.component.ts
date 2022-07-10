import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StorageService } from '../storage.service';

export interface User {
  name: string;
  email: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Input() item = ''; // decorate the property with @Input()

  name: string = '';
  email: string = '';
  isDisabled: boolean = false;
  isVisible: boolean = false;
  test = '';

  addNewItem(value: string, el: string) {
    const user: User = {
      name: value,
      email: el,
    };

    this._storage.addItem(user);

    console.log('name', value);
    console.log('el', el);
  }

  constructor(private _storage: StorageService) {}

  ngOnInit(): void {}
}
