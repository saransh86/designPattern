"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var directory_1 = require("./directory");
var file_1 = require("./file");
var inversify_1 = require("inversify");
require("reflect-metadata");
var DocumentFactory = /** @class */ (function () {
    function DocumentFactory() {
    }
    DocumentFactory.prototype.createDocument = function (type, name, path) {
        if (type === 'file') {
            return new file_1.File(name, path);
        }
        else if (type == 'directory') {
            return new directory_1.Directory(name, path);
        }
        else {
            throw new Error("Type of Doc not defined!");
        }
    };
    DocumentFactory = __decorate([
        inversify_1.injectable()
    ], DocumentFactory);
    return DocumentFactory;
}());
exports.DocumentFactory = DocumentFactory;
//# sourceMappingURL=documentFactory.js.map