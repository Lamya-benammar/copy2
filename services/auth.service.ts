import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { tap } from 'rxjs/operators';
import { User } from '../models/user.module';


interface LoginResponse {
  success: boolean;
  message: string;
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  setToken(token: string) {
    if (token !== null) {
      this.token = token;
    }
  }
  private token: string | null = localStorage.getItem('token');

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private router : Router, private http: HttpClient) { 
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')!));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  // private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  // private apiUrl = 'http://localhost:8089/pharmacien/authenticate';


  private readonly API_URL = 'http://localhost:8089/Stage/pharmacien/authenticate';
  
  private loggedIn = new BehaviorSubject<boolean>(false);

 
  login(email: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.API_URL}`, { email, password }).pipe(
      tap(res => {
        if (res.success) {
          localStorage.setItem('token', res.token);
          this.token = res.token;
          this.loggedIn.next(true);
        }
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    this.token = null;
    this.loggedIn.next(false);
  }

  getToken(): string {
    return this.token || localStorage.getItem('token') || '';
  }

  isAuthenticated(): boolean {
    // Logic to check if the user is authenticated goes here
    // For example, you could check if the user has a valid JWT token
    const token = this.getToken();
    return !!token;
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
  
  getCurrentUser(): User {
    return this.currentUser = JSON.parse(localStorage.getItem('currentUser')!);
  }

  isLoggedIn(): boolean {
    return this.getCurrentUser() != null;
  }



  /*
  isLoggedIn = new BehaviorSubject<boolean>(false);

  // public get isLoggedIn(): Observable<boolean> {
  //   return this.loggedIn.asObservable();
  // }

  public login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { username, password }).pipe(
      tap((res) => {
        localStorage.setItem('token', res.token);
        this.loggedIn.next(true);
      })
    );
  }

  public logout(): void {
    localStorage.removeItem('token');
    this.loggedIn.next(false);
  }



  /*
  isTokenExpired(): boolean {
    return false;
  }
  isAuthenticated(): boolean {
    return localStorage.getItem('token') != null && !this.isTokenExpired();
  }

/*
  login(): void {
    localStorage.setItem('token', `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1MzMyNzM5NjksImV4cCI6MTU2NDgxMDAwNSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoiVGVzdCBHdWFyZCIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20ifQ.GA0Y9gYIjmx1jLwuRHuBgZ8m6o-NgkD84nO0ym68CWo`);

    this.router.navigate(['/dashboard']);
    
  }
  login(email: string, password: string) {
    return this.http
      .post<any>(`http://localhost:8089/pharmacien/authenticate`, {
        email,
        password
      })
      .pipe(
        map(user => {
          // login successful if there's a user in the response
          if (user) {
            // store user details and basic auth credentials in local storage
            // to keep user logged in between page refreshes
            user.authdata = window.btoa(email + ":" + password);
            localStorage.setItem("currentUser", JSON.stringify(user));
          }

          return user;
        })
      );
  }
  */
  
}
