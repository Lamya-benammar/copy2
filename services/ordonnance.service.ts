import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ordonnance } from '../models/ordonnance.module';
import { Observable } from 'rxjs';
import { bordereau } from '../models/bordereau.module';

@Injectable({
  providedIn: 'root'
})
export class OrdonnanceService {
  private addUrl = 'http://localhost:8089/Stage/ordonnances/add';

  constructor(private http: HttpClient){
  }
  
  addSugRec(ordonnance: ordonnance): Observable<ordonnance>{
      return this.http.post<ordonnance>(this.addUrl, ordonnance);
  }


  getData(): Observable<any[]> {
      const url = "http://localhost:8089/Stage/ordonnances/liste";
      return this.http.get<any[]>(url);
  }

  private addUrlb = 'http://localhost:8089/Stage/bordereau/add';

  addBordereau(bordereau: bordereau): Observable<any> {
    return this.http.post<bordereau>(this.addUrlb, bordereau);
  }

  
}
