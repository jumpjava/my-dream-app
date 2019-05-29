import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Http } from '@angular/http';
var AppComponent = /** @class */ (function () {
    function AppComponent(http) {
        this.http = http;
        //title = 'my-dream-app';
        this.title = 'Angular-2 Demo';
        this.clender = 'Angular-2 Demo';
        this.months = ["January", "Feburary", "March", "April",
            "May", "June", "July", "August",
            "September", "October", "November", "December"];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.http.get("http://jsonplaceholder.typicode.com/users").
            map((response), response.json()).
            subscribe((data), console.log(data));
    };
    var _a;
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof Http !== "undefined" && Http) === "function" ? _a : Object])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map