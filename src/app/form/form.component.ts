import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "app-form",
    templateUrl: "./form.component.html",
    styleUrls: ["./form.component.css"],
})
export class FormComponent implements OnInit {
    @Input() item = ""; // decorate the property with @Input()
    @Output() newItemEvent = new EventEmitter<string>();

    name: string = "";
    email: string = "";
    isDisabled: boolean = false;
    isVisible: boolean = false;
    test = "";

    show() {
        alert("Dziala");
    }

    addNewItem(value: string) {
        this.newItemEvent.emit(value);
        console.log(value);
    }

    constructor() {}

    ngOnInit(): void {}
}
