

const Education = () => {
    return (
        <div className="mt-16">
            {/* header part */}
            <h1 className=" mb-10 text-4xl font-bold text-center text-gray-600">My Education</h1>
            <div className="mb-10">
                <div className="hero ">
                    <div className="hero-content flex-col lg:flex-row-reverse ">
                        <div className="md:w-full lg:w-1/2">
                            <img src="https://i.ibb.co/ZGcV3qy/AF1-Qip-Nc-FEKFTBXEa-Ugtt-D2zglw8-NEGk-Ot-Qrt6-Bb-UXy-O-w768-h768-n-o-v1.jpg" className="w-full mx-auto  rounded-lg shadow-2xl h-[360px] " />
                        </div>
                        <div className="lg:w-1/2">
                            <h1 className=" font-bold text-gray-600">2020-Present</h1>
                            <p className=" font-bold text-gray-600">BSC in CSE</p>
                            <p className=" font-bold text-gray-600">Manarat International University</p>
                            <p className="py-4 pr-3 lg:text-base text-gray-500">Manarat International University (MIU) is one of the few private universities of Bangladesh, which had built its own premises at the time of receiving the Charter from the Government. Manarat Trust is the founder of MIU. A cherished dream to establish a university had been in the bosom of every Manarat Trust member.</p>
                            <button className="btn btn-neutral">See More</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="hero ">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className="md:w-full lg:w-1/2">
                            <img src="https://i.ibb.co/54jMkQ8/16655777081.jpg" className="w-full mx-auto  rounded-lg shadow-2xl h-[360px] " />
                        </div>
                        <div className="lg:w-1/2 text-right">
                            <h1 className=" font-bold text-gray-600">2017-2019</h1>
                            <p className=" font-bold text-gray-600">Higher Secondary Certificate</p>
                            <p className=" font-bold text-gray-600">Bepza Public school & College</p>
                            <p className="py-4 pl-3 lg:text-base text-gray-500">BEPZA Public School and College started on 15'th December in1999. This institution started up with the favour of the sixth executive chairman of Bangladesh Export Processing Zone Authority during his tenure (from 29-6-1998 to 26-12-2001).
                                At first the activities of the school ran with 9 teachers and staff whose first principal was Prof. Gopal Chandra Barua.
                                Afterwards, the authority of Bangladesh Export Processing Zone allotted 2.75 acres for the school from their acquired 296 acres of land on 29 March 2000 in the 8oth meeting of the governing board..</p>
                            <button className="btn btn-neutral">See More</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-10">
                <div className="hero ">
                    <div className="hero-content flex-col lg:flex-row-reverse ">
                        <div className="md:w-full lg:w-1/2">
                            <img src="https://gchsc.edu.bd/wp-content/uploads/2021/01/banner-2-2.jpg" className="w-full mx-auto  rounded-lg shadow-2xl h-[360px] " />
                        </div>
                        <div className="lg:w-1/2">
                            <h1 className=" font-bold text-gray-600">2015-2017</h1>
                            <p className=" font-bold text-gray-600">secondary school certificate</p>
                            <p className=" font-bold text-gray-600">Gazichat a.am High School</p>
                            <p className="py-4 pr-3 lg:text-base text-gray-500">Gazirchat A.m. High School And College is located at Gazirchat Savar Dhaka. Its EIIN is 108416 and phone no. is 01972108416.It operates on Day shift(s).Its management is Managing .Its recognitio is Recognized by the government and the recognition level is Secondary.</p>
                            <button className="btn btn-neutral">See More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;