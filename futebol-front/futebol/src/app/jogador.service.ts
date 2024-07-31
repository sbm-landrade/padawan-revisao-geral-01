import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JogadorService {
  private apiUrl = '<http://localhost:8080/api/filmes>';

  constructor(private http: HttpClient) { }

  listarTodos(): Observable<Jogador[]> {
    return this.http.get<Jogador[]>(this.apiUrl);
  }
}
