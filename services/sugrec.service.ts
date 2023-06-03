import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { sugrec } from '../models/sugrec.module';
import { Observable } from 'rxjs';



@Injectable({
    providedIn: 'root',
  })
export class sugrecService{

    private addUrl = 'http://localhost:8089/Stage/SugRec/add';
    private listUrl = 'http://localhost:8089/Stage/SugRec/liste';
    private deleteUrl = 'http://localhost:8089/Stage/SugRec/delete';

    constructor(private http: HttpClient){
    }
    
    addSugRec(sugrec: sugrec): Observable<sugrec>{
        return this.http.post<sugrec>(this.addUrl, sugrec);
    }
    submitForm(formData: FormData): Observable<any> {
      const url = 'http://localhost:8089/Stage/SugRec/add';
      return this.http.post(url, formData);
    }
    getSugRecData(): Observable<any[]> {
      const url = 'http://localhost:8089/Stage/SugRec/liste';
      return this.http.get<any[]>(url);
    }
    
}