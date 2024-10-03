package com.example.mk4.models;

import jakarta.persistence.*;

import java.io.Serializable;

@Entity
@Table(name = "user")
public class user {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String type;
    private String name;
    private String email;
    private String branch;
    private String role;
    private String dept;
    private String password;

    public user() {
    }

    public user(String name, String email, String branch, String role, String dept, String password) {
        this.name = name;
        this.email = email;
        this.branch = branch;
        this.role = role;
        this.dept = dept;
        this.password = password;
    }

    public user(String email,String password){
        this.email = email;
        this.password = password;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getBranch() {
        return branch;
    }

    public void setBranch(String branch) {
        this.branch = branch;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getDept() {
        return dept;
    }

    public void setDept(String dept) {
        this.dept = dept;
    }

    public void setType(String type){ this.type = type; }
    public String getType(){ return this.type; }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", type='" + type + '\'' +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", branch='" + branch + '\'' +
                ", role='" + role + '\'' +
                ", dept='" + dept + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
