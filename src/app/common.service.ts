import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _http:HttpClient) { }
  userAdded = new Subject();

  createUser(obj){
    console.log(obj)
    return this._http.post("http://localhost:3000/users",obj)
  }

  getLatestUsers(){
    return this._http.get("http://localhost:3000/users");
  }

  updateUser(user){
     return this._http.put("http://localhost:3000/users/"+ user.id,user);
  }

  deleteUser(user){
    return this._http.delete("http://localhost:3000/users/"+ user.id);
  }

  informChild(){
    this.userAdded.next();
  }
}
