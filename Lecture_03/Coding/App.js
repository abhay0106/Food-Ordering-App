import React from "react";
import ReactDOM from "react-dom/client";

// Create a Nested header Element using React.createElement (h1,h2,h3,inside div with class title)?

const heading1 = React.createElement(
    'h1',
    {
      id: 'heading1',
      key: 'h1',
    },
    'Heading 1'
  );
  
  const heading2 = React.createElement(
    'h2',
    {
      id: 'heading2',
      key: 'h2',
    },
    'Heading 2'
  );
  
  const heading3 = React.createElement(
    'h3',
    {
      id: 'heading3',
      key: 'h3',
    },
    'Heading 3'
  );
  
  const header = React.createElement(
    'div',
    {
      className: 'title',
    },
    [heading1, heading2, heading3]
  );

//Functional Component
const Title = () => (
    <h1 id="title" key="h1">
        Namaste React
    </h1>
);

//React Element
const title2 = (
    <h1>This is a React Element</h1>
)

//Functional Component
const Header = () => {
    return (
        <div>
            {/* We can also call the functional component as below */}
            {/* {Title()} */}

            {/* Calling the React Element */}
            {title2}


            {/*  Composition of Component(Adding Component inside another component) */}
            {<Title />}

            <h1>Namaste React a functional Component</h1>
            <h2>This is a h2 tag</h2>

        </div>
    );
};

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<Header/>);


// Create Header Component from Scratch using Functional Comp.


const SearchBar = () => {
    return (
      <>
        <input placeholder="Search here" className="search-bar" />
      </>
    );
  };
  
  const HeaderComponent = () => {
    return (
      <div className="container">
        <img
          src="https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.png"
          alt=""
        />
        <SearchBar />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
          alt=""
        />
      </div>
    );
  };
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<HeaderComponent />);
