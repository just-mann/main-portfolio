import React from 'react';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import NotFound from './components/pages/NotFound';
import Footer from './components/pages/partials/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
          <Route exact path="*">
            <NotFound/>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App;