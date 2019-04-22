import { IUser } from '../../interface/user';
import { IDocument } from '../../interface/document';
import { inject, injectable, interfaces } from "inversify";
import { IDocumentFactory } from '../../interface/documentFactory';
import SERVICE_IDENTIFIER from "../../constants/identifies";
import 'reflect-metadata';
@injectable()
export class User implements IUser{
    _username: string;
    _password : string;
    _email: string;
    _fileInstance : IDocumentFactory;
    _documents: IDocument[];
    public constructor(@inject(SERVICE_IDENTIFIER.IDOCUMENTFACTORY) file: IDocumentFactory, username: string, password: string, email: string ){
        this._username = username;
        this._password = password;
        this._email = email;  
        this._fileInstance = file;
        this._documents = []; 
    }
    
    public upload(document: IDocument): boolean{
        console.log(this._username + ' has uploaded file ' + document.name);
        this._documents.push(document);
        return true;
    }

    public create(document: IDocument): boolean {
        console.log(this._username + ' has created directory ' + document.name);
        this._documents.push(document);
        return true;
    }

    public delete(document: IDocument): boolean {
        
        return true;
    }

    public getAllDocuments(): IDocument[]{
        return this._documents;
    }

    public getFileInstance(): IDocumentFactory {
        return this._fileInstance;
    }

    public getEmail() : string {
        return this._email;
    }

    public getUsername(): string {
        return this._username;
    }
}