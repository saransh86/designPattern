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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var identifies_1 = __importDefault(require("../../constants/identifies"));
require("reflect-metadata");
var User = /** @class */ (function () {
    function User(file, username, password, email) {
        this._username = username;
        this._password = password;
        this._email = email;
        this._fileInstance = file;
        this._documents = [];
    }
    User.prototype.upload = function (document) {
        console.log(this._username + ' has uploaded file ' + document.name);
        this._documents.push(document);
        return true;
    };
    User.prototype.create = function (document) {
        console.log(this._username + ' has created directory ' + document.name);
        this._documents.push(document);
        return true;
    };
    User.prototype.delete = function (document) {
        return true;
    };
    User.prototype.getAllDocuments = function () {
        return this._documents;
    };
    User.prototype.getFileInstance = function () {
        return this._fileInstance;
    };
    User.prototype.getEmail = function () {
        return this._email;
    };
    User.prototype.getUsername = function () {
        return this._username;
    };
    User = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(identifies_1.default.IDOCUMENTFACTORY)),
        __metadata("design:paramtypes", [Object, String, String, String])
    ], User);
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map