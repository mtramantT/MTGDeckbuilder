package com.tramPortals.MTGDeckBuilder.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class ResponseCardDTO {
	private String name;
	private String type_line;
	private String mana_cost;
	private double cmc;
	private String power;
	private String toughness;
	private ResponseImageURIs image_uris;
}
