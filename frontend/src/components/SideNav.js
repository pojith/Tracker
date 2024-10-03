import React, { Component } from 'react';
import '../css/SideNav.css'; // Import CSS file for styling
import {useNavigate} from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const SideNav = ({user,setComponent,filteredTickets}) =>{
      const navigate = useNavigate();
      const  handleDialogue = (e) => {
        document.getElementById('logoutConfirm').showModal()
      }

      const Hide = (e) =>{
        document.getElementById('logoutConfirm').close()
        
      }

      const LogOut = (e) =>{
        localStorage.removeItem('user')
        navigate('/')
      }

      const profileRedirect = (e)=>{
        navigate('/profile')
      }

      const renderConnect = ()=>{
        setComponent('TempComponent')
      }

      const renderMail = ()=>{
          setComponent('TempComponent')
      }

      const renderTickets = ()=>{
        setComponent('TicketsComponent')
      }
      


      const iconStyle = {
        fontSize:'50px',
        color:'white',
        display:'inline'
      }

        return (
          <div className="sidenav">
            <div className="user_icon" onClick={profileRedirect}>
              <div><AccountCircleIcon style={iconStyle}/></div>     
              <div className='barane'><h2 className='user' >{user.name}</h2></div>
            </div>
            <a className='ticketQueue' onClick={renderTickets}>TicketQueue</a>
            <a className='sendMail' onClick={renderMail}>Send Mail</a>
            <a className='connect' onClick={renderConnect}>Connect to Members</a>
            <a className='logout' onClick={handleDialogue}>Log out</a>
            <dialog id="logoutConfirm" className='logout-box'>
              <div className='confirm'>Confirm Logout </div>
              <hr></hr>
              <h3>log out of your account?</h3>
              <div id='confirmButtons'>
                <button id='no' onClick={Hide}>cancel</button>
                <button id='yes' onClick={LogOut}>logout</button>
              </div>
            </dialog>
          </div>
        );
      };
  



export default SideNav;
