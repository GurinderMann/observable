import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Items } from './Items';

@Injectable({
  providedIn: 'root'
})
export class ObsService {
  private url:string = 'https://dummyjson.com/products/'
  constructor(
    private http: HttpClient
  ) { }

  get():Observable<Items[]>{
    return this.http.get<Items[]>(this.url)
  }
}
