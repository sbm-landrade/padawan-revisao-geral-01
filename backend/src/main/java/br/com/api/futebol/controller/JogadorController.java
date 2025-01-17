// Controlador REST que define os endpoints da API.

package br.com.api.futebol.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import br.com.api.futebol.model.Jogador;
import br.com.api.futebol.repository.JogadorRepository;

@RestController
@RequestMapping("/api/jogadores")
public class JogadorController {

	@Autowired
	private JogadorRepository jogadorRepository;

	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping
	public List<Jogador> listarJogadores(@RequestParam(required = false) String nome,
			@RequestParam(required = false) String time) {
		if (nome != null && time != null) {
            return jogadorRepository.findByNomeAndTimeContaining(nome, time);
        } else if (nome != null) {
            return jogadorRepository.findByNomeContaining(nome);
        } else if (time != null) {
            return jogadorRepository.findByTimeContaining(time);
        } else {
            return jogadorRepository.findAll();
        }
	}

	@PostMapping
	public Jogador adicionarJogador(@RequestBody Jogador jogador) {
		return jogadorRepository.save(jogador);
	}

	@GetMapping("/{id}")
	public Jogador obterJogador(@PathVariable Long id) {
		return jogadorRepository.findById(id)
				.orElseThrow(() -> new RuntimeException("Jogador não encontrado"));
	}

	@PutMapping("/{id}")
	public Jogador atualizarJogador(@PathVariable Long id, @RequestBody Jogador jogador) {
		Jogador jogadorExistente = jogadorRepository.findById(id)
				.orElseThrow(() -> new RuntimeException("Jogador não encontrado"));
		jogadorExistente.setNome(jogador.getNome());
		jogadorExistente.setTime(jogador.getTime());
		return jogadorRepository.save(jogadorExistente);
	}

	@DeleteMapping("/{id}")
	public void excluirJogador(@PathVariable Long id) {
		jogadorRepository.deleteById(id);
	}
}