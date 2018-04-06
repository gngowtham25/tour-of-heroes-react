import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HeaderComponent from './modules/Header';
import MainComponent from './modules/Main';
import HeroDetailComponent from './modules/HeroDetail';

class App extends React.Component {

  render() {


    return (
      <Router>
        <div className="container">
          <HeaderComponent />
          <ul>
            <li><Link to={'/heroes'}>My Heroes</Link></li>
          </ul>
          <hr />
          <Switch>
            <Route exact path='/heroes' component={MainComponent} />
            <Route path='/heroes/:id' component={HeroDetailComponent} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
