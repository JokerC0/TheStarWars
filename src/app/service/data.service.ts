import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http/';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) {

    console.log('DataService. Construct');

  }

  getData(url: string): Observable<any> {

    return this.http.get(url);

  }

}
