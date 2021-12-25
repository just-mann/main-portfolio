import React from 'react';
import './styles.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Home />
    </div>
  )
}

export default App;