import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  readonly BASE_URL = 'https://gutendex.com/books/'

  getBooks(){
    return this.http.get<any>(this.BASE_URL)
  }

  searchBooks(searchTerm: string): Observable<any> {
    const url = `${this.BASE_URL}/books?search=${searchTerm}`;
    return this.http.get(url);
  }
}
