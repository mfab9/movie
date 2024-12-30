package dev.javaproject.movies.repository;


import dev.javaproject.movies.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String> {
    User findByUsername(String username);
}

