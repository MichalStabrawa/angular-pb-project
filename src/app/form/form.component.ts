import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../storage.service';

export interface User {
  name: string;
  email: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input() item = ''; // decorate the property with @Input()

  public availableColors = [
    {
      name: 'normal',
      value: '',
    },
    { name: 'hight-contrast', value: 'black-and-white' },
  ];

  name: string = '';
  email: string = '';
  isDisabled: boolean = false;
  isVisible: boolean = false;
  test = '';
  color: string = 'black';

  addNewItem(value: string, el: string) {
    const user: User = {
      name: value,
      email: el,
    };

    this._storage.addItem(user);

    this._router.navigate(['/B', this.color]);

    console.log('name', value);
    console.log('el', el);
  }

  constructor(private _storage: StorageService, private _router: Router) {}

  onColorChange(event: any): void {
    this.color = event.target.value;
  }

  ngOnInit(): void {}
}
