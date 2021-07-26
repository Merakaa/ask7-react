import React from 'react';
import './wait.css';
// import './Button.scss';

function Wait() {
  return (
    <div className="wait" id="preloader">
      <span className="wait__button"></span>
      <span className="wait__button"></span>
      <span className="wait__button"></span>
    </div>
  );
}

export default Wait;