import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewPostService {

  baseURL = "http://localhost:8080/api/posts";

  constructor(private httpClient: HttpClient) { }

  getPostsById(postId: number): Observable<any> {
    return this.httpClient.get(`${this.baseURL}/${postId}`);
  }
}
