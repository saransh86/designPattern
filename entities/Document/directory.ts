import { IDocument } from '../../interface/document';
export class Directory implements IDocument{
    
    public name: string;
    public path: string;

    public constructor(name: string, path: string){
        this.name = name;
        this.path = path;
    }

    public isDirectory() {
        console.log("I AM a directory");
        return true;
    }
}