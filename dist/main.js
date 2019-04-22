"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ioc_config_1 = __importDefault(require("./config/ioc_config"));
// import {Directory} from './entities/Document/directory';
// import {File} from './entities/Document/file';
//let user = new User('saransh', 'test', 't@t.com');
// let user = container.get<IUser>(SERVICE_IDENTIFIER.IUSER);
// console.log(user);
var userFactory = ioc_config_1.default.get("User");
var user1 = userFactory("saransh", "test123", "t@t.com");
var user2 = userFactory("parina", "test213", "p@p.com");
console.log(user1);
console.log(user2);
var saranshDoc1 = user1.getFileInstance().createDocument('file', "saranshDoc1", "root");
user1.upload(saranshDoc1);
var parinaDoc1 = user2.getFileInstance().createDocument('file', "parinaFile1", "root/");
var parinaDoc2 = user2.getFileInstance().createDocument('directory', "level1", "root/");
user2.upload(parinaDoc1);
user2.create(parinaDoc2);
console.log(user2);
console.log(user1);
user2.getAllDocuments().forEach(function (docs) {
    console.log(docs.isDirectory());
});
//# sourceMappingURL=main.js.map