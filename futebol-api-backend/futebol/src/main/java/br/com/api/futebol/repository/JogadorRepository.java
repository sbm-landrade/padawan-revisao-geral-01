//Interface de repositório JPA para operações CRUD.
package br.com.api.futebol.repository;

import java.util.List;
import br.com.api.futebol.model.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface JogadorRepository extends JpaRepository<Jogador, Long> {

	@Query("SELECT j FROM Jogador j WHERE LOWER(j.nome) LIKE LOWER(CONCAT('%', :nome, '%'))")
	List<Jogador> findByNomeContaining(@Param("nome") String nome);
	@Query("SELECT j FROM Jogador j WHERE LOWER(j.time) LIKE LOWER(CONCAT('%', :time, '%'))")
    List<Jogador> findByTimeContaining(@Param("time") String time);

    @Query("SELECT j FROM Jogador j WHERE LOWER(j.nome) LIKE LOWER(CONCAT('%', :nome, '%')) AND LOWER(j.time) LIKE LOWER(CONCAT('%', :time, '%'))")
    List<Jogador> findByNomeAndTimeContaining(@Param("nome") String nome, @Param("time") String time);
}
