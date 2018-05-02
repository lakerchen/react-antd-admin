import React from 'react';
import Bundle from 'common/Bundle';
import loadDashBoard from 'bundle-loader?lazy!containers/dashboard';
import about from './about';
import order from './order';

class DashBoard extends React.Component {
  render() {
    return (
      <Bundle load={loadDashBoard}>
        {(DashBoard) => <DashBoard {...props}/>}
      </Bundle>
    );
  }
}

// const DashBoard = (props) => (
//   <Bundle load={loadDashBoard}>
//     {(DashBoard) => <DashBoard {...props}/>}
//   </Bundle>
// )

console.log('DashBoard',DashBoard)

const routes = {
  path: 'dashboard',
  component: DashBoard,
  // getComponent(location, callback){
  //   callback(null,DashBoard);
  // },
  // getChildRoutes (location, next) {
  //   next(null,[about,order]);
  // },
  // childRoutes : [
  //   about,
  //   order,
  // ]
}

export default routes;