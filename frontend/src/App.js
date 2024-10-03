import './css/App.css';
// import './css/styles.css';
import './webroute/Ticket';
import Ticket from './webroute/Ticket';
import TicketInfo from './webroute/TicketInfo';
import { Routes as ReactRoutes, Route as ReactRoute} from 'react-router-dom';
import Login from './webroute/Login';
import Admin from './webroute/Admin';
import UserProfile from './webroute/userProfile';
import Home from './webroute/home'

function App() {


  return (
    <div className='App'>
      <ReactRoutes>
        <ReactRoute path='/' element={<Login/>}/>
        <ReactRoute path='/Ticket' element={<Ticket/>}/>
        <ReactRoute path='/home' element={<Home/>} />
        <ReactRoute path='/TicketInfo' element={<TicketInfo/>}  />
        <ReactRoute path='/Admin' element={<Admin/>}/>
        <ReactRoute path='/profile' element={<UserProfile/>}/>
      </ReactRoutes>
    </div>
  );
}
export default App;
