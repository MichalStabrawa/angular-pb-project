import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-form",
    templateUrl: "./form.component.html",
    styleUrls: ["./form.component.css"],
})
export class FormComponent implements OnInit {
    public name: string = "";
    public email: string = "";
    public isDisabled: boolean = false;
    public isVisible: boolean = false;
    show() {
        alert("Dziala");
    }
    onInputChange(event: any): void {
        if (event.target.type === "text") {
            console.log(event.target.type);
            this.name = event.target.value;
        } else if (event.target.type === "email") {
            console.log(event.target.type);
        } else {
            null;
        }
    }
    constructor() {}

    ngOnInit(): void {}
}
