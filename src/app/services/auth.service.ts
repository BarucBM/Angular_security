import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../models/login';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = "http://localhost:8080/"
  
  constructor(private httpClient: HttpClient) { }

  login(login:Login):Observable<Login> {
    return this.httpClient.post<Login>(this.url+"auth/login",login)
  }

  logout(){
     this.httpClient.post(this.url+"logout", {})
     localStorage.setItem("token", "")
  }

}
