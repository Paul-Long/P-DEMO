import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import ComponentOne from './components/ComponentOne';
import ImageCrop from './components/ImageCrop';

ReactDom.render((
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
  ), document.getElementById('app')
);