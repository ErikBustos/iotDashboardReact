import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
    UserPoolId: 'us-east-1_Hd0KPl74n',
    ClientId: '4ui9tg9i8omc8e1vdihsgof11e'
};

export default new CognitoUserPool(poolData);
