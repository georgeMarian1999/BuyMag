export class User {
  id: string;
  username: string;
  password: string;
  name: string;
  admin: boolean;
  language?: string;
  age?:number;
  constructor(username:string,password:string,name:string,id?:string) {
    if(id){
      this.id = id;
    }
    else {
      this.id = Math.floor((1 + Math.random()) * 0x10000).toString(16)
        .substring(1);
    }
    this.username = username;
    this.password = password;
    this.name = name;

    this.admin = false;
  }

}
