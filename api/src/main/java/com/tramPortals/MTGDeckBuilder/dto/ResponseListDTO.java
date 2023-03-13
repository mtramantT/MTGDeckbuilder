package com.tramPortals.MTGDeckBuilder.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class ResponseListDTO {
	String object;
	int total_cards;
	boolean has_more;
	String next_page;
	
	public ResponseListDTO() {
		
	}

	public ResponseListDTO(String object, int total_cards, boolean has_more, String next_page) {
		this.object = object;
		this.total_cards = total_cards;
		this.has_more = has_more;
		this.next_page = next_page;
	}

	public String getObject() {
		return object;
	}

	public void setObject(String object) {
		this.object = object;
	}

	public int getTotal_cards() {
		return total_cards;
	}

	public void setTotal_cards(int total_cards) {
		this.total_cards = total_cards;
	}

	public boolean isHas_more() {
		return has_more;
	}

	public void setHas_more(boolean has_more) {
		this.has_more = has_more;
	}

	public String getNext_page() {
		return next_page;
	}

	public void setNext_page(String next_page) {
		this.next_page = next_page;
	}

	@Override
	public String toString() {
		return "ResponseList [object=" + object + ", total_cards=" + total_cards + ", has_more=" + has_more
				+ ", next_page=" + next_page + "]";
	}
	
}
