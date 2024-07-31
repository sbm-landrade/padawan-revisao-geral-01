import { Jogador } from './../jogador.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
  transform(items: Jogador[], searchTerm: string): Jogador[] {
     // Se não houver items, retorna uma lista vazia
     if (!items) return [];
     // Se não houver termo de busca, retorna a lista original
     if (!searchTerm) return items;
     // Converte o termo de busca para minúsculas
     searchTerm = searchTerm.toLowerCase();
     // Filtra a lista de filmes com base no termo de busca
     return items.filter(item => {
       // Verifica se o termo de busca está contido em qualquer um dos campos do filme
       return item.nome.toLowerCase().includes(searchTerm) ||
              item.time.toLowerCase().includes(searchTerm);
     });
  }

}
