import Constants from "../utils/constants";

const styleCard = {
  backgroundColor: "#f0f0f0"
};

const RestroCard = ({ resData }) => {
  const { name, cuisines, avgRating, costForTwo, minTime } = resData;
  return (
    <div className="p-4 m-4 w-[160px] rounded-lg hover:border-black cursor-pointer" style={styleCard}>
      <h3 className="font-bold">{ name }</h3>
      <img
        className="res-logo rounded-md"
        src={ Constants.RestroCards.meghanaFoods }
        alt="meghana foods"
      />
      <h4 className="font-black text-xs">{ cuisines.join(', ') }</h4>
      <h4 className="text-orange-700"> { avgRating } </h4>

      <h3> Rs. {costForTwo / 100} for two</h3>
      <h4>{minTime}</h4>
    </div>
  );
};

export default RestroCard;
