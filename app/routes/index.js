import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Bundle from './bundle';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <div className='h-app'>
          <ul className='h-app-header' style={{borderBottom: '1px solid #ddd', display: 'flex', flexDirection: 'row'}}>
            {menus.map(m => (
              <li key={m.path} style={{marginLeft: '10px'}}><Link to={`/${m.path}`}>{m.path}</Link></li>))}
          </ul>
          {menus.map(m => {
            return (
              <Route
                key={m.path}
                exact={!!m.exact}
                path={`/${m.path}`}
                component={(props) => (
                  <Bundle load={() => import(`../containers/${m.component}/index.js`)}>
                    {(COM) => <COM {...props} />}
                  </Bundle>
                )} />)
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