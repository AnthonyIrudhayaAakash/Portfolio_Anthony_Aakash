const Profile = () => {
    return (
        <div className="grid grid-rows-2 mt-3 md:grid-cols-2 md:grid-rows-none">
            <div className="flex flex-wrap justify-center place-content-center mx-4">
                <h1 className="font-bold font-Montserrat text-lg text-white animate-bounce sm:text-2xl ">
                    Hello, I'm Anthony Irudhaya Aakash A
                </h1>
                <p className="font-Montserrat text-lg text-secondary text-center pt-2">
                    I am an Electronics and Communication Engineering student with a keen interest in the IT sector. Specializing in web development, I strive to combine my technical knowledge with a passion for creating dynamic and responsive web applications.
                </p>
                <button className=" mt-3 text-lg bg-secondary px-4 py-2 rounded-lg transition-transform duration-150 ease-in-out hover:scale-110"><a href="https://drive.google.com/uc?export=download&id=1yJqqMHPXpWPxdoUKihDPB2zPaQvlrTIn" download="Anthony Irudhaya Aakash - Resume.pdf" aria-label="Download Resume">DownLoad resume</a></button>
            </div>
            <div className="flex justify-center place-content-center my-4">
                <img
                    src="https://res.cloudinary.com/diabo4gpn/image/upload/abrl95vf7jcjxn6oamtw.jpg"
                    className="cursor-pointer w-[250px] h-[360px] rounded-2xl transition-transform duration-300 ease-in-out hover:scale-110 sm:w-[360px] sm:h-[480px]"
                    alt="Profile Image"
                />
            </div>
        </div>
    );
};

export default Profile;
