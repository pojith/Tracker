package com.example.mk4.admin;

import com.example.mk4.models.admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface adminRepository  extends JpaRepository <admin, String>{
    @Modifying
    @Query("SELECT a FROM admin a WHERE a.email=:email AND a.password=:password")
    public Optional<admin> findByEmailAndPassword(String email,String password);
}