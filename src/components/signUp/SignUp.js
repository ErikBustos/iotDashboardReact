import {useState} from 'react';
import UserPool from '../../auth/UserPool';

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
          if (err) console.error(err);
          console.log(data);
        });
      };
    return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <input
          value={name}
          onChange={event => setName(event.target.value)}
        />
        <input
          value={password}
          onChange={event => setPassword(event.target.value)}
        />

        <button type='submit'>Signup</button>
      </form>
    </div>
  );
}


export default SignUp;