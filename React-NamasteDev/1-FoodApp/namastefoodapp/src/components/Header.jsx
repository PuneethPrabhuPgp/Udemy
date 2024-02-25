import { useState } from "react";
import Constants from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () => {
  let btnName = "Login";
  const [btn, setBtn] = useState(btnName);
  const onlineStatus = useOnlineStatus();

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
          <li>
            Online Status :
            { onlineStatus ? "✅" : "🔴" }
          </li>
          <li>
           <Link to="/">Home</Link>
          </li>
          <li>
            <Link to= '/about'>About Us</Link>
          </li>
          <li>
            <Link to='/contact'>Contact Us</Link>
          </li>
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
