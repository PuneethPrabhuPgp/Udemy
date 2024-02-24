import { useState } from "react";
import Constants from "../utils/constants";

const Header = () => {
  let btnName = "Login";
  const [btn, setBtn] = useState(btnName);

  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          alt="food icon"
          src={ Constants.logo }
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li>
            <button className="login"
              onClick={
                () => {
                 btn === 'Login' ? setBtn("Logout") : setBtn("Login");
              }
            }>
              {btn}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
