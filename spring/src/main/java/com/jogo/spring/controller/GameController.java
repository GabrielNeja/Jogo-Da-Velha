package com.jogo.spring.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/jogo")
@CrossOrigin("*")                        
public class GameController {

    @GetMapping                     // Mapeia solicitações HTTP GET para o método home()
    public String home() {
        return null;
    }
}
