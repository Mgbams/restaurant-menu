import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useParams,
} from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <nav
        class="navbar navbar-expand-lg navbar-light bg-light"
        style={{
          width: "50vw",
        }}
      >
        <div
          class="collapse navbar-collapse"
          id="navbarNav"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link to="/" class="nav-link">
                {" "}
                All <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/" class="nav-link">
                {" "}
                Breakfast
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/" class="nav-link">
                {" "}
                Lunch
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/" class="nav-link">
                {" "}
                Shakes
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
