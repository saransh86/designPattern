import {User} from './entities/User/user';
import {IUser} from './interface/user';
import container from "./config/ioc_config";
import SERVICE_IDENTIFIER from "./constants/identifies";
// import {Directory} from './entities/Document/directory';
// import {File} from './entities/Document/file';
//let user = new User('saransh', 'test', 't@t.com');

// let user = container.get<IUser>(SERVICE_IDENTIFIER.IUSER);
// console.log(user);

let userFactory = container.get<(username: string, password: string, email: string) => User>("User");
let user1 = userFactory("saransh", "test123", "t@t.com");
let user2 = userFactory("parina", "test213", "p@p.com");
console.log(user1);
console.log(user2);

let saranshDoc1 = user1.getFileInstance().createDocument('file', "saranshDoc1", "root");
user1.upload(saranshDoc1);

let parinaDoc1 = user2.getFileInstance().createDocument('file', "parinaFile1", "root/");
let parinaDoc2 = user2.getFileInstance().createDocument('directory', "level1", "root/");
user2.upload(parinaDoc1);
user2.create(parinaDoc2);


console.log(user2);
console.log(user1);

user2.getAllDocuments().forEach(docs => {
    console.log(docs.isDirectory());
});