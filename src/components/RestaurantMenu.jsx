// import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
// import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    
    const {resId} = useParams();
    // Custom Hook
    const resInfo = useRestaurantMenu(resId);


    // useEffect(() => {
    //     fetchMenu();
    // }, []);

    // const fetchMenu = async () => {
    //     const data = await fetch(MENU_API+resId);

    //     const json = await data.json();

    //     console.log(json);
    //     setResInfo(json.data);
    // }

    if(resInfo === null) {
        return <Shimmer/>
    }

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
    console.log(name);
    const {itemCards} = resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
    console.log(itemCards);
  return (
    <div>
        <h1>{name}</h1>
        <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
        <h2>Menu</h2>
        <ul>
            {itemCards.map((item) => (
                <li key={item.card.info.name}>{item.card.info.name} - Rs.{item.card.info.price/100}</li>
            ))}
        </ul>
    </div>
  )
}

export default RestaurantMenu