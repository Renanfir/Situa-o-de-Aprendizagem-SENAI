package com.example.loginauthapi.controllers;



import com.example.loginauthapi.domain.user.Endereco;
import com.example.loginauthapi.domain.user.Usuario;
import com.example.loginauthapi.dto.EnderecoRequestDTO;
import com.example.loginauthapi.dto.RegisterRequestDTO;
import com.example.loginauthapi.dto.ResponseDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.loginauthapi.repositories.EnderecoRepository;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/endereco")
@RequiredArgsConstructor
public class EnderecoController {

    private final EnderecoRepository enderecoRepository;




    @PostMapping("/create")
    public ResponseEntity<ResponseDTO> register(@RequestBody EnderecoRequestDTO body) {
        // Verificar se o repositório está vazio usando findAll().isEmpty()
        if (this.enderecoRepository.findAll().isEmpty()) {
            Endereco newEndereco = new Endereco(
                    body.logradouro(), body.bairro(), body.numero(),
                    body.cidade(), body.estado(), body.complemento(), body.cep()
            );
            this.enderecoRepository.save(newEndereco);
            return ResponseEntity.ok().build(); // Retornar uma resposta de sucesso
        }
        return ResponseEntity.badRequest().build(); // Retornar uma resposta de erro
    }
}
