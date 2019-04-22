"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var inversify_1 = require("inversify");
var documentFactory_1 = require("../entities/Document/documentFactory");
var user_1 = require("../entities/User/user");
var identifies_1 = __importDefault(require("../constants/identifies"));
require("reflect-metadata");
var container = new inversify_1.Container();
container.bind(identifies_1.default.IDOCUMENTFACTORY).to(documentFactory_1.DocumentFactory);
// container.bind<IUser>(SERVICE_IDENTIFIER.IUSER).toDynamicValue((context: interfaces.Context) => {
//     return new User(context.container.get(SERVICE_IDENTIFIER.IDOCUMENTFACTORY), "saransh", "test124", "test@t.com");
// })
container.bind("User").toFactory(function (context) {
    return function (username, password, email) {
        var DocumentFactory = context.container.get(identifies_1.default.IDOCUMENTFACTORY);
        return new user_1.User(DocumentFactory, username, password, email);
    };
});
exports.default = container;
//# sourceMappingURL=ioc_config.js.map