import React,{lazy,Suspense, useState} from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import Body from './components/Body';
import Footer from "./components/Footer";
import Error from "./components/Error";
import Contact from "./components/Contact";
import About from "./components/About";
import Shimmer from "./components/Shimmer";
import { createBrowserRouter,RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile"; 
import UserContext from "./utils/UserContext";
// import Instamart from "./components/Instamart";

const Instamart = lazy(() => import("./components/Instamart"));

const AppLayout = () => {
    const [user,setUser] = useState({
        name:"Abhay Kochhar",
        email:"abhay@gmail.com"
    })

    return (
        <UserContext.Provider 
        value={{
            user:user,
            setUser:setUser
        }}>
            <Header />
            <Outlet/>
            <Footer />
        </UserContext.Provider>

    )

}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement:<Error/>,
        children:[
        {
            path:"/about",
            element:<About/>,
            children:[
                {
                    path:"profile",
                    element:<Profile/>,
                },
            ],
        },
        {
            path:"/",
            element:<Body/>
        },
        {
            path:"/contact",
            element:<Contact/>
        },
        {
            path:"/restaurant/:resId",
            element:<RestaurantMenu/>
        },
        {
            path:"/instamart",
            element:(
            <Suspense fallback={<Shimmer/>}>
                <Instamart/>
            </Suspense>
            ),
        }
        ]
    },

])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

