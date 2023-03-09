package com.tramPortals.MTGDeckBuilder.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;

@RestController
@RequestMapping("/scryfall/cards")
public class ScryfallCardController {

	@GetMapping("/test")
	public String test() {
		return "Hello Scryfall Cards Controller.";
	}
	
	@GetMapping("/cards")
	public String getAll(
			@RequestParam(defaultValue = "1") int page, 
			@RequestParam(defaultValue = "cmc") String order, 
			@RequestParam(defaultValue = "*") String q) throws UnirestException {
		String baseUrl = "https://api.scryfall.com";
		String endpoint = "/cards/search?order=" + order + "&page=" + page +"&q=" + q;
		HttpResponse<String> response = Unirest.get(baseUrl + endpoint)
				  .asString();
		if(response.getStatus() == 200) {
			return response.getBody();
		}
		else {
			return "Error retrieving cards. " + response.getStatusText();
		}
	}
}
