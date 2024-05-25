import React from "react";
import ReactDOM from "react-dom";

const root = ReactDOM.createRoot(document.getElementById("container"));


const App = () =>{


    return(
        <div>
            <h1>I'm React</h1>
        </div>
    )
}
root.render(<App/>);