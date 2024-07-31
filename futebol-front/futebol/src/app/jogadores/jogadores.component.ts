import { Component, OnInit } from '@angular/core';
import { JogadorService } from '../jogador.service';
import { Jogador } from '../jogador.model';
@Component({
  selector: 'app-jogadores',
  templateUrl: './jogadores.component.html',
  styleUrls: ['./jogadores.component.css']
})
export class JogadoresComponent implements OnInit {

  jogadores: Jogador[] = [];
  searchTerm: string = '';

  constructor(private jogadorService: JogadorService) { }

  ngOnInit(): void {
    this.listarTodos();
  }

  listarTodos(): void {
    this.jogadorService.listarTodos().subscribe(jogadores => this.jogadores = jogadores);
  }

}
