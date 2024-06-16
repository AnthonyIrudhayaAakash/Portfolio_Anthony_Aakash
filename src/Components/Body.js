import Profile from "./Profile";
import Project from "./Project";
import Blogs from "./Blogs";
import Contact from "./Contact.js";
import { useState } from "react";
import { blogDetails, projectDetails, contactDetails } from "../../config/data.js"
const Body = () =>{
    const [firstHoverState, setFirstHoverState] = useState(false);
    const [secondHoverState, setSecondHoverState] = useState(false);

    //The following object have "projectDetails" along with "State Variables" and "Event Handlers"
    const projectsWithHandlers = projectDetails.map((project, index) => {
        const hoverState = index === 0 ? firstHoverState : secondHoverState;
        const setHoverState = index === 0 ? setFirstHoverState : setSecondHoverState;

        return {
            ...project,
            hoverState,
            hoverStart: () => setHoverState(true),
            hoverEnd: () => setHoverState(false)
        };
    });
    return (
        <>
        <main className="page-content">
            <Profile/>
            <Project data = {projectsWithHandlers}/>
            <Blogs data={blogDetails}/>
        </main>
        <footer>
            <Contact data={contactDetails}/>
        </footer>
        </>
    )
}

export  default Body;