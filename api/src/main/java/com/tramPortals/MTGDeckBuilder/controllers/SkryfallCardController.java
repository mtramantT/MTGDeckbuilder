package com.tramPortals.MTGDeckBuilder.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/skryfall/cards")
public class SkryfallCardController {

	
	@GetMapping("/test")
	public String test() {
		return "Hello Skryfall Cards Controller.";
	}
}
