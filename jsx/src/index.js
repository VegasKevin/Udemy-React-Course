//Import the React and ReactDOM Libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a React Component
const App = function () {
    const buttonName = "Click Me!"
    return (

        <div>
            <label className ="label" htmlFor = "name">
                Enter Name:
            </label>
            <input id="name" type="text" />
            <button style= { { backgroundColor: 'blue', color: 'white' } }>
            {buttonName}
            </button>  


        </div>
    );
};

// Take the react component and shot it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);