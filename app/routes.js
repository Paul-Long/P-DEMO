import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ComponentOne from './components/ComponentOne';
import ImageCrop from './components/ImageCrop';

export default (
  <Router>
    <Route exact path="/" component={ComponentOne} />
    <Route path="/imageCrop" component={ImageCrop} />
  </Router>
);