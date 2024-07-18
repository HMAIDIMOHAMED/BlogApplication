import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreatePostService {


  baseURL="http://localhost:8080/api/posts/create";


  constructor(private httpClient: HttpClient) { }


  createNewPost(data: any) : Observable<any>{
    return this.httpClient.post(this.baseURL,data);
  }
}
