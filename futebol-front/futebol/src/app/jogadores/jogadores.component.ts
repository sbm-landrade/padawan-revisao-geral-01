import { Component, OnInit } from '@angular/core';
import { JogadorService } from '../jogador.service';
import { Jogador } from '../jogador.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-jogadores',
  templateUrl: './jogadores.component.html',
  styleUrls: ['./jogadores.component.css']
})
export class JogadoresComponent implements OnInit {

  jogadores: any[] = [];
  searchTerm: string = '';
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.buscarJogadores();
  }

  buscarJogadores() {
    const url = 'http://localhost:8080/api/jogadores';
    let params: { [key: string]: string } = {};
    if (this.searchTerm) {
      params['nome'] = this.searchTerm;
    }

    this.http.get<any[]>(url, { params }).subscribe(data => {
      this.jogadores = data;
    });
  }

  createJogador() {
    const nome = prompt("Digite o nome do jogador:");
    const time = prompt("Digite o time do jogador:");

    if (nome && time) {
      const url = 'http://localhost:8080/api/jogadores';
      const novoJogador = { nome, time };
      this.http.post(url, novoJogador).subscribe(() => {
        this.buscarJogadores(); // Recarrega a lista após adicionar
      });
    }
  }

  atualizar(id: number) {
    const nome = prompt("Digite o novo nome do jogador:");
    const time = prompt("Digite o novo time do jogador:");

    if (nome && time) {
      const url = `http://localhost:8080/api/jogadores/${id}`;
      const jogadorAtualizado = { nome, time };
      this.http.put(url, jogadorAtualizado).subscribe(() => {
        this.buscarJogadores(); // Recarrega a lista após atualizar
      });
    }
  }

  deleteJogador(id: number) {
    const url = `http://localhost:8080/api/jogadores/${id}`;
    this.http.delete(url).subscribe(() => {
      this.buscarJogadores(); // Recarrega a lista após deletar
    });
  }
}
