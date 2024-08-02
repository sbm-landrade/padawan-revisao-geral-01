import { Component, OnInit } from '@angular/core';
import { Jogador } from '../jogador.model';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-jogadores',
  templateUrl: './jogadores.component.html',
  styleUrls: ['./jogadores.component.css']
})
export class JogadoresComponent implements OnInit {
  jogadores: Jogador[] = [];
  searchTerm: string = '';
  selectedJogador: Jogador = { id: 0, nome: '', time: '' }; // Inicializado
  showModal: boolean = false;

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

    this.http.get<Jogador[]>(url, { params }).subscribe(data => {
      this.jogadores = data;
    });
  }

  openCreateModal() {
    this.selectedJogador = { id: 0, nome: '', time: '' }; // Novo jogador
    this.showModal = true;
  }

  openEditModal(jogador: Jogador) {
    this.selectedJogador = { ...jogador }; // Cria uma cópia do jogador selecionado
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.selectedJogador = { id: 0, nome: '', time: '' }; // Limpa o jogador selecionado
  }

  saveJogador() {
    if (this.selectedJogador) {
      if (this.selectedJogador.id === 0) {
        // Criar novo jogador
        const url = 'http://localhost:8080/api/jogadores';
        this.http.post(url, this.selectedJogador).subscribe(() => {
          this.buscarJogadores(); // Recarrega a lista após adicionar
          this.closeModal();
        });
      } else {
        // Atualizar jogador existente
        const url = `http://localhost:8080/api/jogadores/${this.selectedJogador.id}`;
        this.http.put(url, this.selectedJogador).subscribe(() => {
          this.buscarJogadores(); // Recarrega a lista após atualizar
          this.closeModal();
        });
      }
    }
  }

  deleteJogador(id: number) {
    const url = `http://localhost:8080/api/jogadores/${id}`;
    this.http.delete(url).subscribe(() => {
      this.buscarJogadores(); // Recarrega a lista após deletar
    });
  }
}
