package com.tramPortals.MTGDeckBuilder.controllers;

import java.util.HashMap;
import java.util.Map;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;
import com.tramPortals.MTGDeckBuilder.dto.ResponseListDTO;
import com.tramPortals.MTGDeckBuilder.dto.scryfall.ResponseCardDTO;
import com.tramPortals.MTGDeckBuilder.dto.scryfall.ResponseWrapper;
import com.tramPortals.MTGDeckBuilder.dto.scryfall.SymbologyDTO;

@RestController
@RequestMapping("/scryfall/cards")
public class ScryfallCardController {

	private static final String BASE_URL = "https://api.scryfall.com";
	
	ObjectMapper objectMapper = new ObjectMapper();

	@GetMapping("/test")
	public String test() {
		return "Hello Scryfall Cards Controller.";
	}

	@GetMapping("/cards")
	@Scheduled(fixedDelay = 500)
	public ResponseWrapper<ResponseCardDTO> getAll(
			@RequestParam(required = false, defaultValue = "cmc") String order,
			@RequestParam(required = false) String unique,
			@RequestParam(required = false) String dir,
			@RequestParam(required = false) String format,
			@RequestParam(required = false) String pretty,
			@RequestParam(defaultValue = "1") int page,
			@RequestParam(defaultValue = "*") String q) throws UnirestException, JsonMappingException, JsonProcessingException, IllegalArgumentException {

		String endpoint = "/cards/search";
		
		Map<String, Object> nonRequiredParams = new HashMap<>();
		if(unique != null) nonRequiredParams.put("unique", unique);
		if(order != null) nonRequiredParams.put("order", order);
		if(dir != null) nonRequiredParams.put("dir", dir);
		if(dir != null) nonRequiredParams.put("format", format);
		if(dir != null) nonRequiredParams.put("pretty", pretty);

		HttpResponse<String> response = Unirest.get(BASE_URL + endpoint)
				.queryString("page", page)
				.queryString("q", q)
				.queryString(nonRequiredParams)
				.asString();
		
		if (response.getStatus() == 200) {
			return objectMapper.readValue(response.getBody(), new TypeReference<ResponseWrapper<ResponseCardDTO>>(){});
		}

		else {
			System.out.println("Error retrieving cards. " + response.getStatusText());
		}
		return null;
	}

	@GetMapping("/cards/{id}")
	@Scheduled(fixedDelay = 500)
	public ResponseCardDTO getCard(@PathVariable String id)
			throws UnirestException, JsonMappingException, JsonProcessingException, IllegalArgumentException {
		String endpoint = "/cards/";
		HttpResponse<String> response = Unirest.get(BASE_URL + endpoint + id).asString();
		if (response.getStatus() == 200) {
			return objectMapper.readValue(response.getBody(), ResponseCardDTO.class);
		}
		return null;
	}
}
