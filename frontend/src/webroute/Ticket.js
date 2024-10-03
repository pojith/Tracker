import React, { useState } from "react";
import $ from 'jquery';
// import '../css/Ticket.css';
import Footer from '../components/footer';
import Header from '../components/header';
import {Redirect} from 'react';
import { useNavigate } from "react-router-dom";

function Ticket() {

  const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user)
    if (user===null){
      window.location.replace('/')
    }
    else
    {
        return(
          <>
            <Header />
            <FormComponent />
            <Footer />
          </>
        );
    }
}

const FormComponent = () => {
  const navigate = useNavigate();
  const date = new Date();
  const time = date.getTime();


  const handleSubmit =  async (e) => {
    const request = {
      location:Location,
      category:Category,
      ticketInfo:TicketInfo,
      configurationItem:ConfigurationItem,
      priority:Priority,
      opened:time,
      openedBy:OpenedBy,
      state:State,
      dept:dept,
      

    }
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8080/Ticket/addTicket', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(request)
      });
      if (!response){
        const element = $("<div>Failed to add new ticket</div>");
        $("body").append(element);
        return;
      }
        $(".res").empty();
      const element = $("<div>new ticket added successfully</div>");
        $(".res").append(element);
    }
      catch(error){
        console.log(error)
      }
      console.log(request);
      navigate("/TicketQueue")
    }

  const [Location, setLocation] = useState('');
  const [Category, setCategory] = useState('');
  const [TicketInfo, setTicketInfo] = useState('');
  const [ConfigurationItem, setConfigurationItem] = useState('');
  const [Priority, setPriority] = useState('');
  const [Opened, setOpened] = useState('');
  const [OpenedBy, setOpenedBy] = useState('');
  const [State, setState] = useState('');
  const [dept, setDept] = useState('');


  return (
    <div>
            <h2>Forward Ticket</h2>
            <div className="ticket">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="Location">Location:</label><br />
                    <input
                        type="text"
                        id="Location"
                        name="Location"
                        value={Location}
                        onChange={(e) =>{
                          setLocation(e.target.value);}}
                    /><br />
                </div>
                <div>
                    <label htmlFor="Category">Category:</label><br />
                    <input
                        type="text"
                        id="Category"
                        name="Category"
                        value={Category}
                        onChange={(e) => setCategory(e.target.value)}
                    /><br />
                </div>
                <div>
                    <label htmlFor="TicketInfo">Ticket Info:</label><br />
                    <input
                        type="text"
                        id="TicketInfo"
                        name="TicketInfo"
                        value={TicketInfo}
                        onChange={(e) => setTicketInfo(e.target.value)}
                    /><br />
                </div>
                <div>
                <label htmlFor="ConfigurationItem">ConfigurationItem:</label><br />
                    <input
                        type="text"
                        id="ConfigurationItem"
                        name="ConfigurationItem"
                        value={ConfigurationItem}
                        onChange={(e) => setConfigurationItem(e.target.value)}
                    /><br />
                </div>
                <div>
                <label htmlFor="Priority">Priority:</label><br />
                    <input
                        type="text"
                        id="Priority"
                        name="Priority"
                        value={Priority}
                        onChange={(e) => setPriority(e.target.value)}
                    /><br />
                </div>
                <div>
                <label htmlFor="OpenedBy">Opened By:</label><br />
                    <input
                        type="text"
                        id="OpenedBy"
                        name="OpenedBy"
                        value={OpenedBy}
                        onChange={(e) => setOpenedBy(e.target.value)}
                    /><br />
                </div>
                <div>
                <label htmlFor="State">State:</label><br />
                    <input
                        type="text"
                        id="State"
                        name="State"
                        value={State}
                        onChange={(e) => setState(e.target.value)}
                    /><br />
                </div>
                <div>
                <label htmlFor="dept">Department:</label><br />
                    <input
                        type="text"
                        id="dept"
                        name="dept"
                        value={dept}
                        onChange={(e) => setDept(e.target.value)}
                    /><br />
                </div>
                
                <button type="submit">Submit</button>
            </form>
            <div className="res">
              
            </div>
            </div>
    </div>
    
  );
}

export default Ticket;
