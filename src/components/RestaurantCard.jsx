import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({resData}) => {
  
    const {
      cloudinaryImageId,
      name,
      avgRating,
      cuisines,
      costForTwo,
      deliveryTime,
    } = resData?.info;
  
    return (
      <div className="res-card">
        <img
          className="res-logo"
          alt="res-logo"
          src={
            CDN_URL +
            cloudinaryImageId
          }
        />
        <h3>{name}</h3>
        <p>{cuisines.join(", ")}</p>
        <h4>{avgRating} ★  .{deliveryTime} min</h4>
        <h4>₹{costForTwo / 100} FOR TWO</h4>
        <h4></h4>
      </div>
    );
};

export default RestaurantCard;