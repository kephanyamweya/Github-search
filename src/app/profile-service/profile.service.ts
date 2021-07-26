import { environment } from "src/environments/environment";
import{ HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators';



@Injectable({
    providedIn: 'root'
  })
  export class ProfileService {
  
    private username:string;
    apiKey:string = environment.apiKey;
    private clientid='f11412f1539f4206fdc7';
    private clientsecret='d82675fe7bbeded6ef32736cb33890a638c0a634';
  
    constructor(private http:HttpClient) {
       console.log("I am here now")
       this.username = 'cynthiaoduol';
     }
  
     getInfo(){
       return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
       .pipe(map((response: any) => response)); 
     }
  
     getRepos(){
      return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
      .pipe(map((response: any) => response)); 
     }
  
     updateProfile(username:string){
      this.username = username
     }
     
  }
  