import React from 'react';
import {useState} from 'react';
import UserPool from '../../auth/UserPool';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import './Signin.css'

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const onSubmit = event => {
        event.preventDefault();
        let namedata= {
            Name : 'name',
            Value : name
        }
        let attributeList= []
        attributeList.push(namedata)
        UserPool.signUp(email, password, attributeList, null, (err, data) => {
          if (err) window.alert(err.message)
          console.log(data);
        });
      };

    return (
    <div>
      <form onSubmit={onSubmit} className="form-signin">
      <h1 className="h3 mb-3 fw-normal">Please Sign Up</h1>           
        <TextField
                autoComplete="fname"
                name="Name"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="Name"
                label="Name"
                autoFocus
                value={name}
                onChange={event => setName(event.target.value)}
              />
              <TextField
                variant="outlined"
                required
                fullWidth
                margin="normal"
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={event => setEmail(event.target.value)}
              />
              <TextField
                variant="outlined"
                required
                fullWidth
                margin="normal"
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={event => setPassword(event.target.value)}
              />
            <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Sign Up
          </Button>
      </form>
    </div>
  );
}


export default SignUp;