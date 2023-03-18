package com.tramPortals.MTGDeckBuilder.models;

import java.util.List;

import com.tramPortals.MTGDeckBuilder.util.converters.CardNameConverter;

import jakarta.persistence.Column;
import jakarta.persistence.Convert;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "decklist")
public class DeckList {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "decklist_id")
  private Long id;

  @ManyToOne
  @JoinColumn(name = "user_id")
  private User user;

  @Column(name = "name")
  private String name;

  @Transient
  @Convert(converter = CardNameConverter.class)
  private List<String> cardIds;

}
