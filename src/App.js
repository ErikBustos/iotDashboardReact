import {useState} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar"
import Sidebar from "./components/sidebar/Sidebar";
import SignUp from "./components/signUp/SignUp";
import SignIn from "./components/signUp/SignIn";
import {Account} from './components/signUp/Accounts';
import Status from './components/signUp/Status';


const App= () => {

  const[sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  }

  const closeSidebar = () =>{
    setSidebarOpen(false);
  }

/*   let user = {
    email:"erikbus2007@hotmail.com",
    name:"Erik Bustos"
  } */

  return (
    <div className="container">
      <Account>
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <SignIn/>
          </Route>
        </Switch>
      </BrowserRouter>
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar}/>
      <Main />
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
        <Status/>
        <SignUp/>
      </Account>
    </div>
 );
}

export default App;
