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
	String name;
	String type_line;
	String mana_cost;
	double cmc;
	String power;
	String toughness;
}
