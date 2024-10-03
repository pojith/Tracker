package com.example.mk4;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
@RestController
public class Mk4Application {

    public static void main(String[] args) {

        SpringApplication.run(Mk4Application.class, args);
    }
//    @Bean
//    public TicketController.AuthInterceptor TicketauthInterceptor() {
//        return new TicketController.AuthInterceptor();
//    }
//
//    @Bean
//    public userController.AuthInterceptor UserauthInterceptor(){
//        return new userController.AuthInterceptor();
//    }
//
//    @Override
//    public void addInterceptors(InterceptorRegistry registry) {
//        registry.addInterceptor(TicketauthInterceptor())
//                .addPathPatterns("/Ticket/**");
//        registry.addInterceptor(UserauthInterceptor())
//                .addPathPatterns("user/**")
//                .excludePathPatterns("/login","/signup","/logout");
//    }
}