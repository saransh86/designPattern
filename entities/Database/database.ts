import { IDatabase } from "../../interface/database";
import { MongoClient } from "mongodb";

export class Database {
    private static _connection : MongoClient;
    public constructor(){
        
    }

    public static async getConnection() {
        if(!this._connection){
            //console.log("ok, dont have the connection, creating one!")
            const client = await MongoClient.connect('mongodb://localhost:27018', { useNewUrlParser: true });
            this._connection = client;
        }
        //console.log("I have an existing connection, sending you the previous one");
        return this._connection; 
    }
}