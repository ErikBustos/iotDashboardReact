import Main from "../main/Main";
import Navbar from "../navbar/Navbar"
import Sidebar from "../sidebar/Sidebar";
import {useState} from 'react';

import './Dashboard.css'
import { Redirect } from "react-router";

const Dashboard = () => {
    
  const[sidebarOpen, setSidebarOpen] = useState(false);

  const [datePick, setDatePick] = useState(new Date('2021-04-22T14:01:03Z'));

  
  const openSidebar = () => {
    setSidebarOpen(true);
  }

  const closeSidebar = () =>{
    setSidebarOpen(false);
  }

  const isLogged = !!localStorage.getItem('userEmail');

    if(!isLogged) {
      return (
        <Redirect to="/login"/>
      )
    }
    return (
        <div className="container">
        <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} datePick={datePick} setDatePick={setDatePick} />
        <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
        <Main datePick={datePick}/>
        </div>
    );
}
export default Dashboard;
