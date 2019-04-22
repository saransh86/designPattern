import { IDocument } from "./document";
import { DocumentFactory } from "../entities/Document/documentFactory";
import { IDocumentFactory } from "./documentFactory";

export interface IUser{
    _username: string;
    _password: string;
    _email: string;
    _fileInstance: DocumentFactory;
    upload(document: IDocument): boolean;
    create(document: IDocument): boolean;
    delete(document: IDocument): boolean
    getAllDocuments(): IDocument[];
    getFileInstance(): IDocumentFactory;
    getEmail() : string;
    getUsername() : string;
}