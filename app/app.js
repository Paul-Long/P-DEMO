import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import ComponentOne from './components/ComponentOne';
import ImageCrop from './components/ImageCrop';

const app = () => (
  <Router>
    <div className='h-app'>
      <ul className='h-app-header' style={{borderBottom: '1px solid #ddd', display: 'flex', flexDirection: 'row'}}>
        <li style={{marginLeft: '10px'}}><Link to='/'>hello</Link></li>
        <li style={{marginLeft: '10px'}}><Link to='/imageCrop'>image-crop</Link></li>
      </ul>
      <Route exact path='/' component={ComponentOne} />
      <Route path='/imageCrop' component={ImageCrop} />
    </div>
  </Router>
);


ReactDom.render((app()), document.getElementById('app')
);