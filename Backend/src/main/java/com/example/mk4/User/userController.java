package com.example.mk4.User;

import com.example.mk4.models.user;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.HandlerInterceptor;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.List;



@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/user")
public class userController {
    userService userService;

    public userController(userService service) {
        this.userService = service;
    }

    @PutMapping("/signup")
    public user signup(@RequestBody user u) {
        return userService.signup(u);
    }

    @PostMapping("/verifyEmployee")
    public user verifyEmployee(@RequestBody user u) {
        user x = userService.verifyEmployee(u);
        return x;
    }
}



