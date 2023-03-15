package com.tramPortals.MTGDeckBuilder.models;

import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "users")
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "user_id")
	private Integer id;
	
	@Column(name = "password")
	private Integer password;
	
	@Column(name = "email")
	private Integer email;
	
	@OneToMany(mappedBy = "user")
    private Set<DeckList> decklists = new HashSet<>();
}
