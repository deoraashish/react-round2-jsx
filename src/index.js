// Import React and React Dom libraries
import React from 'react';
import ReactDOM from 'react-dom';

// create a react component
const App = () => {
    return <div>Hi there!</div>
}


// Take the react component and show it on the screen
ReactDOM.render(
    <App />, document.querySelector('#root')
);
