import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Home from './home';
import Crop from './crop';
import './styles/style.less';

const App = () => (
  <Router>
    <div className='h-app'>
      <ul className='h-app-header' style={{borderBottom: '1px solid #ddd', display: 'flex', flexDirection: 'row'}}>
        <li style={{marginLeft: '10px'}}><Link to='/'>HOME</Link></li>
        <li style={{marginLeft: '10px'}}><Link to='/crop'>CROP</Link></li>
      </ul>
      <Route exact path='/' component={Home} />
      <Route path='/crop' component={Crop} />
    </div>
  </Router>
);


ReactDom.render((<App />), document.getElementById('app'));
