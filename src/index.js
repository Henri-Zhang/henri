import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Home from './components/Home';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App name="Barrow" />, document.getElementById('root'));
ReactDOM.render(<Home name="Barrow" />, document.getElementById('root'));
registerServiceWorker();
