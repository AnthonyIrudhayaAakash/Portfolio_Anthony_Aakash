import ScrollReveal from "scrollreveal";
import { useEffect } from "react";
import Body from "./Body";
const Header = () => {
    useEffect(()=>{

        ScrollReveal()?.reveal(".reveal",{
            distance: '50px',
            duration: 1000,
            easing: 'ease-in-out',
            origin: 'bottom',
        })

    },[])


    return(
        <>
        <header className="title-nav-links">
                <div className="grid grid-rows-2 items-center justify-center place-items-center sm:flex sm:justify-between">
                    
                    <div className="title">
                        <h1 className=" text-white font-Montserrat text-4xl font-semibold px-2 py-4 reveal">Portfolio</h1>
                    </div>

                    <nav className="nav-links">
                        <ul className="reveal flex justify-evenly sm:justify-around">
                            {/*Redirected to Project Section of Page */}
                            <a href="#first-project"><li className="nav-item">Project</li></a>
                            <a href=""><li className="nav-item">Blogs</li></a>
                            <a href=""><li className="nav-item">Contact</li></a>
                        </ul>
                    </nav>

                </div>
        </header>
        <Body/>
        </>
        
        
            
            
        

    )
}

export default Header;