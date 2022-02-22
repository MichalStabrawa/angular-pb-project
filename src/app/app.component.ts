import { Component } from "@angular/core";
interface User {
    name: string;
    email: string;
}
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
    user: User = {
        name: "",
        email: "",
    };

    addItem(user: User) {
        this.user = user;
        this.flag = true;
    }
}
