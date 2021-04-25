import { createContext } from 'react';
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import Pool from '../../auth/UserPool';


const AccountContext = createContext();

    const Account = props => {
        const getSession = async () =>
        await new Promise((resolve, reject) => {
        const user = Pool.getCurrentUser();
        if (user) {
            user.getSession((err, session) => {
            if (err) {
                reject();
            } else {
                resolve(session);
            }
            });
        } else {
            reject();
        }
        });

    const authenticate = async (Username, Password) =>
    await new Promise((resolve, reject) => {
      const user = new CognitoUser({ Username, Pool });
      const authDetails = new AuthenticationDetails({ Username, Password });

      user.authenticateUser(authDetails, {
        onSuccess: data => {
          console.log('onSuccess:', data);
          localStorage.setItem('userName', data.idToken.payload.name);
          localStorage.setItem('userEmail', data.idToken.payload.email);
          resolve(data);
        },

        onFailure: err => {
          console.error('onFailure:', err);
          reject(err);
        },

        newPasswordRequired: data => {
          console.log('newPasswordRequired:', data);
          resolve(data);
        }
      });
    });

  const logout = () => {
    const user = Pool.getCurrentUser();
    if (user) {
      console.log('Logging out')
      localStorage.removeItem('userName');
      localStorage.removeItem('email');
      user.signOut();
    }
  }


  return (
    <AccountContext.Provider value={{
      authenticate,
      getSession,
      logout
    }}>
      {props.children}
    </AccountContext.Provider>
  );

}


export { Account, AccountContext };