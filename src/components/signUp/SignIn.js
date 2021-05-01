import {useState, useContext} from 'react';
import { AccountContext } from './Accounts';
import { useHistory } from "react-router-dom";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

import './Signin.css'

const SignIn = () => {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');

    const  { authenticate } = useContext(AccountContext);


    const onSubmit = event => {
        event.preventDefault();
        authenticate(email, password)
          .then(data =>{
            console.log('Logged in!', data);
            routeChange();
          })
          .catch(err =>{
            window.alert(err.message)
            console.error('Failed to login ', err);
          })
      };

      const history = useHistory();

      const routeChange = () =>{ 
        let path = `/dashboard`; 
        history.push(path);
      }
    return (
        <div>
        <form onSubmit={onSubmit} className="form-signin">
          <h1 className="h3 mb-3 fw-normal">Please Sign in</h1>           
          <TextField
            value={email} 
            onChange={event => setEmail(event.target.value)} 
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            value={password}
            onChange={event => setPassword(event.target.value)}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
          <Link href="/signUp" variant="body2" >
                {"Don't have an account? Sign Up"}
          </Link>
        </form>
      </div>
  );
}


export default SignIn;