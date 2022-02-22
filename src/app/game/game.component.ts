import { Component, OnInit, Input } from "@angular/core";
import { User } from "../form/form.component";

@Component({
    selector: "app-game",
    templateUrl: "./game.component.html",
    styleUrls: ["./game.component.css"],
})
export class GameComponent implements OnInit {
    @Input() user!: User; // decorate the property with @Input()

    constructor() {}

    ngOnInit(): void {}
}
