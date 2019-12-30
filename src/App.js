import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import About from './components/About';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app__container">
        <Header />
        <section className="app__main">
          <Navigation />
          <div className="app__main__separator" />
          <div className="app__main__route">
            <Switch>
              <Route path="/">
                <About />
              </Route>
            </Switch>
          </div>
        </section>
      </div>
    </Router>
  );
}

export default App;
