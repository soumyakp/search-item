import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {
  constructor(private http: HttpClient) {}

  getList(searchText: string): Observable<any> {
    return this.http.get(
      `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${searchText}&apikey=6871af630ca51742153d2db8dbf10dcb&hash=609bb5211dbf0e54c53e927bb92f5ee7&ts=1`
    );

    // apikey=6871af630ca51742153d2db8dbf10dcb
    // hash=609bb5211dbf0e54c53e927bb92f5ee7
    // ts=1
  }
}
