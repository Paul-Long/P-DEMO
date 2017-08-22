import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Home from './home';
import Crop from './crop';
import TableDemo from './table';
import './styles/style.less';

const menus = [
  {path: 'HOME', component: Home, exact: true},
  {path: 'CROP', component: Crop},
  {path: 'TABLE', component: TableDemo},
];
const App = () => (
  <Router>
    <div className='h-app'>
      <ul className='h-app-header' style={{borderBottom: '1px solid #ddd', display: 'flex', flexDirection: 'row'}}>
        {menus.map(m => (<li key={m.path} style={{marginLeft: '10px'}}><Link to={`/${m.path}`}>{m.path}</Link></li>))}
      </ul>
      {menus.map(m => (<Route key={m.path} exact={!!m.exact} path={`/${m.path}`} component={m.component} />))}
    </div>
  </Router>
);

ReactDom.render((<App />), document.getElementById('app'));


