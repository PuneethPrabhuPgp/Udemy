import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import resList from "../utils/resList";
import Constants from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
   const [menuInfo, setMenuInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu().then((response) => {
      setResInfo(response);
      var filterecord = response.filter(x => x.id === parseInt(resId));
      setMenuInfo(filterecord);
    });
  }, [resId]);

  const fetchMenu = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(resList);
      }, 2000);
    });
  }

  if (menuInfo === null) {
    console.log('null');
    return <Shimmer />;
  }

  const { id, name, cuisines } = menuInfo[0];


  return (
    <div className="menu">
      <h1>{name}</h1>
      <img alt="Restro name"
        src={
          Constants.RestroCards.meghanaFoods
        } />
      <h3>Menu</h3>
      <ul>
        {
          cuisines.map((cuisinie, index) => <li key={ index }>
            {cuisinie}
          </li>)
        }
      </ul>
    </div>
  );
}

export default RestaurantMenu;
