package com.example.mk4.User;
import com.example.mk4.models.Ticket;
import com.example.mk4.models.user;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface userRepository extends JpaRepository<user,Integer>{


    Optional<user> findByEmail(String email);

    @Query("SELECT u FROM user u WHERE u.email = :email AND u.password = :password")
    Optional<user> findEmployee(String email, String password);


}
