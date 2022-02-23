import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { User } from "../form/form.component";
import { TetrisCoreComponent } from "ngx-tetris";

@Component({
    selector: "app-game",
    templateUrl: "./game.component.html",
    styleUrls: ["./game.component.css"],
})
export class GameComponent implements OnInit {
    @Input() user!: User; // decorate the property with @Input()
    @ViewChild(TetrisCoreComponent)
    private _tetris!: TetrisCoreComponent;

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
    public status: string = "Ready to game:";
    public endGame: boolean = false;

    constructor() {}

    ngOnInit(): void {}

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
        this.status = "Paused";
    }

    public onPlayAfterpause() {
        this.status = "Playing";
    }

    public onResetStatus() {
        this.status = "Ready to game";
        this.counter = 0;
    }

    public gameOver() {
        alert("Game Over");
        this.endGame = true;
    }
}
