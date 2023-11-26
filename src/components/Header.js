import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/depression">Depression</Link>
          </li>
          <li>
            <Link to="/meditation">Meditation</Link>
          </li>
          <li>
            <Link to="/sleep">Sleep</Link>
          </li>
          <li>
            <Link to="/stress">Stress/Anxiety</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
