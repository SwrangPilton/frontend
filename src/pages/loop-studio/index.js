import { useState, useEffect } from 'react'
import { data } from './data'
import { Link } from 'react-router-dom'
import { VscListFlat, VscChromeClose } from "react-icons/vsc";
import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";

import hero from './images/hero.jpg'
import interactive from './images/interactive.jpg'

export default function Index() {
    const [navOpen, setNavOpen] = useState(false);
    const [isScrollable, setIsScrollable] = useState(false);

    const toggleNav = () => {
        setNavOpen(!navOpen)
        setIsScrollable(!isScrollable)
    }
    const closeNav = () => { setNavOpen(false) }

    useEffect(() => {
        document.body.classList.toggle('body-fixed', isScrollable);
    }, [isScrollable])
    return (
        <section id='loop_studios'>
            {/* //! NAVBAR */}
            <nav className="absolute w-screen xl:h-full text-white" >
                <div className="py-5 xl:py-10 px-6 xl:px-48">
                    <nav className="flex justify-between items-center">
                        <a href="#!" className="text-3xl font-bold">loopstudios</a>
                        <button className={`z-50 xl:hidden text-2xl`}
                            onClick={toggleNav}>
                            {navOpen ? <VscChromeClose /> : <VscListFlat />}
                        </button>
                        <div className={`absolute z-40 bg-black w-screen h-screen top-0 left-0 ${navOpen ? 'block' : 'hidden'} `}>
                            <div className="py-5 xl:py-10 px-6 xl:px-48 flex flex-col">
                                <h1 className="text-3xl font-bold mb-32">loopstudios</h1>
                                <Link to="#!" onClick={closeNav} className="text-lg pb-2 ">About</Link>
                                <Link to="#!" onClick={closeNav} className="text-lg pb-2 ">Careers</Link>
                                <Link to="#!" onClick={closeNav} className="text-lg pb-2 ">Events</Link>
                                <Link to="#!" onClick={closeNav} className="text-lg pb-2 ">Products</Link>
                                <Link to="#!" onClick={closeNav} className="text-lg pb-2 ">Support</Link>
                            </div>
                        </div>
                        <div className={`hidden xl:block ${navOpen ? 'bg-black text-white block' : 'hidden'}`}>
                            <Link to="#!" onClick={closeNav} className="text-lg pb-2 lg:mr-4 border-b-2 border-transparent hover:border-white">About</Link>
                            <Link to="#!" onClick={closeNav} className="text-lg pb-2 lg:mr-4 border-b-2 border-transparent hover:border-white">Careers</Link>
                            <Link to="#!" onClick={closeNav} className="text-lg pb-2 lg:mr-4 border-b-2 border-transparent hover:border-white">Events</Link>
                            <Link to="#!" onClick={closeNav} className="text-lg pb-2 lg:mr-4 border-b-2 border-transparent hover:border-white">Products</Link>
                            <Link to="#!" onClick={closeNav} className="text-lg pb-2 lg:mr-4 border-b-2 border-transparent hover:border-white">Support</Link>
                        </div>
                    </nav>

                    <div className="mt-12 xl:mt-32">
                        <h1 className="text-3xl xl:text-6xl py-6 xl:py-12 px-5 xl:px-6 font-thin border-2 border-white lg:w-1/2 uppercase tracking-wider">
                            IMMERSIVE EXPERIENCES <br /> THAT DELIVER
                        </h1>
                    </div>
                </div>
            </nav>

            <img className="w-screen h-full xl:h-auto" src={hero} alt="" style={{ minHeight: '340px' }} />

            <div className="py-5 xl:py-10 px-6 xl:px-48 grid grid-cols-1 xl:grid-cols-5 items-end">
                <div className="col-span-3">
                    <img className="w-screen h-full" src={interactive} alt="" />
                </div>
                <div className="col-span-2 px-4 xl:px-12 xl:py-16 shadow-xl text-center relative xl:right-36 xl:top-16 bg-white">
                    <h1 className="uppercase text-2xl xl:text-4xl mt-8 xl:mt-0 text-center mb-6">
                        the leader in interactive vr</h1>
                    <p className="text-sm lg:text-lg text-gray-600 text-center px-6 xl:px-0 mb-10 xl:mb-0">
                        Founded in 2011, Loopstudios has
                        been producing world-className virtual reality projects for some of the best companies around the globe. Our
                        award-winning creations have transformed business through digital experience that bind to their brand .
                    </p>
                </div>
            </div>

            <div className="flex justify-center xl:justify-between items-end mt-12 xl:mt-24 mb-0 py-5 xl:py-10 px-6 xl:px-48">
                <h1 className="text-3xl xl:text-4xl uppercase">our creations</h1>
                <button className="hidden xl:block uppercase border-2 border-black
                    py-1 px-4 text-lg hover:bg-black hover:text-white">
                    see all</button>
            </div>

            {/* //! CONTENT   */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-8 py-5 xl:pb-10 px-6 xl:px-48">
                {data.map((data, index) => {
                    return (
                        <div key={index} index={index} className="relative rounded-sm shadow-md     ">
                            <a href="#!" className="transform hover:transform-x-2">
                                <img className="w-full rounded-sm  filter hover:blur-sm duration-400" src={process.env.PUBLIC_URL + data.imgURL} alt="" style={{ height: '350px' }} />
                                <div className="absolute bottom-10 left-10">
                                    <h1 className="uppercase font-light text-xl xl:w-1/2 xl:text-3xl w-100 text-white">{data.heading}</h1>
                                </div>
                            </a>
                        </div>
                    )
                })}
            </div>

            <div className="xl:hidden flex justify-center py-5 xl:py-10 px-6 xl:px-48">
                <button className="uppercase border-2 border-black py-1 px-4 text-lg">see all</button>
            </div>

            {/* //! FOOTER   */}
            <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 place-content-end items-end py-5 xl:py-10 px-6 xl:px-48 bg-black text-white">
                <div className="mt-6 mb-4 lg:mb-0">
                    <h1 className="text-4xl font-extrabold text-center lg:text-left mb-10 lg:mb-6">loopstudios</h1>
                    <div className="flex flex-col lg:flex-row text-center justify-between mt-6 font-semibold">
                        <a href="#!" className="hover:text-red-400 mb-4 lg:mb-0 text-lg">About</a>
                        <a href="#!" className="hover:text-red-400 mb-4 lg:mb-0 text-lg">Careers</a>
                        <a href="#!" className="hover:text-red-400 mb-4 lg:mb-0 text-lg">Events</a>
                        <a href="#!" className="hover:text-red-400 mb-4 lg:mb-0 text-lg">Products</a>
                        <a href="#!" className="hover:text-red-400 mb-4 lg:mb-0 text-lg">Supports</a>
                    </div>
                </div>
                <div className="">
                    <div className="flex w-2/4 mx-auto lg:mr-0 justify-between mb-6 text-4xl cursor-pointer">
                        <AiFillFacebook className="hover:bg-blue-500" />
                        <AiFillTwitterCircle className="hover:bg-blue-400" />
                        <AiFillYoutube className="hover:bg-red-500" />
                        <AiFillInstagram className="hover:bg-red-600" />
                    </div>
                    <h1 className="text-md lg:text-lg text-center lg:text-right mb-6 lg:mb-0">&copy; 2021 Loopstudios. All rights
                        reserved.</h1>
                </div>
            </div>
        </section>
    )
}
