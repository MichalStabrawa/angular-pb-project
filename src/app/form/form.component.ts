import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-form",
    templateUrl: "./form.component.html",
    styleUrls: ["./form.component.css"],
})
export class FormComponent implements OnInit {
    name: string = "";
    email: string = "";
    isDisabled: boolean = false;
    isVisible: boolean = false;
    test = "";
    show() {
        alert("Dziala");
    }

    constructor() {}

    ngOnInit(): void {}
}
