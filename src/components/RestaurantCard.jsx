import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({resData}) => {
  
    const {
      cloudinaryImageId,
      name,
      avgRating,
      cuisines,
      costForTwo,
      sla,
    } = resData?.info;

  
    return (
      <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200 h-96">
        <img
          className="res-logo"
          alt="res-logo"
          src={
            CDN_URL +
            cloudinaryImageId
          }
        />
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <p>{cuisines.join(", ")}</p>
        <h4>{avgRating} ★  .{sla.deliveryTime} mins</h4>
        <h4>{costForTwo} </h4>
        <h4></h4>
      </div>
    );
};

export default RestaurantCard;