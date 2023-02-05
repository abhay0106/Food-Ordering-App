import { createContext } from "react";

const UserContext = createContext({
    user:{
        name:"Dummy Name",
        email : "abc@gmail.com",
    },
});

export default UserContext;