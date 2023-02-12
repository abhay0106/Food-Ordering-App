import React from "react";

class Profile extends React.Component{
    constructor(props){
        super(props);
        
        //Create State
        this.state={
            userInfo:{
                name:"Dummy Name",
                location:"Dummy Location"
            }
        }
        console.log("Child - constructor" + this.props.name)
    }

    async componentDidMount(){
        //API Call

        const data = await fetch("https://api.github.com/users/abhay0106");
        const json = await data.json();
        console.log(json)
        this.setState({
            userInfo:json,
        });
        console.log("Child - componentDidMount" + this.props.name)        
    }
    
    componentDidUpdate(){
        console.log("ComponentDidUpdate")
    }

    componentWillUnmount(){
        console.log("Component Will Unmount")
    }

    render(){
        console.log("Child - render" + this.props.name)
        return(
            <div>
            <h1>Profile Class Component</h1>
            <img src = {this.state.userInfo.avatar_url}/>
            <h2>Name : {this.state.userInfo.name}</h2>
            <h3>Location : {this.state.userInfo.location}</h3>
            </div>
        )
        
    }
}

export default Profile;


/**
 * Parent Constructor 
 * Parent render
 * Child Constructor
 * Child Render
 * Parent componentDidMount()
 *  
 * API CALL -> JSON data
 * Child componentDidMount() 
 */

/**
 * Child Constructor
 * Child Render
 * Child componentDidMount() 
 * API call
 * Set state
 * 
 * <UPDATING CYCLES>
 * Child Render
 * ComponentDidUpdate()
 */