import RestroCard from "./RestroCard";

import resList from "../utils/resList";
import { useState } from "react";


const Body = () => {
  const [resLst , setResLst] = useState(resList);


  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={() => {
          const filterList = resLst.filter((restaurant) => restaurant.avgRating > 4);
          console.log(filterList);
           setResLst(filterList);
        }}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {
          resLst.map(item => {
          return <RestroCard key={item.id} resData={item}/>
        })
      }
      </div>
    </div>
  );
};

export default Body;
