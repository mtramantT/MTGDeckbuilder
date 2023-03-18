package com.tramPortals.MTGDeckBuilder.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tramPortals.MTGDeckBuilder.models.DeckList;

@Repository
public interface DeckListRepo extends JpaRepository<DeckList, Long> {

}
