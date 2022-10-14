import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [name] = useState("YOUR NAME");

  return (
    <nav id="navbar">
      <ul>
        <a href="#">
          <li>Home</li>
        </a>
        <a href="#">
          <li>Contact</li>
        </a>
        <a href="#">
          <li>About</li>
        </a>
      </ul>

      <div className="nav-details">
        <p className="nav-username">{name}</p>
      </div>
    </nav>
  );
}

export default Navbar;
