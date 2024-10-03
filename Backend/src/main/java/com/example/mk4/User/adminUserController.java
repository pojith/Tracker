package com.example.mk4.User;

import com.example.mk4.models.user;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/admin/")
public class adminUserController {
    userService userService;

    public adminUserController(userService service) {
        this.userService = service;
    }

    @GetMapping("allUsers")
    public List<user> allUsers(){
        return userService.getUsers();
    }

    @DeleteMapping("deleteUser")
    public void deleteUser(user u){
        userService.deleteUser(u);
    }


}
