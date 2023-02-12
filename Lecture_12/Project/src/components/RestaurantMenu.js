import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
    // const params = useParams();
    // const {resId}  = params
    const {resId} = useParams()
    const restaurant = useRestaurant(resId);

    const dispatch = useDispatch()

    const addFoodItem = (item) => {
      dispatch(addItem(item))

    };

    return !restaurant ? (
<Shimmer/>
):(
        <div className="flex">
            <div>
                <h1>Restaurant id : {resId}</h1>
                <h2>{restaurant.name}</h2>
                <img src = {IMG_CDN_URL + restaurant.cloudinaryImageId} />
                <h3>{restaurant.area}</h3>
                <h3>{restaurant.city}</h3>
                <h3>{restaurant.costForTwo}</h3>
                <h3>{restaurant.avgRating}</h3>
            </div>

            <div className="p-5">
            <h1>Menu</h1>
        <ul>
          {Object.values(restaurant?.menu?.items).map((item) => (
            <li key={item.id}>{item.name} - <button className="p-1 bg-orange-400" 
            onClick={()=>addFoodItem(item)}
            >
              Add</button></li>
          ))}
        </ul>            </div>
            
        </div>

    )
}

export default RestaurantMenu;