package com.example.mk4.admin;

import com.example.mk4.models.admin;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/admin")
public class adminController {
    private adminService adminservice;

    public adminController(adminService adminservice){
        this.adminservice = adminservice;
    }

    @PostMapping("/login/verify")
    public admin verify(@RequestBody admin a){
        return adminservice.findAdmin(a);
    }




}
