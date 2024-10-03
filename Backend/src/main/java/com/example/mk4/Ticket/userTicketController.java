package com.example.mk4.Ticket;

import java.util.List;

import com.example.mk4.models.Ticket;
import com.example.mk4.models.user;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("Ticket/")
public class userTicketController {
    private final TicketService ticketService ;
    @Autowired
    public userTicketController(TicketService ticketService){
        this.ticketService = ticketService;
    }

    //Create
    @PutMapping("addTicket")
    Ticket Add(@RequestBody Ticket t){
       return ticketService.addTicket(t);
    }


    //Read
    @PostMapping("/getTicketByDept")
    List <Ticket> getDeptTickets(@RequestBody user u){
        String dep = u.getDept();
        List<Ticket> deptics = ticketService.findTicketByDept(dep);
        return deptics;
    }
    @PostMapping("search/{info}")
    List<Ticket> search(@PathVariable String info){
        return ticketService.findByInfo(info);
    }


    //Update
    @PostMapping("/updateTicketState")
    boolean stateUpdate(@RequestBody Ticket st){

        return ticketService.updateState(st) != null;
    }
    @PostMapping("/updateStateAndAssignedTo")
    Integer stateAndAssignedtoUpdate(@RequestBody Ticket t){
        return ticketService.updateStateAndAssignedTo(t);
    }
    @PostMapping("updateAssignedTo")
    boolean assignedToUpdate(@RequestBody Ticket st){
        Integer id = st.getTicketId();
        String assignedTo = st.getAssignedTo();
        return ticketService.updateAssignedTo(id, assignedTo) != null;
    }

    @PostMapping("/updateDept")
    boolean deptUpdate(@RequestBody Ticket st){
        String dept = st.getDept();
        Integer id = st.getTicketId();
        return ticketService.updateDept(id, dept) != null;
    }

}
