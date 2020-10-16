//component

import React from "react";
import "./Header.css";
import SearhIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="header">
      {/*amazon-logo*/}
      <Link to="/">
        <img
          src="https://onlinebusinessmanager.com/wp-content/uploads/2018/09/white-amazon-logo-png-6.png"
          className="header__logo"
        />
      </Link>

      {/*search-bar*/}
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearhIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="header__options">
          <span className="header__optionLineOne"> Hello Guest </span>
          <span className="header__optionLineTwo">Sing In</span>
        </div>

        <div className="header__options">
          <span className="header__optionLineOne"> Returns</span>
          <span className="header__optionLineTwo">& orders</span>
        </div>

        <div className="header__options">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;