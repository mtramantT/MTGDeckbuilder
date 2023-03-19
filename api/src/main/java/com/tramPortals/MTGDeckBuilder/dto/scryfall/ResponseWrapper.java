package com.tramPortals.MTGDeckBuilder.dto.scryfall;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class ResponseWrapper<T> {
	String object;
	boolean has_more;
	private int total_cards;
	private String next_page;
	List<T> data;
}
