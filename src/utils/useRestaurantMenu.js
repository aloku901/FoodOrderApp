import React, { useEffect, useState } from "react";
import { MENU_API } from "../utils/constant";


function useRestaurantMenu(resId) {
    const [resinfo, setResinfo] = useState(null);

    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        console.log(json);
        setResinfo(json.data); 
    }

    return resinfo;
}

export default useRestaurantMenu;
