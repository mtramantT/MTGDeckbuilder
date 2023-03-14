package com.tramPortals.MTGDeckBuilder.controllers;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;
import com.tramPortals.MTGDeckBuilder.dto.ResponseCardDTO;
import com.tramPortals.MTGDeckBuilder.dto.ResponseListDTO;

@RestController
@RequestMapping("/scryfall/cards")
public class ScryfallCardController {

	private static final String BASE_URL = "https://api.scryfall.com";
	private static final int MAX_OFFSET = 150;
	private static final int MAX_CARD_PER_CALL = 175;
	
	ObjectMapper objectMapper = new ObjectMapper();

	@GetMapping("/test")
	public String test() {
		return "Hello Scryfall Cards Controller.";
	}

	@GetMapping("/cards")
	@Scheduled(fixedDelay = 500)
	public ResponseListDTO getAll(
			@RequestParam(defaultValue = "1") int page,
			@RequestParam(required = false) String unique,
			@RequestParam(required = false, defaultValue = "cmc") String order,
			@RequestParam(required = false) String dir,
			@RequestParam(required = false) String format,
			@RequestParam(required = false) String pretty,
			@RequestParam(defaultValue = "*") String q,
			@RequestParam(defaultValue = "0") int offset, 
			@RequestParam(defaultValue = "25") int limit) throws UnirestException, JsonMappingException, JsonProcessingException, IllegalArgumentException {

		String endpoint = "/cards/search";
		int pageOffset = (page - 1) * limit;
		offset = offset > MAX_OFFSET ? MAX_OFFSET : offset;
		int apiPage = (offset + pageOffset) / MAX_CARD_PER_CALL + 1;
		
		Map<String, Object> nonRequiredParams = new HashMap<>();
		if(unique != null) nonRequiredParams.put("unique", unique);
		if(order != null) nonRequiredParams.put("order", order);
		if(dir != null) nonRequiredParams.put("dir", dir);
		if(dir != null) nonRequiredParams.put("dir", format);
		if(dir != null) nonRequiredParams.put("dir", pretty);

		HttpResponse<String> response = Unirest.get(BASE_URL + endpoint)
				.queryString("page", apiPage)
				.queryString("q", q)
				.queryString(nonRequiredParams)
				.asString();
		
		if (response.getStatus() == 200) {
			List<ResponseCardDTO> cards = new ArrayList<>();
			JsonNode root = objectMapper.readTree(response.getBody());
		    JsonNode data = root.get("data");
		    
		    for (int i = offset % MAX_CARD_PER_CALL; i < data.size() && cards.size() < limit; i++) {
		        JsonNode cardNode = data.get(i);
		        ResponseCardDTO card = objectMapper.treeToValue(cardNode, ResponseCardDTO.class);
		        cards.add(card);
		    }
		    
		    ResponseListDTO responseListDTO = objectMapper.treeToValue(root, ResponseListDTO.class);
		    responseListDTO.setData(cards);
			return objectMapper.readValue(response.getBody().toString(), ResponseListDTO.class);
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
