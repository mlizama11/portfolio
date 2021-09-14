import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import 'boxicons/css/boxicons.min.css';

ReactDOM.render(
  <Router basename="/portfolio">
    <App />
  </Router>,
  document.getElementById('root')
);