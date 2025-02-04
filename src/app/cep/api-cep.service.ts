import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCepService {
  private baseUrl: string = 'https://viacep.com.br/ws';

  constructor(private http: HttpClient) { }

  getEndereco(cep: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${cep}/json/`);
  }
}
