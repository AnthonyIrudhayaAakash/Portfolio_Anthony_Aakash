import Profile from "./Profile";
import Project from "./Project";
import Blogs from "./Blogs";
import { useState } from "react";
import projectDetails from "../../config/data";
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
            <Project data = {projectsWithHandlers} key={projectsWithHandlers?.project_Name}/>
            <Blogs/>
        </main>
        </>
    )
}

export  default Body;