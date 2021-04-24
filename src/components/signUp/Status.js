import { useState, useContext, useEffect } from 'react';
import { AccountContext } from './Accounts';


const Status = () =>{
    const [status, setStatus] = useState(false);
    
    const { getSession, logout } = useContext(AccountContext);
    
    useEffect(() => {
      getSession()
        .then(session => {
          console.log('Session:', session);
          setStatus(true);
        })
    }, []);
    
    return (
      <div>
        {status ? (
          <div>
            You are logged in.
            <button onClick={logout}>Logout</button>
          </div>
        ) : 'Please login below.'}
      </div>
    );
}

export default Status;