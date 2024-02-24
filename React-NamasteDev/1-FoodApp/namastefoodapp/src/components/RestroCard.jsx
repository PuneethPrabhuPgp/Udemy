const styleCard = {
  backgroundColor: "#f0f0f0"
};

const RestroCard = () => {
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/x4uyxvihmg8qa3pddkgf"
        alt="meghana foods"
      />
      <h3>Meghana Foods</h3>
    </div>
  );
};

export default RestroCard;
