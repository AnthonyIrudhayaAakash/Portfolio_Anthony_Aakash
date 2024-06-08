const Project = (props) => {
    const data = props?.data;
    return (
        <>
            <h1 className=" text-white text-3xl font-Montserrat font-semibold px-2 py-4">Project⚙️</h1>
            <div className="grid items-center justify-center md:flex md:justify-between ">
                {
                    data.map((project,index)=>{
                        //Destructuring the object
                        const {project_Section,PROJECT_IMAGE_LINK,PROJECT_REPOSITORY_LINK,hoverStart,hoverEnd,hoverState,project_Name,project_Description_one, project_Description_Two, project_TechStacks} = project;
                        return(
                            <section id={project_Section} key={project_Name}>
                                <a href={PROJECT_REPOSITORY_LINK} target="blank">
                                    <div className="mx-4 my-5 p-5 grid rounded-3xl overflow-hidden cursor-pointer relative"
                                    onMouseOver={hoverStart}
                                    onMouseOut={hoverEnd}>
                                        <div className="flex items-center justify-center rounded-3xl w-[300px] md:w-fit">
                                            <img src={PROJECT_IMAGE_LINK} className={`w-[300px] h-[220px] rounded-3xl md:${hoverState?'transition-all duration-300 scale-110':''} md:w-screen md:h-fit`} alt="Food Delivery App"/>
                                        </div>
                                        <div className={`transition-opacity duration-500 ease-in-out md:w-fit ${hoverState ? 'visible' : 'hidden'}`}>
                                            <p className={`text-primary text-center font-sans absolute bottom-0 left-0 bg-secondary p-4 rounded-3xl `}>
                                            <h2 className=" text-primary text-center font-sans text-lg font-bold py-2">
                                            {project_Name}
                                            </h2>
                                            {project_Description_one} <strong>{project_TechStacks}</strong>{project_Description_Two}
                                            </p>
                                        </div>
                                    </div>
                                </a>
                        </section>
                        )
                    })
                }
           </div>
        </>
    )
}

export default Project;
