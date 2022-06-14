import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataBindService {

  constructor() { }
  userObservable;
  user:any={};
  imageUrl=""

  setUser(user:any){
    
    this.user=user;
  }

  getUser(){
    
    return  this.userObservable=new Observable((userData)=>{

      userData.next(this.user)
    })
    // return this.user;
  }
  setImageUrl(url){
    this.imageUrl=url;
  }
  getImageUrl(){
    return this.imageUrl;
  }
}
