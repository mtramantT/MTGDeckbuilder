package com.tramPortals.MTGDeckBuilder.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class ResponseListDTO {
	String object;
	int total_cards;
	boolean has_more;
	String next_page;
	ResponseCardDTO[] data;
}
