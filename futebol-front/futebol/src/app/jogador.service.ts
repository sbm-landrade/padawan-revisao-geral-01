//Serviço responsável por fazer chamadas HTTP para a API backend.
//Contém métodos para realizar operações CRUD (Create, Read, Update, Delete).
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

  buscarPorId(id: number): Observable<Jogador> {
    return this.http.get<Jogador>(`${this.apiUrl}/${id}`);
  }

  salvar(jogador: Jogador): Observable<Jogador> {
    return this.http.post<Jogador>(this.apiUrl, jogador);
  }

  atualizar(id: number, jogador: Jogador): Observable<Jogador> {
    return this.http.put<Jogador>(`${this.apiUrl}/${id}`, jogador);
  }

  deletar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
