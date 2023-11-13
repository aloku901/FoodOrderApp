import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  // Custom Hook
  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  // useEffect(() => {
  //     fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //     const data = await fetch(MENU_API+resId);

  //     const json = await data.json();

  //     console.log(json);
  //     setResInfo(json.data);
  // }

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const categories =
    resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl my-6 ">{name}</h1>
      <p className="text-lg font-bold">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index === showIndex && true}
          setShowIndex = {() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
