import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import data from "../data";
import Navbar from "./Navbar";

const MenuLists = () => {
  const [menu, setMenu] = useState(data);

  const filterCategory = (category) => {
    if (category === "all") {
      setMenu(data);
      return;
    }
    const sortedMenu = data.filter(
      (response) => response.category === category
    );
    setMenu(sortedMenu);
  };

  return (
    <div className="menulists-container">
      <h1 className="text-center app-title">KING'S MENU</h1>
      <div className="divider-container">
        <div className="divider"></div>
      </div>
      <div className="navbar container-sm d-flex justify-content-center align-items-center mb-3">
        <Navbar filterCategory={filterCategory} />
      </div>
      {/*  display menu items here */}

      {menu.map((items) => {
        return (
          <div className="menulists-child" key={items.id}>
            <Menu {...items} />
          </div>
        );
      })}
    </div>
  );
};

export default MenuLists;
