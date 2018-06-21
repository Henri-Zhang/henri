import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const Home = Loadable({
  loader: () => import('./components/Home'),
  loading: () => <div>Loading...</div>
})

const RunningStory = Loadable({
  loader: () => import('./components/ComingSoon'),
  loading: () => <div>Loading...</div>
})

const BeenPlaces = Loadable({
  loader: () => import('./components/BeenPlaces'),
  loading: () => <div>Loading...</div>
})

const Resume = Loadable({
  loader: () => import('./components/Resume'),
  loading: () => <div>Loading...</div>
})

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/running-story" component={RunningStory} />
      <Route path="/been-places" component={BeenPlaces} />
      <Route path="/resume" component={Resume} />
    </Switch>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
