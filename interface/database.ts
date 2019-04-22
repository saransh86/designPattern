import { MongoClient } from "mongodb";
export interface IDatabase {
    //_connection: MongoClient,
    getConnection(): Promise<MongoClient>
}