import React from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";

const Menu = ({ id, title, category, price, img, desc }) => {
  return (
    <div id="menu-wrapper">
      <div className="image-div rounded">
        <img src={img} alt={title} />
      </div>
      <div className="food-contents-div">
        <div className="tittle-price-container">
          <h4>{title}</h4>
          <span className="price">$ {price}</span>
        </div>
        <div>
          <span>{desc}</span>
        </div>
      </div>
    </div>
  );
};

Menu.propTypes = {};

export default Menu;
