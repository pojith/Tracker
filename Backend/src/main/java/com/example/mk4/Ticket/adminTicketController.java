package com.example.mk4.Ticket;

import com.example.mk4.models.Ticket;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("admin/Ticket/")
public class adminTicketController{
    private final TicketService ticketService ;
    public static final Logger log = LoggerFactory.getLogger(userTicketController.class);
    @Autowired
    public adminTicketController(TicketService ticketService){
        this.ticketService = ticketService;
    }

    //Read
    @GetMapping("all")
    List<Ticket> findAll(){
        return ticketService.getTickets();
    }

    //Delete
    @DeleteMapping("delete")
    void delete(Ticket t){
        ticketService.deleteTicket(t);
    }






}
