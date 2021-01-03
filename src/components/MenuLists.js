import React, { useState } from "react";
import Menu from "./Menu";
import data from "../data";

const MenuLists = () => {
  const [menu, setMenu] = useState(data);
  return (
    <div className="menulists-container">
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
