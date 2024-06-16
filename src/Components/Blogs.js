import { useState, useEffect } from "react";
import ScrollReveal from "scrollreveal";

const Blogs = (props) => {

    const [show_Button_Status, set_Show_button_Status] = useState(false);

    const [show_Button_Text, set_Show_button_Text] = useState("Show More");

    //TO handle event of "Show More" button in smaller screen 
    const showButtonHandler = () =>{

        set_Show_button_Status(!show_Button_Status);

        show_Button_Status ?  set_Show_button_Text("Show More")  : set_Show_button_Text("Show Less")

    }

    useEffect(() => {
        const revealConfigs = [
            { selector: ".reveal-top", origin: "top" },
            
        ];

        revealConfigs.forEach(config => {
            ScrollReveal()?.reveal(config.selector, {
                distance: '50px',
                duration: 1000,
                easing: 'ease-in-out',
                origin: config?.origin
            });
        });
    }, []);



    const data = props?.data;

    return(
        <>
        <h1 className="blog-section-header">Blogs📝</h1>

        <div className=" grid grid-cols-1 grid-rows-1 md:grid-cols-2 items-center justify-center">

            <section id = "blog-cards">
                <div className={`reveal-top grid  grid-cols-1 ${show_Button_Status ? 'grid-rows-4' : 'grid-rows-2'} md:grid-cols-2 md:grid-rows-2`}>
                    {
                        data?.map((blog_info,index)=>{

                            //Depends on the display property the blogs displayed in smaller screens
                            const {blog_Title, blog_Description, blog_Link, display_Property} = blog_info;

                            return(
                                //Depends on the button status the last two blogs will be diplayed in small screen , but in larger screen all blogs displayed without any constraints
                                <div className={`${show_Button_Status && display_Property==='hidden'?'grid':display_Property} md:grid md:items-center md:justify-center bg-secondary mx-3 my-2 px-4 py-2 rounded-2xl`}  key={blog_Title}>
                                    <div>
                                        <h2 className="blog-title py-1">{blog_Title}</h2>
                                        <p>{blog_Description}</p>
                                    </div>
                
                                    <div className="cursor-pointer grid place-items-center font-sans font-semibold">
                                        <a href={blog_Link} target="_blank" className="blog-links">Read</a>
                                    </div>
                                </div>

                            )
                        })
                    }
                </div>
            </section>


            {/* the following button is hidden in larger screen ,because every blog is displayed , but in smaller screen initially only two blogs is displayed */}
            {/* <section id = "blog-button">
               
            </section> */}
            <section id="blog-image-button">
                <div className=" flex justify-center md:hidden">
                    <button className={`text-center w-fit px-6 py-2 mt-2 rounded-xl ${show_Button_Status?'bg-primary font-semibold text-secondary border-4 border-secondary' :'bg-secondary text-primary'}  transition-all duration-150 ease-in-out hover:scale-110`} onClick={showButtonHandler}>{show_Button_Text}</button>

                </div>
                <div className="reveal-top">
                    {/* the image is hidden in smaller screen */}
                    <div className=" hidden md:flex md:items-center md:justify-center md:rounded-3xl  md:mx-3 md:w-fit">
                        <img src="https://res.cloudinary.com/diabo4gpn/image/upload/f_auto,q_auto/Blog_co7vg4" className={`w-[300px] h-[220px] rounded-3xl  md:w-screen md:h-fit`} alt="Blog_Image"/>
                    </div>
                </div>
            </section>


        </div>

        </>
    )

}

export default Blogs;