import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'

const Head = () => {
  const dispatch = useDispatch()

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
      <div className="col-span-10 text-center">
        <input className="w-1/2 border border-gray-400 p-2 rounded-l-full" 
        type="text"
        />
        <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-200">
        🔍
        </button>
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