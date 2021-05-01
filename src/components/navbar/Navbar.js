import avatar from "../../assets/avatar.svg";

import DatePicker from "react-datepicker";

//import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import "./Navbar.css"
import "react-datepicker/dist/react-datepicker.css";



const Navbar = ({ sidebarOpen, openSidebar, datePick, setDatePick, sensorDataState }) => {

  //const [startDate, setStartDate] = useState(new Date('2021-04-22T14:01:03Z'));
  
  const handleCalendarClose = (datePick) => {
      console.log('closed, pick ', datePick );
      console.log('closed, data ', sensorDataState );

  }

  const handleCalendarOpen = () => console.log('Calendar opens');

    return (
      
        <nav className="navbar">
        <div className="nav_icon" onClick={() => openSidebar()}>
          <i className="fa fa-bars" aria-hidden="true"></i>
        </div>

        <div className="navbar__left">
{/*           <a href="#">Subscribers</a>
          <a href="#">Video Management</a> */}
          <a className="active_link" href={() => false}>
            Dashboard
          </a>
        </div>
        <div className="navbar__right">
          <a href={() => false}>
            <i className="fa fa-clock-o" aria-hidden="true">
          <DatePicker className="calendarWidth" selected={datePick} onChange={date => setDatePick(date)} 
                onCalendarClose={handleCalendarClose(datePick)}
                onCalendarOpen={handleCalendarOpen}
          />
            </i>
          </a>
          <a href={() => false}>
            <i className="fa fa-search" aria-hidden="true"></i>
          </a>
          <a href={() => false}>
            <img width="30" src={avatar} alt="avatar" />
          </a>
        </div>
      </nav>
    );
};

export default Navbar;