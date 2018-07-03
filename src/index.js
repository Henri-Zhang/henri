import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from './components/Loading'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const Home = Loadable({
  loader: () => import('./components/Home'),
  loading: Loading
})

const RunningStory = Loadable({
  loader: () => import('./components/ComingSoon'),
  loading: Loading
})

const BeenPlaces = Loadable({
  loader: () => import('./components/BeenPlaces'),
  loading: Loading
})

const Resume = Loadable({
  loader: () => import('./components/Resume'),
  loading: Loading
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
