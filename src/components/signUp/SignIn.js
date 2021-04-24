import {useState, useContext} from 'react';
import { AccountContext } from './Accounts';

const SignIn = () => {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');

    const  { authenticate } = useContext(AccountContext);


    const onSubmit = event => {
        event.preventDefault();
        authenticate(email, password)
          .then(data =>{
            console.log('Logged in!', data);
          })
          .catch(err =>{
            console.error('Failed to login ', err);
          })
      };
    return (
        <div>
        <form onSubmit={onSubmit}>
          <input value={email} onChange={event => setEmail(event.target.value)} />
  
          <input
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
  
          <button type="submit">Login</button>
        </form>
      </div>
  );
}


export default SignIn;