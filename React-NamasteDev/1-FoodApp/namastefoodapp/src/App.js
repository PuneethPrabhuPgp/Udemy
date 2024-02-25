import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import UserContext from "./utils/UserContext";


const AppLayout = () => {
  const [userInfo, setUserInfo] = useState();
  //authorization api call.
  useEffect(() => {
    //Make an api call and send userName and password
    const data = {
      name: "Akshay Saini"
    };
    setUserInfo(data.name);

  }, []);

  return (
    <UserContext.Provider value={{ loggedInUser: userInfo, setUserInfo }}>
      <div className="app">

        <Header />

        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

export default AppLayout;
