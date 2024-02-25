import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useRestuarantMenu";
import Restuarantcategory from "./RestuarantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(0);

  const { resId } = useParams();

  const menuInfo = useResturantMenu(resId);

  if (menuInfo === null) {
    console.log('null');
    return <Shimmer />;
  }

  const { id, name, cuisines } = menuInfo[0];

  const categories = ["Recommended","Newly Added", "Very Good"];

  return (
    <div className="text-center">
      <h1 className="font-bold my-10 text-2xl">{name}</h1>
      <h3 className="text-black text-slate-600 text-lg my-10">Menu</h3>
      {
        categories.map((category, index) =>
          //Controlled component
          <Restuarantcategory
          key={category}
            data={category}
            showItems={index === showIndex ? true : false}
            setShowIndex = { () => setShowIndex(index)}
        />)
      }
    </div>
  );
}

export default RestaurantMenu;
