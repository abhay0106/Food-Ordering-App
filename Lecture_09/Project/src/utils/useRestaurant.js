import { useState,useEffect } from "react";
import { FETCH_MENU_URL } from "../constants";

const useRestaurant = (resId) => {
    const [restaurant,setRestaurant] = useState(null)
    
    useEffect(() =>{
        getRestaurants();
    },[])

    //API call

    async function getRestaurants(){
        const data = await fetch(FETCH_MENU_URL + resId)
        const json = await data.json();
        console.log(json.data);
        setRestaurant(json.data);
    }

    //return data
      return restaurant;
}

export default useRestaurant;