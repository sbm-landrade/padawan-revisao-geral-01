//Interface de repositório JPA para operações CRUD.
package br.com.api.futebol.repository;

import br.com.api.futebol.model.*;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JogadorRepository extends JpaRepository<Jogador, Long> {
}