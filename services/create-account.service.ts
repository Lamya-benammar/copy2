import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CreateAccountModule } from '../models/create-account.module';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class CreateAccountService {

  private baseUrl = 'http://localhost:8089/Stage/pharmacien/register-pharmacien';

  constructor(private http: HttpClient, private router: Router) { }
 
  createPharmacien(pharmacien: CreateAccountModule): Observable<Object>{
    return this.http.post(`${this.baseUrl}`, pharmacien);
  }
 
  
}
