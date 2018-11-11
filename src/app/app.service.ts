import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable()
export class AppService {

  constructor(private http: HttpClient) {
  }

  abc(id:number):Observable<Blob> {
    console.log("B");
    return this.http.get('//localhost:8080/abc/'+id,{responseType: "blob"})
  }
}
