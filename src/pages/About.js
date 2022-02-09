import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
    return <div>
        <nav className="shadow-xl relative w-screen bg-white flex items-center justify-between px-4 xl:px-40">
            <Link to="/" className="text-xl md:text-2xl py-3 capitalize font-semibold">Frontend Mentor Solutions</Link>
            <Link to="/about" className="text-2xl tracking-tighter hover:text-red-500 duration-500">Pilton</Link>
        </nav>
        <div className="flex flex-wrap flex-col justify-center my-10 px-4 xl:px-40">
            <div className="">
                <h1 className='text-4xl'>Hello there, I'm <span className='text-red-500'>Pilton Swrang</span> </h1>
                <p className='text-xl'>I like developing frontend 2D websites</p>
            </div>
            <div className="flex-row my-4">
                <h1 className='text-xl'>Contact me at  <a href="mailto:swrangpilton@gmail.com" className='underline'><b>swrangpilton@gmail.com</b></a></h1>
                {/* <button className='bg-blue-500 text-white text-3xl py-2 px-5 rounded-lg'>Hire Me</button> */}
            </div>
        </div>
    </div>;
}
