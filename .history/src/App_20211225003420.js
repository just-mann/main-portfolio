import React from 'react';
import './styles.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Router>
        {/* <Navbar /> */}
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
          <Route exact path="/devProcess">
            <DevProcess />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/portfolio/:id">
            <ProjDetails />
          </Route>
          <Route exact path="*">
            <NotFound/>
          </Route>
        </Switch>
        <ScrollTop />
        {/* <Footer /> */}
      </Router>
    </div>
  )
}

export default App;