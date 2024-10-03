package com.example.mk4.Ticket;

import com.example.mk4.models.Ticket;
import jakarta.transaction.Transactional;
import jakarta.transaction.UserTransaction;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Objects;

public interface TicketRepository extends JpaRepository<Ticket,Integer>{
    List<Ticket> getTicketByDept(String dept);

    @Modifying
    @Query("SELECT t FROM Ticket t WHERE t.ticketInfo LIKE %:info%")
    List<Ticket> searchByTicketInfo(String info);

    @Modifying
    @Transactional
    @Query("UPDATE Ticket t SET t.state = :state WHERE t.id = :id")
    Integer updateTicketByState(Integer id,String state);

    @Modifying
    @Transactional
    @Query("UPDATE Ticket t SET t.state = :state,t.assignedTo = :assignedTo WHERE t.id = :id")
    Integer updateTicketByStateAndAssignedTo(Integer id,String state,String assignedTo);

    @Transactional
    @Modifying
    @Query("UPDATE Ticket t SET t.assignedTo = :assignedTo WHERE t.id = :id")
    Integer updateTicketByAssignedTo(Integer id,String assignedTo);

    @Transactional
    @Modifying
    @Query("UPDATE Ticket t SET t.closedTime = :closedTime WHERE t.id = :id")
    Integer updateTicketByClosedTime(Integer id,Date closedTime);



    @Transactional
    @Modifying
    @Query("UPDATE Ticket t SET t.dept = :dept WHERE t.id = :id")
    Integer updateTicketByDept(Integer id,String dept);


    @Query("SELECT t FROM Ticket t WHERE t.dept LIKE %:dept%")
    List<Ticket> findTicketByDept(String dept);

}

