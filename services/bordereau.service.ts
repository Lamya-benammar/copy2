import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { bordereau } from '../models/bordereau.module';

@Injectable({
  providedIn: 'root'
})
export class BordereauService {

  

  constructor(private http: HttpClient){
  }
  
  private addUrl = 'http://localhost:8089/Stage/bordereau/add';
  addBordereau(bordereau: bordereau): Observable<bordereau>{
      return this.http.post<bordereau>(this.addUrl, bordereau);
  }


  getData(): Observable<any[]> {
      const url = "http://localhost:8089/Stage/bordereau/liste";
      return this.http.get<any[]>(url);
  }
  

}
