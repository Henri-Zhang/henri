import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from '@/components/Loading';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const Home = Loadable({
  loader: () => import('@/pages/Home'),
  loading: Loading
});

const RunningStory = Loadable({
  loader: () => import('@/pages/ComingSoon'),
  loading: Loading
});

const BeenPlaces = Loadable({
  loader: () => import('@/pages/BeenPlaces'),
  loading: Loading
});

const Resume = Loadable({
  loader: () => import('@/pages/Resume'),
  loading: Loading
});

const PokerRecord = Loadable({
  loader: () => import('@/pages/PokerRecord'),
  loading: Loading
});

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/running-story" component={RunningStory} />
      <Route path="/been-places" component={BeenPlaces} />
      <Route path="/resume" component={Resume} />
      <Route path="/poker-record" component={PokerRecord} />
    </Switch>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('henri'));
registerServiceWorker();
