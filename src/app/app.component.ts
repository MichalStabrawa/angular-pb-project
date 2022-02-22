import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
})
export class AppComponent {
    title = "angular-snake";
    flag = false;
    veganValue = false;
    currentItem = "Television";
    name = "";
    email = "";

    addItem(newItem: string) {
        this.name = newItem;
    }

    addEmail(newEmail: string) {
        this.email = newEmail;
    }
}
