import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner'
import Header from './components/Header';
import Navigation from './components/Navigation';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Contacts from './components/Contacts';
import './App.css';

function App() {
  return (
    <Suspense fallback={(
      <Loader
         type="Ball-Triangle"
         color="#FB8122"
         height={100}
         width={100}
         timeout={3000} //3 secs
         style={{
           position: 'absolute',
           left: '50%',
           top: '50vh',
           transform: 'translate(-50%, -50%)'
          }}
      />
    )}>
      <Router>
        <div className="app__container">
          <Header />
          <section className="app__main">
            <Navigation />
            <div className="app__main__separator" />
            <div className="app__main__route">
              <Switch>
                <Route path="/" exact>
                  <About />
                </Route>
                <Route path="/portfolio">
                  <Portfolio />
                </Route>
                <Route path="/experience">
                  <Experience />
                </Route>
                <Route path="/education">
                  <Education />
                </Route>
                <Route path="/skills">
                  <Skills />
                </Route>
                <Route path="/contacts">
                  <Contacts />
                </Route>
              </Switch>
            </div>
          </section>
        </div>
      </Router>
    </Suspense>
  );
}

export default App;
