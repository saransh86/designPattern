"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var directory_1 = require("../entities/Document/directory");
var file_1 = require("../entities/Document/file");
var inversify_1 = require("inversify");
require("reflect-metadata");
var FileFactory = /** @class */ (function () {
    function FileFactory() {
    }
    FileFactory.prototype.getDocument = function (type, name, path) {
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
    FileFactory = __decorate([
        inversify_1.injectable()
    ], FileFactory);
    return FileFactory;
}());
exports.FileFactory = FileFactory;
//# sourceMappingURL=fileFactory.js.map