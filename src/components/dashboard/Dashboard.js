import Main from "../main/Main";
import Navbar from "../navbar/Navbar"
import Sidebar from "../sidebar/Sidebar";
import {useState} from 'react';

import './Dashboard.css'

const Dashboard = () => {
    
  const[sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  }

  const closeSidebar = () =>{
    setSidebarOpen(false);
  }

    return (
        <div className="container">
        <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar}/>
        <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
        <Main />
        </div>
    );
}
export default Dashboard;
