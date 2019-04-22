"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var File = /** @class */ (function () {
    function File(name, path) {
        this.name = name;
        this.path = path;
    }
    File.prototype.isDirectory = function () {
        console.log("I AM NOT a directory");
        return false;
    };
    return File;
}());
exports.File = File;
//# sourceMappingURL=file.js.map