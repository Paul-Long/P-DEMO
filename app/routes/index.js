import React from 'react';
import {BrowserRouter as Router, Link, Redirect, Route} from 'react-router-dom';
import Bundle from './bundle';
import '../styles/style.less';

class Routes extends React.Component {
  renderComponent = (props, component) => {
    return (
      <Bundle load={() => import(`../containers/${component}/index.js`)}>
        {(COM) => <COM {...props} />}
      </Bundle>
    )
  };

  render() {
    return (
      <Router>
        <div className='h-app'>
          <ul className='h-app-header'>
            {menus.map(m => (
              <li key={m.path}>
                <Link to={`/${m.path}`}>{m.path}</Link>
              </li>))}
          </ul>
          <Redirect from='/' to='HOME' />
          {menus.map(m => {
            return (
              <Route key={m.path}
                     exact={!!m.exact}
                     path={`/${m.path}`}
                     component={(props) => this.renderComponent(props, m.component)}
              />)
          })}
        </div>
      </Router>
    )
  }
}

export default Routes;
const menus = [
  {path: 'HOME', component: 'home', exact: true},
  {path: 'CROP', component: 'crop'},
  {path: 'TABLE', component: 'table'},
];