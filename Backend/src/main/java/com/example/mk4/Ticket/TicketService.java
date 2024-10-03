package com.example.mk4.Ticket;

import com.example.mk4.models.Ticket;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class TicketService {

    TicketRepository ticketRepository;

    @Autowired
    public TicketService(TicketRepository ticketRepository) {
        this.ticketRepository = ticketRepository;
    }

    public Ticket addTicket(Ticket ticket) {
        return ticketRepository.save(ticket);
    }
    public List<Ticket> getTickets() {return ticketRepository.findAll();}


    public Integer updateStateAndAssignedTo(Ticket st){
        return ticketRepository.updateTicketByStateAndAssignedTo(st.getTicketId(),st.getState(),st.getAssignedTo());
    }

    public void deleteTicket(Ticket t){
        ticketRepository.delete(t);
    }

    public Integer updateState(Ticket st){
        Optional<Ticket> optional = ticketRepository.findById(st.getTicketId());
        if(optional.isPresent())
        {
            return ticketRepository.updateTicketByState(st.getTicketId(),st.getState());
        }
        return null;
    }
    public Integer updateAssignedTo(Integer id,String assignedTo){
        Optional<Ticket> optional = ticketRepository.findById(id);
        if(optional.isPresent())
        {
            return ticketRepository.updateTicketByAssignedTo(id,assignedTo);
        }
        return null;
    }
    public Integer updateClosedTime(Integer id, Date closedTime){
        Optional<Ticket> optional = ticketRepository.findById(id);
        if(optional.isPresent())
        {
            return ticketRepository.updateTicketByClosedTime(id,closedTime);
        }
        return null;
    }
    public Integer updateDept(Integer id,String dept){
        Optional<Ticket> optional = ticketRepository.findById(id);
        if(optional.isPresent())
        {
            return ticketRepository.updateTicketByDept(id,dept);
        }
        return null;
    }

    public List<Ticket> findTicketByDept(String dept){
        List<Ticket> optional = ticketRepository.findTicketByDept(dept);
        return optional;
    }

    public List<Ticket> findByInfo(String info){
        return ticketRepository.searchByTicketInfo(info);
    }
}

