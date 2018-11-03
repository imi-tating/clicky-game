import React, { Component } from 'react'

const App = () => (
  <div>
    <ul className="nav">
      <li className="nav-item">
        <a className="nav-link" href="#">
          Clicky Game
        </a>
      </li>
      <li className="nav-item">Click and image to begin!</li>
      <li className="nav-item">
        Score: <span />| Top Score: <span />
      </li>
    </ul>
    <div className="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 className="titletext">Clicky Game!</h1>
        <p className="subtext">
          Click on an image to earn points, but don't click on any more than
          once!
        </p>
      </div>
    </div>
  </div>
)

export default App
