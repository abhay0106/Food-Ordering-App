import React from "react";
import ReactDOM  from "react-dom/client";

//Functional Component
const Title = () => (
    <h1 id = "title" key="h1">
        Namaste React
    </h1>
);

//React Element
const Title2 =(
    <h1>This is a React Element</h1>
)

//Functional Component
const HeaderComponent = () => {
    return(
        <div>
            {/* We can also call the functional component as below */}
            {/* {Title()} */}

            {/* Calling the React Element */}
            {Title2}

            
            {/*  Composition of Component(Adding Component inside another component) */}
            {<Title/>}
            
            <h1>Namaste React a functional Component</h1>
            <h2>This is a h2 tag</h2>

        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent/>);