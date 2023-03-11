package com.tramPortals.MTGDeckBuilder.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;
import com.tramPortals.MTGDeckBuilder.dto.ResponseList;

@RestController
@RequestMapping("/scryfall/cards")
public class ScryfallCardController {
	
	ObjectMapper objectMapper = new ObjectMapper();
	
	@GetMapping("/test")
	public String test() {
		return "Hello Scryfall Cards Controller.";
	}
	
	@GetMapping("/cards")
	public ResponseList getAll(
			@RequestParam(defaultValue = "1") int page, 
			@RequestParam(defaultValue = "cmc") String order, 
			@RequestParam(defaultValue = "*") String q) throws UnirestException, JsonMappingException, JsonProcessingException, IllegalArgumentException {
		String baseUrl = "https://api.scryfall.com";
		String endpoint = "/cards/search?order=" + order + "&page=" + page +"&q=" + q;
		HttpResponse<String> response = Unirest.get(baseUrl + endpoint)
				  .asString();
		if(response.getStatus() == 200) {
			return objectMapper.treeToValue(
							objectMapper.readTree(response.getBody()), 
							ResponseList.class);
		}
		else {
			System.out.println("Error retrieving cards. " + response.getStatusText());
		}
		return null;
	}
}
