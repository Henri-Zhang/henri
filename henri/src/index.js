import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import './index.css';
import Home from './components/Home';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Home name="Barrow" />, document.getElementById('root'));
registerServiceWorker();
