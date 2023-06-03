import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { adherent } from '../models/adherent.module';
import { adherenthistorique } from '../models/adherenthistorique.module';

@Injectable({
    providedIn: 'root',
  })
export class contractantService{

    private apiUrl = 'http://localhost:8089/Stage/adherent';

    constructor(private http: HttpClient){
    }

    getContractants(): Observable<any[]> {
        const url = "http://localhost:8089/Stage/contractants/liste";
        return this.http.get<any[]>(url);
    }
    
    getAdherent(id: number): Observable<adherent> {
        const url = `${this.apiUrl}/adherents/${id}`;
        return this.http.get<adherent>(url);
    }

    getAdherentHistory(): Observable<adherenthistorique[]> {
        const url = "http://localhost:8089/Stage/adherent/historique";
        return this.http.get<adherenthistorique[]>(url);
    }

    

    /*
    getAdherentsByContractant(contractant: string): Observable<adherent[]> {
        const url = `${this.apiUrl}/adherents?contractant=${contractant}`;
        return this.http.get<adherent[]>(url);
      }

      getAdherentsByContractant1(contractantName: string): Observable<adherent[]> {
        const url = `${this.apiUrl}/adherents?contractant=${contractantName}`;
        return this.http.get<adherent[]>(url);
      }
      */
    // getAdherentsByContractant2(contractantName: string): Observable<adherent[]> {
    //     const url = `${this.apiUrl}/adherents`;
    //     const params = new HttpParams().set('contractantName', contractantName);
        
    //     return this.http.get<adherent[]>(url, { params });
    // } 

}
