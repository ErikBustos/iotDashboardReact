import {useState} from 'react';
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar"
import Sidebar from "./components/sidebar/Sidebar";

const App= () => {

  const[sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  }

  const closeSidebar = () =>{
    setSidebarOpen(false);
  }

  let user = {
    email:"erikbus2007@hotmail.com",
    name:"Erik Bustos"
  }

  return (
    <div className="container">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar}/>
      <Main user={user} />
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
 );
}

export default App;
