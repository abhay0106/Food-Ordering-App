import { useState } from 'react';
import { restaurantList } from '../constants'
import RestaurantCard from './RestaurantCard';

function filterData(search,restaurants) {
    
    const filterData = restaurants.filter((restaurant) => 
        restaurant.data.name.includes(search)
    );
    return filterData;
}

const Body = () => {
   const[restaurants,setRestaurants] = useState(restaurantList);
   const[searchInput,setSearchInput] = useState("") // useState returns an array[variable name,function to update the variable]

    return (
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
                    const data = filterData(searchInput,restaurants);
                    console.log(restaurants)
                    setRestaurants(data)
                    console.log(restaurants)
                }}
                >
                    Search
                    </button>
            </div>

            <div className="restaurant-list">
                {restaurants.map((restaurant) => {
                    return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />;
                })}
            </div>
        </>
    );
};

export default Body;