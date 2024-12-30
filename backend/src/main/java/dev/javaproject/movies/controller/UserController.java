package dev.javaproject.movies.controller;


import dev.javaproject.movies.model.User;
import dev.javaproject.movies.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public String registerUser(@RequestBody User user) {
        if (userService.registerUser(user)) {
            return "Registration successful";
        } else {
            return "Username already exists";
        }
    }

    @PostMapping("/login")
    public String loginUser(@RequestParam String username, @RequestParam String password) {
        if (userService.loginUser(username, password)) {
            return "Login successful";
        } else {
            return "Invalid username or password";
        }
    }
}

