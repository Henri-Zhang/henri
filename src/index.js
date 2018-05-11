import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Home from './components/Home';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Home name="Henri" />, document.getElementById('root'));
registerServiceWorker();
