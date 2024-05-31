import ScrollReveal from "scrollreveal";
import { useEffect } from "react";
import Profile from "./Profile";
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
        
        
            <header>
                <div className="grid grid-rows-2 justify-items-center place-items-center sm:flex justify-between">
                    <div className="title">
                        <h1 className=" text-white font-Montserrat text-4xl font-semibold px-2 py-4 reveal">Portfolio</h1>
                    </div>

                    <nav>
                        <ul className="reveal flex justify-evenly sm:justify-around">
                            <a href=""><li className="nav-item">Project</li></a>
                            <a href=""><li className="nav-item">Blogs</li></a>
                            {/* <a href=""><li className="nav-item">About</li></a> */}
                            <a href=""><li className="nav-item">Contact</li></a>
                        </ul>
                    </nav>
                </div>
                <Profile/>
                {/* <img src="https://res.cloudinary.com/diabo4gpn/image/upload/abrl95vf7jcjxn6oamtw.jpg" width={360} height={1440} className=" rounded-2xl reveal"></img> */}
      
            </header>
            
        

    )
}

export default Header;