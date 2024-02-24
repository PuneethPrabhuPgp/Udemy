const styleCard = {
  backgroundColor: "#f0f0f0"
};

const RestroCard = ({ resData }) => {
  const { name, cuisines, avgRating, costForTwo, minTime } = resData;
  return (
    <div className="res-card" style={styleCard}>
      <h3>{ name }</h3>
      <img
        className="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/x4uyxvihmg8qa3pddkgf"
        alt="meghana foods"
      />
      <h4>{ cuisines.join(', ') }</h4>
      <h4> { avgRating } </h4>

      <h3> Rs. {costForTwo / 100} for two</h3>
      <h4>{minTime}</h4>
    </div>
  );
};

export default RestroCard;
