import "reflect-metadata";

import { Container, interfaces } from "inversify";

import { IUser } from "../interface/user";
import {DocumentFactory} from "../entities/Document/documentFactory";
import { User} from "../entities/User/user";
import {File} from "../entities/Document/file";
import {Directory} from "../entities/Document/directory";
import { IDocumentFactory } from "../interface/documentFactory";
import SERVICE_IDENTIFIER from "../constants/identifies";
import { IDocument } from "../interface/document";
import 'reflect-metadata';
let container = new Container();


container.bind<IDocumentFactory>(SERVICE_IDENTIFIER.IDOCUMENTFACTORY).to(DocumentFactory);



// container.bind<IUser>(SERVICE_IDENTIFIER.IUSER).toDynamicValue((context: interfaces.Context) => {
//     return new User(context.container.get(SERVICE_IDENTIFIER.IDOCUMENTFACTORY), "saransh", "test124", "test@t.com");
// })

container.bind<(username: string, password:string, email: string) => User>("User").toFactory<User>((context: interfaces.Context) => {
    return (username: string, password: string, email: string) => {
        let DocumentFactory = context.container.get<IDocumentFactory>(SERVICE_IDENTIFIER.IDOCUMENTFACTORY);
        return new User(DocumentFactory, username, password, email);
    }
})
export default container;