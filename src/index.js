import { BrowserRouter as Router} from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import 'boxicons/css/boxicons.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Router basename="/portfolio">
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);