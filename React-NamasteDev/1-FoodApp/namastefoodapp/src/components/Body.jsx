import RestroCard from "./RestroCard";

import resList from "../utils/resList";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import withPromotedLabel from "./withPromotedLabel";
import UserContext from "../utils/UserContext";


const Body = () => {
  const [resLst, setResLst] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchText, setSearchText] = useState("");

  const { loggedInUser, setUserInfo } = useContext(UserContext);

  const RestaurantPromotedCard = withPromotedLabel(RestroCard);

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

  let onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return <h1>
      Oops!! Looks like you are offline. Please check your internet connectivity.
    </h1>
  }

  return resLst.length === 0 ? <Shimmer/> :  (
    <div className="body ">
      <div className="flex">
      <div className="filter flex">
        <div className="search m-4 p-4 ">
            <input type="text" className="border border-solid border-black" value={searchText}
              data-testid="serachInput"
            onChange={(e) => {
              setSearchText(e.target.value);
          }}
          />
          <button className="px-4 py-2 bg-green-200 m-4 rounded-xl"
            onClick={() => {
              const serachedStuff = resList.filter(item => item.name.toUpperCase().includes(searchText.toUpperCase()));
              setFilteredRes(serachedStuff);
          }}
            >Search</button>
          </div>
      </div>
      <div className="flex items-center">
        <button className="py-2 bg-red-200 rounded-xl" onClick={() => {
          const filterList = resLst.filter((restaurant) => restaurant.avgRating > 4);
          console.log(filterList);
           setResLst(filterList);
        }}>
          Top Rated Restaurants
        </button>
      </div>
        <div className="m-4 p-4 search flex items-center">
          UserName:
          <input className="border border-black p-2"
            value = {loggedInUser}
            onChange={(e) => {
              setUserInfo(e.target.value);
            }}
          />
          </div>
      </div>
      <div className="res-container flex flex-wrap">
        {
          filteredRes.map(item => {
            return <Link to={"/restaurants/" + item.id} key={item.id}>
              {
                item.promoted ? <RestaurantPromotedCard resData={item}/> : <RestroCard resData={item} />
              }
              </Link>

        })
      }
      </div>
    </div>
  );
};

export default Body;
