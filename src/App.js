import React, { Component } from 'react';
import { HashRouter, Route, Redirect } from 'react-router-dom'
import Header from './component/Header';
import Home from './pages/Home';
import './App.scss';

class App extends Component {
  render() {
    return (
        <div>
          <Header />
          <HashRouter>
            <div>
              <Route exact path="/" component={Home} />
              <Route exact path="/topic" render={() => <Redirect to="/" />} />
            </div>
          </HashRouter>
        </div>
    );
  }
}

export default App;