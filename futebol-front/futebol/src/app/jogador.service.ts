import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Jogador } from '../app/jogador.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JogadorService {
  private apiUrl = 'http://localhost:8080/api/jogadores';

  constructor(private http: HttpClient) { }

  listarTodos(): Observable<Jogador[]> {
    return this.http.get<Jogador[]>(this.apiUrl);
  }
}
