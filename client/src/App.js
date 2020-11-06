import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './index.css';
import Home from './components/Home';
import Room from './components/Room';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/:roomId' component={Room} />
      </Switch>
    </Router>
  );
}

export default App;
