export function filterData(search,restaurants) {
    
    const filterData = restaurants.filter((restaurant) => 
        restaurant.data.name.toLowerCase().includes(search.toLowerCase())
    );
    return filterData;
}