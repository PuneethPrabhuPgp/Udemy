import RestroCard from "./RestroCard";

import resList from "../utils/resList";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


const Body = () => {
  const [resLst, setResLst] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    // const json = await data.json();
    // console.log(json);
    // console.log(json.data.cards[2].data.data.cards);
    //setResLst(json);
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(resList);
      }, 2000);
    })
      .then((response) => {
        setResLst(response);
        setFilteredRes(response);
      });

  }


  return resLst.length === 0 ? <Shimmer/> :  (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
          }}
          />
          <button
            onClick={() => {
              const serachedStuff = resList.filter(item => item.name.toUpperCase().includes(searchText.toUpperCase()));
              setFilteredRes(serachedStuff);
          }}
          >Serach</button>
        </div>
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
          filteredRes.map(item => {
            return <Link to={"/restaurants/" + item.id} key={item.id}>
                <RestroCard resData={item} />
              </Link>

        })
      }
      </div>
    </div>
  );
};

export default Body;
