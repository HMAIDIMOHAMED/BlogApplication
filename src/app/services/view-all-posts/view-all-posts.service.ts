import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewAllPostsService {

  baseURL = "http://localhost:8080/api/posts/all";

  constructor(private httpClient: HttpClient) { }

  getAllPosts(): Observable<any>{
    return this.httpClient.get(this.baseURL); 
  }
}
