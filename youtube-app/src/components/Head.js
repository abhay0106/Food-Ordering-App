import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import { cacheResults } from '../utils/searchSlice';
import { YOUTUBE_SEARCH_API } from '../utils/utils';

const Head = () => {
  const [searchQuery,setSearchQuery] = useState("");
  const [suggestios,setSuggestions] = useState([]);
  const [showSuggestions,setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search)
  const dispatch = useDispatch()
  
  useEffect(() =>{
    //API call
    
    const timer = setTimeout(()=> {
      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery]);
      }
      else{
        getSearchSuggestions();
      }
    },200);

    return () => {
      clearTimeout(timer);
    };

  },[searchQuery])

  const getSearchSuggestions = async () => {
    console.log(searchQuery)
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery)
    const json = await data.json();
    setSuggestions(json[1])
    console.log(json[1]);

    //update cache
    dispatch(
      cacheResults({
        [searchQuery]:json[1]
      })
    );
  }; 

  const toggleHandler = () => {
    dispatch(toggleMenu())
  }

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow">
      <div className="flex col-span-1 cursor-pointer">   
        <img
            onClick={() => toggleHandler()}
            className="h-12"
            alt="menu"
            src="https://static.vecteezy.com/system/resources/thumbnails/002/292/406/small/hamburger-menu-line-icon-free-vector.jpg"
        />
        <a href='/'>
        <img
            className="h-12"
            alt="youtube-logo"
            src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"/>
        </a>
    </div>
      <div className="col-span-10 px-10">
        <div>
          <input className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full" 
          type="text"
          value = {searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
          />

          <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-200">
          🔍
          </button>
        </div>

        {showSuggestions && (
        <div className="fixed bg-white px-2 py-2 w-[30rem] shadow-lg rounded-lg border border-gray-100">
          <ul>
            {suggestios.map(s =>
              <li 
                key={s}
                className="py-2 px-3 shadow-sm hover:bg-gray-100">🔍 {s}</li>
              )}
            
          </ul>
        </div>
        )}
      </div>
      
      <div className="col-span-1">
        <img
            className="h-8"
            alt="user-icon"
            src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  )
}

export default Head