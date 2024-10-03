package com.example.mk4.admin;

import com.example.mk4.models.admin;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class adminService {

    public adminRepository adminrepository;

    public adminService(adminRepository adminrepository) {
        this.adminrepository = adminrepository;
    }

    public admin findAdmin(admin a){
        String email = a.getEmail();
        String password = a.getPassword();
        Optional<admin> optional = adminrepository.findByEmailAndPassword(email,password);
        return optional.orElse(null);
    }



}
