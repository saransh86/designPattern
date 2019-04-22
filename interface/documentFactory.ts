import { IDocument } from "./document";

export interface IDocumentFactory {
    createDocument(type: string, name: string, path: string): IDocument
}