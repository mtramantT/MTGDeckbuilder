package com.tramPortals.MTGDeckBuilder.controllers;

import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;
import com.tramPortals.MTGDeckBuilder.dto.scryfall.ResponseWrapper;
import com.tramPortals.MTGDeckBuilder.dto.scryfall.SymbologyDTO;

@RestController
@RequestMapping("/scryfall/symbolology")
public class ScryfallSymbolController {
	
	ObjectMapper objectMapper = new ObjectMapper();

	@GetMapping("/test")
	public String testEndpoint() {
		return "Hellow Scryfall Symbol Controller";
	}
	
	@GetMapping("/symbols")
	public List<SymbologyDTO> getSymbology() throws UnirestException, JsonMappingException, JsonProcessingException {
		HttpResponse<String> response = Unirest.get("https://api.scryfall.com/symbology")
				  .asString();
		if (response.getStatus() == 200) {
			ResponseWrapper<SymbologyDTO> wrapper = objectMapper.readValue(response.getBody(), new TypeReference<ResponseWrapper<SymbologyDTO>>(){});
			return wrapper.getData();
		}
		return null;
	}
}
