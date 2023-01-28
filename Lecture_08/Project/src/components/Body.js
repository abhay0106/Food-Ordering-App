import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { restaurantList } from '../constants'
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';

function filterData(search,restaurants) {
    
    const filterData = restaurants.filter((restaurant) => 
        restaurant.data.name.toLowerCase().includes(search.toLowerCase())
    );
    return filterData;
}

const Body = () => {
   const[allRestaurants,setAllRestaurants] = useState([]);
   const[filteredRestaurants,setFilteredRestaurants] = useState([]);
   const[searchInput,setSearchInput] = useState("") // useState returns an array[variable name,function to update the variable]
   
   useEffect(() => {
    getRestaurant();
   },[])

   async function getRestaurant(){
     const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
        );

     const json = await data.json();
     setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
     setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
   }

    if(!allRestaurants)return null;

    return allRestaurants.length === 0  ? 
    <Shimmer/>
     : (
        //Conditional Rendering
        //If restaurant is empty -> Show Shimmer UI
        // else show Actual Data of Restaurants

        <>
            <div className='search-btn'>
                <input 
                    type="text"
                    className='input-box' 
                    placeholder='Search...' 
                    value={searchInput}
                    onChange={(e) => {
                        setSearchInput(e.target.value)
                    }}
                    />
                <button 
                className="search-btn"
                onClick={() => {
                    const data = filterData(searchInput,allRestaurants);
                    console.log(filteredRestaurants)
                    setFilteredRestaurants(data)
                }}
                >
                    Search
                    </button>
            </div>

            <div className="restaurant-list">
                {filteredRestaurants.map((restaurant) => {
                    return (
                    <Link to = {"/restaurant/" + restaurant.data.id}
                    key={restaurant.data.id}
                    >
                    <RestaurantCard {...restaurant.data} />
                    </Link>
                    );
                })}
            </div>
        </>
    );
};

export default Body;