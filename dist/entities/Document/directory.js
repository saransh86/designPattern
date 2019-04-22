"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Directory = /** @class */ (function () {
    function Directory(name, path) {
        this.name = name;
        this.path = path;
    }
    Directory.prototype.isDirectory = function () {
        console.log("I AM a directory");
        return true;
    };
    return Directory;
}());
exports.Directory = Directory;
//# sourceMappingURL=directory.js.map