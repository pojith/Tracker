import { react } from "react";
import {useNavigate} from 'react-router-dom';
import { useState , useEffect} from "react";
import '../css/styles.css'
import '../css/DropDown.css';



const TicketsComponent = ({user})=>{
    const [tickets, setTickets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedOption, setSelectedOption] = useState('0');
  
    useEffect(() => {
      const fetchTickets = async () => {
        try {
          const response = await fetch('http://localhost:8080/Ticket/getTicketByDept', {
            method:"POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
          });
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const data = await response.json();
          setTickets(data);
          console.log(data);
          setLoading(false);
        } catch (error) {
          setError(error.message);
          setLoading(false);
        }
      
      };
  
      fetchTickets();
    }, [])
  
    if (loading){
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error}</div>;
    }
   
    
    const filteredTickets = selectedOption === '0' ? tickets : tickets.filter(ticket => ticket.state === selectedOption);
    return (
        <div className="TicketQueue">
        <Dropdown setSelectedOption={setSelectedOption} selectedOption={selectedOption}/>
        <div className="ticketcontainer">
            <h1>Tickets</h1>
            {filteredTickets.map((ticket, index) => 
            <TicketComponent key={index} ticket={ticket} />)}
         </div>
        </div>  
    )
    
}

const Dropdown = ({setSelectedOption,selectedOption}) => {
  

    const handleChange = (event) => {
      setSelectedOption(event.target.value);
    };
  
      return (
          <div className="dropdown-container">
            <label htmlFor="status" className="dropdown-label">Select Status:</label>
            <select id="status" value={selectedOption} onChange={handleChange} className="dropdown-select">
              <option value="0">All</option>
              <option value="1">Opened</option>
              <option value="2">Work in Progress</option>
              <option value="3">Pending</option>
              <option value="4">Closed</option>
            </select>
          </div>
        );
};
      
  


const Opened = () => {
    return (
      <>
      <h3 className="opened">Opened</h3>
      </>
    );
}
  
const Closed = () => {
    return (
      <>
      <h3 className="closed">Closed</h3>
      </>
    );
}
  
const WorkInProgress = () => {
    return (
      <>
        <h3 className="workinprogress">Work In Progress</h3>
      </>
    )
}
  
const Pending = () => {
    return (
      <>
        <h3 className="pending">Pending</h3>
      </>
    )
}

const ManagedBy = ({assignedTo}) =>  {
    return (
        <span className="managed-by">
        <strong>This ticket is managed by: {assignedTo}</strong>
        </span>
    );
}
  
const TicketComponent = ({ticket}) => {
    const navigate = useNavigate();
    const handleClick = (e) => {
        e.preventDefault();
        const saveObjectToLocalStorage = (key, object) => {
        localStorage.setItem(key, JSON.stringify(object));
        };
        
        // Example usage:
        const myObject = ticket;
        saveObjectToLocalStorage("ticket", myObject);
        navigate('/TicketInfo');
    }

    const insertState = (state) => {

        if (state === '1')
        return <Opened />
        else if (state === '4')
        return <Closed />
        else if (state === '2')
        return <WorkInProgress />
        else 
        return <Pending/>
    }


    return (
    <div className="ticketblock" onClick={handleClick}>
        <div className="a">
            <div>
            <h3 className="id">Ticket Id:</h3>{ticket.ticketId}
            </div>
            <div>
            <h3 className="">State:</h3>
            {insertState(ticket.state)}
        </div>
        </div>
        <div className="a">
            <div>
            <h3 className="id">Priority: </h3>{ticket.priority}
            </div>
            <div>
            <h3 className="statediv">Ticket Info:</h3>
            {ticket.ticketInfo}
            
            </div>
            { ticket.state !== '1' && <ManagedBy assignedTo={ticket.assignedTo}/>}
        </div>
        
    </div>
    );
}

export default TicketsComponent