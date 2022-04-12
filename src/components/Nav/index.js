import React from 'react';

function Nav() {
  return (
    <header className="flex-row px-1">
      <h1> Teresa Wohl </h1>
      <nav>
        <ul className="flex-row">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
            </li>
            <li>
            <a href="#resume">Resume</a>
            </li>
          </ul>
      </nav>
    </header>
  );
}

export default Nav;