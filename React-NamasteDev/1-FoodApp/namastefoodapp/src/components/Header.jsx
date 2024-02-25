import { useContext, useState } from "react";
import Constants from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


const Header = () => {
  let btnName = "Login";
  const [btn, setBtn] = useState(btnName);
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="flex justify-between bg-pink-400 shadow-lg mb-2">
      <div className="logo-container">
        <img
          className="w-24"
          alt="food icon"
          src={ Constants.logo }
        />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 ">
          <li className="px-4">
            Online Status :
            { onlineStatus ? "✅" : "🔴" }
          </li>
          <li className="px-4">
           <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to= '/about'>About Us</Link>
          </li>
          <li className="px-4">
            <Link to='/contact'>Contact Us</Link>
          </li>
          <li className="px-4">Cart</li>
          <li className="px-4">
            <button className="login"
              onClick={
                () => {
                 btn === 'Login' ? setBtn("Logout") : setBtn("Login");
              }
            }>
              {btn}
            </button>
          </li>
          <li className="px-4">
            {loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
