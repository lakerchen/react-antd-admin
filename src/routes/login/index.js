import React from 'react';
import loadLogin from 'bundle-loader?lazy!containers/login';
import Bundle from 'common/Bundle';

// const Login = (props) => (
//   <Bundle load={loadLogin}>
//     {(Login) => <Login {...props}/>}
//   </Bundle>
// )

class Login extends React.Component {
  render() {
    return (
      <Bundle load={loadLogin}>
        {(Login) => <Login {...props}/>}
      </Bundle>
    );
  }
}

console.log('Login',Login)

const routes = {
  path: 'login',
  component: Login,
  // getComponent(location, callback){
  //   callback(null,Login);
  // },
  onError(error){
    console.log('/login',error)
  },
}

export default routes;