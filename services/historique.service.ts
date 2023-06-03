import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { sugrec } from '../models/sugrec.module';
import { Observable } from 'rxjs';



@Injectable({
    providedIn: 'root',
  })
export class historiqueService{

    private addUrl = 'http://localhost:8089/Stage/historique/add';

    constructor(private http: HttpClient){
    }
    
    addSugRec(sugrec: sugrec): Observable<sugrec>{
        return this.http.post<sugrec>(this.addUrl, sugrec);
    }


    getData(): Observable<any[]> {
        const url = "http://localhost:8089/Stage/historique/liste";
        return this.http.get<any[]>(url);
    }
    
    
}