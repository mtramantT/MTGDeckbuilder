package com.tramPortals.MTGDeckBuilder.dto;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class ResponseListDTO {
	private String object;
	private int total_cards;
	private boolean has_more;
	private String next_page;
	private List<ResponseCardDTO> data;
}
