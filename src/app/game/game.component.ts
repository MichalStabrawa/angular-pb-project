import { StorageService } from './../storage.service';
import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { TetrisCoreComponent } from 'ngx-tetris';

interface User {
  name: string;
  email: string;
}

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  @ViewChild(TetrisCoreComponent)
  private _tetris!: TetrisCoreComponent;
  public text: string = '';

  public onStart() {
    this._tetris.actionStart();
    this.timerGo();
    this.onPlayAfterpause();
  }

  public onPauseSet() {
    this._tetris.actionStop();
    this.onPause();
  }

  public onReset() {
    this._tetris.actionReset();
    this.onResetStatus();
  }

  public counter: number = 0;
  public timerHours: number = 0;
  public timerMinutes: number = 0;
  public timerSeconds: number = 0;
  public status: string = 'Ready to game:';
  public endGame: boolean = false;
  public user!: User;

  constructor(private _storage: StorageService) {}

  ngOnInit(): void {
    this.text = this._storage.readSecret();
    this.user = this._storage.readUser();
  }

  public onGrow() {
    this.counter += 1;
  }
  public timerGo() {
    setInterval(() => {
      if (this.timerSeconds < 59) {
        this.timerSeconds++;
      } else {
        this.timerSeconds = 0;
        this.timerMinutes++;
        if (this.timerMinutes == 59) {
          this.timerMinutes = 0;
          this.timerHours++;
        }
      }
    }, 1000);
  }

  public onPause() {
    this.status = 'Paused';
  }

  public onPlayAfterpause() {
    this.status = 'Playing';
  }

  public onResetStatus() {
    this.status = 'Ready to game';
    this.counter = 0;
  }

  public gameOver() {
    alert('Game Over');
    this.endGame = true;
  }
}
