"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Appemployee = (function () {
    function Appemployee() {
        this.columnSpan = 2;
        this.firstname = 'Hassan';
        this.Lastname = 'chinta';
        this.Gender = 'male';
        this.Age = 24;
        this.showDetails = false;
    }
    Appemployee.prototype.toogleDetails = function () {
        this.showDetails = !this.showDetails;
    };
    Appemployee = __decorate([
        core_1.Component({
            selector: 'employee-app',
            templateUrl: 'app/app.employee.html',
        }), 
        __metadata('design:paramtypes', [])
    ], Appemployee);
    return Appemployee;
}());
exports.Appemployee = Appemployee;
