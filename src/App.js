import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignUp from "./components/signUp/SignUp";
import SignIn from "./components/signUp/SignIn";
import {Account} from './components/signUp/Accounts';
import Dashboard from './components/dashboard/Dashboard';


const App= () => {

  return (
    <div>
      <Account>
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <SignIn/>
          </Route>
          <Route path="/signUp">
            <SignUp/>
          </Route>
          <Route path="/dashboard">
          <Dashboard/>
          </Route>
        </Switch>
      </BrowserRouter>
      </Account>
    </div>
 );
}

export default App;
