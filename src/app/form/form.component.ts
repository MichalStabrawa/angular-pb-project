import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

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
  @Output() newItemEvent = new EventEmitter<User>();

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

    this.newItemEvent.emit(user);

    console.log('name', value);
    console.log('el', el);
  }

  constructor(private _router: Router) {}

  ngOnInit(): void {}
}
