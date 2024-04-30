import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

// const client = new Client()
//     .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
//     .setProject('<PROJECT_ID>');               // Your project ID

// const account = new Account(client);

// const promise = account.create('[USER_ID]', 'email@example.com', '');

// promise.then(function (response) {
//     console.log(response); // Success
// }, function (error) {
//     console.log(error); // Failure
// });

export class AuthService{
client=new Client();
account;
constructor(){
  this.client
  .setEndpoint(conf.appwriteUrl)
  .setProject(conf.appwriteProjectId);
  this.account=new Account(this.client);
}

async create({email,password,name}) {
   try {
  const userAccount=  await this.account.create(ID.unique(),email,password,name);

  if(userAccount){
    // return userAccount; call another method
  }
  else{
    return 
  }
   } catch (error) {
    throw error
   }
}  

}

const AuthService=new AuthService();

export default AuthService;  