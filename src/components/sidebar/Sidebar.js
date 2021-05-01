import { useContext } from 'react';
import { AccountContext } from '../signUp/Accounts';

import "./Sidebar.css";
import logo from "../../assets/logo.png";


const Sidebar = ({ sidebarOpen, closeSidebar}) => {
  const { logout } = useContext(AccountContext);

  
  return (
    <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={logo} alt="logo" />
          <h1>Farms</h1>
        </div>
        <i
          onClick={() => closeSidebar()}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>
        <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link">
          <i className="fa fa-home"></i>
          <a href={() => false}>Dashboard</a>
        </div>
        <div className="sidebar__logout">
          <i className="fa fa-power-off"></i>
          <a href="/login" onClick= {logout}>Log out</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
