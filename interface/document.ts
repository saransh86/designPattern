
export interface IDocument {
    name: string;
    path: string;
    isDirectory(): boolean;
}