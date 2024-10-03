import React, { useEffect } from "react";
import { useState } from "react";
import Footer from '../components/footer';
import Header from '../components/header';
import '../css/ticketComponent.css';
import $ from 'jquery';

const TicketInfo = ({ticket}) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user===null){
      window.location.replace('/')
    }
    
    const getObjectFromLocalStorage = (key) => {
        const storedItem = localStorage.getItem(key);
        return storedItem ? JSON.parse(storedItem) : null;
      };

      const newticket = getObjectFromLocalStorage('ticket')
      console.log(newticket)
    return (
        <>
          <Header />
          <TicketInfoComponent ticket={newticket} user={user}/>
          <Footer />
        </>
    );

    
}

const ShowAssignedPerson = (assignedTo) => {
    $('.assignedperson').empty();

        const newElement = $('<div>\
            <p>\
                '+assignedTo+ ' have been managing the ticket</p> </div>');

        $('.assignedperson').append(newElement);
}
    

const TicketInfoComponent = ({ ticket , user}) => {
  const [ticketState, setTicketState] = useState(ticket.state);

    const UpdateState = async () => {

      if (ticket.state === '1'){

        try {
          const data = ticket;
          data.state = '2';
          data.assignedTo = user.name;
          
          ticket.state = '2';
          ticket['assignedTo'] = user.name;
          console.log(ticket);
          const response = await fetch('http://127.0.0.1:8080/Ticket/updateStateAndAssignedTo', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(ticket)
          });
        if (!response){
            console.log("render failed");
        }
        }

          catch(error){
            console.log(error)
          }
          setTicketState('2')
        }
        else if(ticket.state === '2'){
          if (user.name === ticket.assignedTo){
            console.log(user.name+ticket.state)
            try {
              ticket.state = '4';
          
              const data = ticket;
            data.state = '4';
            
            
            ticket.state = '4';
            console.log(data);
              const response = await fetch('http://127.0.0.1:8080/Ticket/updateTicketState', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
              });
            if (!response){
                console.log("render failed");
            }
            }
    
              catch(error){
                console.log(error)
              }
              setTicketState('4')
              
            }
          }
        }
      
      
    
    const handleStateChange = () => {
        const state = ticketState;
        if (state === '1'){
            UpdateState();
        }
        else if (state === '2'){
            UpdateState();
            ShowAssignedPerson(ticket.assignedTo);
        }
    }

    const renderState = (state) => {
        
    if (state === '1')
      return <Opened/>
    else if (state === '4')
      return <Closed/>
    else if (state === '2')
      return <WorkInProgress/>
    else 
      return <Pending/>
    }

    

        return (
          <article className="ticket-box">
            <header className="ticket-box-header">
              <h1>Ticket Information</h1>
            </header>
            <section className="ticket-box-content">
            <div className="ticket-info-item">
                <strong>Ticket Id:</strong> <span>{ticket.ticketId}</span>
              </div>
              <div className="ticket-info-item">
                <strong>Priority:</strong> <span>{ticket.priority}</span>
              </div>
              <div className="ticket-info-item">
                <strong>Ticket Info:</strong> <span>{ticket.ticketInfo}</span>
              </div>
              <div className="ticket-info-item">
                <strong>Department: </strong> <span>{ticket.dept}</span>
              </div>
              
              <div className="ticket-info-item">
                <strong>Category:</strong> <span>{ticket.category}</span>
              </div>
              <div className="ticket-info-item">
                <strong>Closed Time:</strong> <span>{ticket.closedTime}</span>
              </div>
              <div className="ticket-info-item">
                <strong>Configuration Item:</strong> <span>{ticket.configurationItem}</span>
              </div>
              <div className="ticket-info-item">
                <strong>Location:</strong> <span>{ticket.location}</span>
              </div>
              <div className="ticket-info-item">
                <strong>Opened By:</strong> <span>{ticket.openedBy}</span>
              </div>
              
              
              
            </section>
            <div className="stateblock" onClick={handleStateChange}>
                {renderState(ticketState)}
            </div>
            <div className="assignedperson" >
                
            </div>
          </article>
        );
};


const Opened = () => {
    return (
      <>
      <h3 className="openedstate">Opened</h3>
      </>
    );
  }
  
  const Closed = () => {
    return (
      <>
      <h3 className="closedstate">Closed</h3>
      </>
    );
  }
  
  const WorkInProgress = () => {
    return (
      <>
        <h3 className="workinprogressstate">Work In Progress</h3>
      </>
    )
  }
 
  const Pending = () => {
    return (
      <>
        <h3 className="pendingstate">Pending</h3>
      </>
    )
  }
  

export default TicketInfo;

