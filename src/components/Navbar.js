import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useParams,
} from "react-router-dom";

const Navbar = ({ filterCategory }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <nav
        className="navbar navbar-expand-lg"
        style={{
          width: "50vw",
        }}
      >
        <div
          className="collapse navbar-collapse"
          id="navbarNav"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ul className="navbar-nav">
            <li>
              <button onClick={() => filterCategory("all")}>All</button>
            </li>
            <li>
              <button onClick={() => filterCategory("breakfast")}>
                {" "}
                Breakfast
              </button>
            </li>
            <li>
              <button onClick={() => filterCategory("lunch")}>Lunch</button>
            </li>
            <li>
              <button onClick={() => filterCategory("shakes")}> Shakes</button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
