package br.com.api.futebol;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
public class FutebolApplication {

	public static void main(String[] args) {
		SpringApplication.run(FutebolApplication.class, args);
	}
	
	@RestController
	class HelloWorldController {

	    @GetMapping("/hello")
	    public String sayHello() {
	        return "Hello World";
	    }
	}

}
