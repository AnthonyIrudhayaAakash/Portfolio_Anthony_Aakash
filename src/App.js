import React from "react";
import ReactDOM from "react-dom";
// import ScrollReveal from "scrollreveal";
import Header from "./Components/Header";
// import { useEffect } from "react";

console.log(document.getElementsByClassName("container")[0])

const root = ReactDOM.createRoot(document.querySelector(".root_Container"));


const App = () =>{




    return(
        <div className="Master_Container">
        <Header/>
        </div>
    )
}
root.render(<App/>);