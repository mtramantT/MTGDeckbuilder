package com.tramPortals.MTGDeckBuilder.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tramPortals.MTGDeckBuilder.models.User;

@Repository
public interface UserRepo extends JpaRepository<User, Long> {

}
