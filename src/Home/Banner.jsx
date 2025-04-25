

const Banner = () => {
    return (
        <div className="my-5">
            <div className="flex justify-between items-center bg-base-100 shadow-xl ">
                <div className="flex flex-col w-1/2 px-5">
                    <h2 className="card-title text-gray-500 font-bold">About Me</h2>
                    <p className="text-gray-500 font-bold text-xl">Hello</p>
                    <p className="text-gray-500 font-bold text-xl">I am Sanjida Akter</p>
                    <p className="text-gray-500 font-bold text-xl">Front-End || MERN Developer</p>
                    <p className="text-gray-500 text-lg mt-5">I love to visualize ideas and make them come alive on a website.I like to use various technologies to build exciting projects.I also like designing, so I work on Mock designs and release it online, and also was able to work on some freelance design projects.</p>
                    <div className="card-actions">
                        <button className="btn btn-neutral mt-5">See More</button>
                    </div>
                </div>
                {/* img start here */}
                <div className="w-1/2 rounded-xl p-5">
                    <img className="w-full h-[400px] rounded-2xl" src="https://i.ibb.co/qW3CVQw/san.jpg" alt="Movie" />
                </div>
            </div>
        </div>
    );
};

export default Banner;