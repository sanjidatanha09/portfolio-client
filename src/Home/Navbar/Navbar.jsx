import { NavLink } from "react-router-dom";
import cv from "../../../public/front-end.pdf"


const Navbar = () => {
    const navLinks = <>

        <li><NavLink className='text-gray-600 font-bold' to="/">Home</NavLink></li>
        <li><NavLink className='text-gray-600 font-bold' to="/skills">Skills</NavLink></li>
        <li><NavLink className='text-gray-600 font-bold' to="/project">Project</NavLink></li>
        <li><NavLink className='text-gray-600 font-bold' to="/contact">Contact</NavLink></li>
        <li><NavLink className='text-gray-600 font-bold' to="/contact">Contact</NavLink></li>

       

    </>

    return (
        <div>
            <div className="navbar bg-base-500 shadow-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                            
                        </ul>
                    </div>
                    <div className="flex justify-center items-center">
                        <img className="rounded-full h-[30px] w-[30px] lg:h-[50px] lg:w-[50px]" src="https://i.ibb.co/zhNdC1Q/sanimage.jpg" alt="" />
                        <h1 className=" lg:ml-3 lg:font-bold text-gray-600 lg:text-xl">Sanjida Akter</h1>

                    </div>
                    
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a href={cv} download className='text-gray-600 lg:font-bold btn '>Download Resume</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;