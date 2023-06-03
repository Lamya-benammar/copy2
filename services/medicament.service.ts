import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { medicament } from '../models/medicament.module';
import { Observable } from 'rxjs';



@Injectable({
    providedIn: 'root',
  })
export class medicamentService{

    private addUrl = 'http://localhost:8089/Stage/medicament/add';

    constructor(private http: HttpClient){
    }
    
    addSugRec(medicament: medicament): Observable<medicament>{
        return this.http.post<medicament>(this.addUrl, medicament);
    }


    getData(): Observable<any[]> {
        const url = "http://localhost:8089/Stage/medicament/liste";
        return this.http.get<any[]>(url);
    }
    
    
}