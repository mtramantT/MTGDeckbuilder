package com.tramPortals.MTGDeckBuilder.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ResponseWrapper<T> {
	String object;
	boolean has_more;
	List<T> data;
}
