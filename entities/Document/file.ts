
import { IDocument } from '../../interface/document';
export class File implements IDocument{
    
    public name: string;
    public path: string;

    public constructor(name: string, path: string){
        this.name = name;
        this.path = path;
    }

    public isDirectory() {
        console.log("I AM NOT a directory");
        return false;
    }
}