import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
private baseApiUrl = 'https://localhost:7201';

constructor(private httpClient: HttpClient) { }
  get<T>(endPoint: string): Observable<T>{
    const url = `${this.baseApiUrl}/${endPoint}`;
    return this.httpClient.get<T>(url);
  }
}
