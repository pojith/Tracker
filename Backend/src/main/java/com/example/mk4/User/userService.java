package com.example.mk4.User;

import com.example.mk4.models.user;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class userService {
    userRepository userRepo;
    @Autowired
    public userService(userRepository repo){
        this.userRepo = repo;
    }

    public List<user> getUsers(){
        return userRepo.findAll();
    }

    public user verifyEmployee(user u){
        Optional<user> optional = userRepo.findEmployee(u.getEmail(),u.getPassword());
        return optional.orElse(null);
    }

    public user signup(user u){
        return userRepo.save(u);
    }

    public void deleteUser(user u){
        userRepo.delete(u);
    }



}
