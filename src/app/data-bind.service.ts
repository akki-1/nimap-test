import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataBindService {

  constructor(private http: HttpClient) { }
  userObservable;
  user: any = {

  };
  imageUrl = ""
  url: string = "http://localhost:3000/posts";
  response;
  id: number;


  setUser(user: any) {
    this.user = user;
    this.http.post(this.url, user).subscribe((res) => {
      // console.log(res);
      this.response = (<any>res)
      // console.log(this.response.id);
      this.id = this.response.id
      console.log(this.id);


    })

  }

  // can't retrieve data via id as id is set by Json server, we can retrieve all user list, but if this was a Spring Boot server then yes I can retrive data via id 
  // 
  getUser() {

    return this.user;

  }
  setImageUrl(url) {
    this.imageUrl = url;
  }
  getImageUrl() {
    return this.imageUrl;
  }
}
