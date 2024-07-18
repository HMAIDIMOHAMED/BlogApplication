import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchByNameService {

  baseURL = "http://localhost:8080/api/posts/search";

  constructor(private httpClient: HttpClient) { }

  getPostByName(name: string): Observable<any> {
    return this.httpClient.get(`${this.baseURL}/${name}`);  }
}
