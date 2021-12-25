import React from 'react';
import './styles.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import NotFound from './components/pages/NotFound';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
          <Route exact path="/contact-me">
            <Contact />
          </Route>
          <Route exact path="*">
            <NotFound/>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;