"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
let Users = class Users {
    constructor() {
        if (!this.id) {
            this.id = (0, uuid_1.v4)();
        }
    }
};
__decorate([
    (0, typeorm_1.PrimaryColumn)()
], Users.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)()
], Users.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)()
], Users.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)()
], Users.prototype, "created_At", void 0);
Users = __decorate([
    (0, typeorm_1.Entity)("users")
], Users);
exports.Users = Users;
