import Shimmer from "./Shimmer";
import resList from "../utils/resList";
import Constants from "../utils/constants";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useRestuarantMenu";

const RestaurantMenu = () => {

  const { resId } = useParams();

  const menuInfo = useResturantMenu(resId);

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
