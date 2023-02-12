import React from "react"
import { Outlet } from "react-router-dom"
import Profile from "./ProfileClass"
import { Component } from "react";
import UserContext from "../utils/UserContext";

// const About2 = () => {

//     return (
//         <div>
//             <h1>About Us Page</h1>
//             <p>This is a Namaste React live course Chapter 07 - Finding the Path
//             </p>
//             <Outlet />

//             <Profile name={"Abhay"} xyz={"abc"} />
//         </div>

//     )
// }

class About extends React.Component {
    constructor(props) {
        super(props);
        console.log("Parent - Constructor")
    }

    componentDidMount(){
        console.log("Parent - componentDidMount")
    }

    render() {
        console.log("Parent - render")
        return (
            <div>
                <h1>About Us Page</h1>
                <UserContext.Consumer>
                    {({user}) => (
                        <h4 className="font-bold text-2xl p-10">
                            {user.name} - {user.email}
                        </h4>
                    )}
                </UserContext.Consumer>
                <p>This is a Namaste React live course Chapter 07 - Finding the Path
                </p>
                <Outlet />
                <Profile name={"First Child"} xyz={"abc"} />
            </div>
        )
    }
}
export default About