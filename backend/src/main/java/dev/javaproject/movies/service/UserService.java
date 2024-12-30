package dev.javaproject.movies.service;


import dev.javaproject.movies.model.User;
import dev.javaproject.movies.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public boolean registerUser(User user) {
        if (userRepository.findByUsername(user.getUsername()) != null) {
            return false; // Username already exists
        }
        userRepository.save(user);
        return true;
    }

    public boolean loginUser(String username, String password) {
        User user = userRepository.findByUsername(username);
        return user != null && user.getPassword().equals(password);
    }
}

