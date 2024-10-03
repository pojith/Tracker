import React from "react";
import SideNav from "../components/SideNav";
import { useState } from "react";
import Footer from '../components/footer';
import Header from '../components/header';
import TicketsComponent from "../components/ticketsComponent";
import TempComponent from "../components/temComponent";
import '../css/home.css'


const Home = () => {
  var user = JSON.parse(localStorage.getItem("user"));
    if (user===null){
      window.location.replace('/')
  }
  const [SelectedComponent,setComponent] = useState('TempComponent')

  const renderComponent = (comp) => {
    switch (comp) {
      case 'TicketsComponent':
        return <TicketsComponent user={user}/>;
      case 'TempComponent':
        return <TempComponent />;
        
      default:
        return null;
    }
  }
  
  return (
    <div className="home">
      <div className="sidenav">
      <SideNav user={user} setComponent={setComponent}/> 
      </div>
      <div className="componentContainer">
         {SelectedComponent && renderComponent(SelectedComponent)}
      </div>
    </div>
  );
}





export default Home;