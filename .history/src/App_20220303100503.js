import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import ProjDetails from './components/pages/partials/ProjDetails';
import NotFound from './components/pages/NotFound';
import Footer from './components/pages/partials/Footer';
import ScrollUp from './components/pages/partials/ScrollUp';
import './styles.css'; 
// import Navbar from './components/pages/partials/Navbar';

const App = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  });


  return (
    <div className="App">
      <Router>
        {/* <Navbar /> */}
        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route exact path="/about-me">
            <About />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/contact-me">
            <Contact />
          </Route>
          <Route exact path="/projects/:id">
            <ProjDetails />
          </Route>
          <Route exact path="*">
            <NotFound/>
          </Route>
        </Switch>
        <ScrollUp />
        <Footer />
      </Router>
    </div>
  )
}

export default App;