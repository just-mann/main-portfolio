import React, { Component } from 'react';
import Navbar from './partials/Navbar';


class Portfolio extends Component {
  render() {
    return (
        <div className='Portfolio'>
            <Navbar />
            <div className="portfolioContainer">
            <h2>Portfolio</h2>
            </div>
        </div>
    )
  }
}

export default Portfolio
