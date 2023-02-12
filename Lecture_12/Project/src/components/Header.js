import {  useState,useContext } from 'react';
import { useSelector } from 'react-redux';
import {Link} from "react-router-dom";
import useOnline from "../utils/useOnline"
import UserContext from '../utils/UserContext';

const loggedInUser = () => {
  // API call to check authentication
  return false;
};

const Title = () => (
  <a href="/">
    <img
      className="h-28 p-2"
      alt="logo"
      src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
    />
  </a>
);

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isOnline = useOnline();

  const {user} = useContext(UserContext);

  const cartItems = useSelector(store => store.cart.items)
  console.log(cartItems)

  return (
    <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-blue-50 md:bg-yellow-500">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About</Link>
          </li>

          <li className="px-2">
            <Link to = "/contact">Contact</Link>
            </li>
          <li className="px-2">
            <Link to = "/instamart">Instamart</Link> 
          </li>

          <li className="px-2">  
            <Link to = "/cart">Cart {cartItems.length} Items</Link> 
          </li>
        </ul>
      </div>
      <span className="p-10 text-bold text-red-800">{user.name}</span>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;