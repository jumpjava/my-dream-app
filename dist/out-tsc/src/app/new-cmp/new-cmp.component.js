import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
var NewCmpComponent = /** @class */ (function () {
    function NewCmpComponent() {
        this.isavailable = false;
        this.todaydate = new Date();
        this.newcomponent = "Entered in new component created";
        this.secondheadre = "Welcome to angular 4.0 Demo";
        this.clender = 'Calender Demo';
        this.months = ["January", "Feburary", "March", "April",
            "May", "June", "July", "August",
            "September", "October", "November", "December"];
        this.day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        this.jsonval = { name: 'Rox', age: '25', address: { a1: 'Mumbai', a2: 'Karnataka' } };
    }
    NewCmpComponent.prototype.ngOnInit = function () { };
    NewCmpComponent.prototype.myClickFunction = function (event) {
        //just added console.log which will display the event details in browser on click of the button.
        alert("Button is clicked");
        console.log("Click function clicked");
        console.log(event);
    };
    NewCmpComponent.prototype.changemonths = function (event) {
        console.log("Changed month from the Dropdown");
        console.log(event);
    };
    NewCmpComponent.prototype.changeday = function (event) {
        console.log("Changed day from the Dropdown");
        console.log(event);
    };
    NewCmpComponent = tslib_1.__decorate([
        Component({
            selector: 'app-new-cmp',
            templateUrl: './new-cmp.component.html',
            styleUrls: ['./new-cmp.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], NewCmpComponent);
    return NewCmpComponent;
}());
export { NewCmpComponent };
var MyserviceService = /** @class */ (function () {
    function MyserviceService() {
    }
    MyserviceService.prototype.showTodayDate = function () {
        var ndate = new Date();
        return ndate;
    };
    MyserviceService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [])
    ], MyserviceService);
    return MyserviceService;
}());
export { MyserviceService };
//# sourceMappingURL=new-cmp.component.js.map