import React from 'react';
import { Route, Switch } from 'react-router-dom';

import About from './components/About';
import Home from './components/Home';
import NavBar from './components/Nav';
import CommingSoon from './components/ComingSoon';
import CharacterDetails from './components/CharacterDetail';

const App = () => {
  return (
      <div>
        <NavBar/>
        <Switch>
          <Route exact path='/' component={ Home }/>
          <Route exact path='/about' component={ About }/>
          <Route exact path='/comingsoon' component={ CommingSoon }/>
          <Route path='/home/:id' component={ CharacterDetails }/>
        </Switch>
      </div>
  );
};

export default App;
