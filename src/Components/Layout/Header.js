import React, { Fragment } from "react";

function Header() {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="/Home">
          Character Tracker
        </a>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/Features">
                Character
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Features">
                Button 2
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
}

export default Header;
