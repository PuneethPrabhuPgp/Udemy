import RestroCard from "./RestroCard";

import resList from "../data/resList";


const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {
          resList.map(item => {
          return <RestroCard key={item.id} resData={item}/>
        })
      }
      </div>
    </div>
  );
};

export default Body;
