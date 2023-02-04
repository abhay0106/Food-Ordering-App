import React from "react"
import { Outlet } from "react-router-dom"
import Profile from "./ProfileClass"

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
                <p>This is a Namaste React live course Chapter 07 - Finding the Path
                </p>
                <Outlet />
                <Profile name={"First Child"} xyz={"abc"} />
            </div>
        )
    }
}
export default About