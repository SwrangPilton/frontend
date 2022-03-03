import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import { AiOutlineMail, AiFillGithub } from "react-icons/ai";


export default function About() {
    return <div id='about'>
        <nav className="shadow-xl relative w-screen bg-white flex items-center justify-between px-4 xl:px-40">
            <Link to="/" className="text-xl md:text-2xl py-3 capitalize font-semibold">Frontend Mentor Solutions</Link>
            <Link to="/about" className="text-2xl tracking-tighter hover:text-red-500 duration-500 name">Pilton</Link>
        </nav>
        <div className="flex flex-wrap flex-col justify-center my-10 px-4 xl:px-40">
            <div className="name">
                <h1 className='text-3xl'>Hello there, <br /> I'm <span className=' text-red-500 text-4xl lg:text-6xl'>Pilton Swrang</span> </h1>
                <p className='text-xl my-3 about-text'>I like developing frontend 2D websites</p>
            </div>
            <h1 className='text-xl my-3'>Contact me at </h1>
            <div className="flex flex-wrap flex-row items-center mb-3">
                <AiOutlineMail className='text-xl lg:text-2xl' />
                <a href="mailto:swrangpilton@gmail.com" className='underline text-xl lg:text-2xl ml-4 mb-2'><b>swrangpilton@gmail.com</b></a>
            </div>
            <div className="flex flex-wrap flex-row items-center mb-3">
                <AiFillGithub className='text-xl lg:text-2xl' />
                <a href="https://github.com/SwrangPilton" target="_blank" className='underline text-xl lg:text-2xl ml-4 mb-2' rel="noreferrer"><b>Github Account</b></a>
            </div>
        </div>
    </div>;
}
