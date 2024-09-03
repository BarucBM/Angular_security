import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../models/login';
import { consultation } from '../models/consultation';

@Injectable({
  providedIn: 'root'
})
export class ConsultationService {

  url = "http://localhost:8080/"
  
  constructor(private httpClient: HttpClient) { }

  getConsultation():Observable<[consultation]> {
    return this.httpClient.get<[consultation]>(this.url+"consultations")
  }


}
