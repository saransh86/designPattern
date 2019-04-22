import { Directory } from "./directory";
import { File } from "./file";
import { IDocumentFactory } from "../../interface/documentFactory";
import { inject, injectable } from "inversify";
import "reflect-metadata";
@injectable()
export class DocumentFactory implements IDocumentFactory {
    public createDocument (type: string, name: string, path: string){
        if(type === 'file'){
            return new File(name, path);
        }
        else if(type == 'directory'){
            return new Directory(name, path);
        }
        else {
            throw new Error("Type of Doc not defined!");
        }
    }
}