import React from 'react';
import loadAbout from 'bundle-loader?lazy!containers/dashboard/about';
import Bundle from 'common/Bundle';

const About = (props) => (
  <Bundle load={loadAbout}>
    {(About) => <About {...props}/>}
  </Bundle>
)

const routes = {
  path: 'about',
  component: About,
}

export default routes;