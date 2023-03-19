package com.tramPortals.MTGDeckBuilder.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/scryfall/symbol")
public class ScryfallSymbolController {

	@GetMapping("/test")
	public String testEndpoint() {
		return "Hellow Scryfall Symbol Controller";
	}
}
