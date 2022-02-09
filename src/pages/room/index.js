import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { VscListFlat, VscChromeClose, VscChevronLeft, VscChevronRight } from "react-icons/vsc";
import { data } from './data/data'
import './index.css'

import light from './images/light.jpg'
import dark from './images/dark.jpg'

export default function Index() {
    const [navOpen, setNavOpen] = useState(true);
    const [info, setInfo] = useState([]);
    useEffect(() => {
        setInfo(data)
    }, [])

    const [current, setCurrent] = useState(0);
    const length = info.length;
    console.log(length)

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(info) || info.length <= 0) {
        return null;
    }

    return (
        <main>
            <nav className={`absolute z-50 ${navOpen ? 'text-white' : 'bg-white text-black'} lg:bg-transparent 
            lg:text-white flex flex-wrap flex-row justify-between items-center px-8 w-screen lg:w-2/5 py-5`}>
                <button className="lg:hidden text-2xl"
                    onClick={() => setNavOpen(!navOpen)}>
                    {navOpen ? <VscListFlat /> : <VscChromeClose />}
                </button>
                <div className={`${navOpen ? 'block' : 'hidden'} lg:block mx-auto lg:m-auto`}>
                    <Link to="/room-homepage" className="text-center text-3xl lg:text-4xl font-semibold lg:mr-20">room</Link>
                </div>

                <ul className={`${navOpen ? 'hidden' : 'block'} lg:block`}>
                    <Link to="#!" className="text-lg lg:text-xl mr-10 hover:text-red-500 duration-600">shop</Link>
                    <Link to="#!" className="text-lg lg:text-xl mr-10 hover:text-red-500 duration-600">about</Link>
                    <Link to="#!" className="text-lg lg:text-xl hover:text-red-500 duration-600">contact</Link>
                </ul>
            </nav>

            {/* SLIDER  */}
            {info && info.map((data, index) => {
                return (
                    <div index={index} className={`grid grid-col-1 lg:grid-cols-5 items-end ${index === current ? 'slide active' : 'slide'}`}>
                        {index === current && (
                            <>
                                <div className={`col-span-3 relative`}>
                                    <img className="w-full h-80 lg:h-full" src={process.env.PUBLIC_URL + data.imgURI} alt="hero" />
                                    <div className="block lg:hidden absolute z-50 bottom-0 right-0 bg-black text-white">
                                        <button className="text-2xl py-3 px-4 hover:bg-gray-500 duration-600"
                                            onClick={prevSlide}>
                                            <VscChevronLeft style={{ margin: '0 auto' }} />
                                        </button>
                                        <button className="text-2xl py-3 px-4 hover:bg-gray-500 duration-600"
                                            onClick={nextSlide}>
                                            <VscChevronRight style={{ margin: '0 auto' }} />
                                        </button>
                                    </div>
                                </div>
                                <div className=" lg:mb-0 col-span-2 flex xl:items-center h-full relative">
                                    <div className="my-10 lg:my-8 px-8 lg:px-20">
                                        <h1 className="text-xl xl:text-5xl font-semibold mb-6">
                                            {data.heading}
                                        </h1>
                                        <p className="text-gray-500 text-sm xl:text-base mb-10">
                                            {data.text}
                                        </p>
                                        <Link to="#!" className="text-xl tracking-widest uppercase hover:text-gray-500 duration-600">shop now --> </Link>
                                    </div>
                                    <div className="hidden bg-black lg:block lg:absolute lg:bottom-0  text-white lg:w-2/5">
                                        <button className="w-1/2 text-3xl py-3 xl:py-4 hover:bg-gray-500 duration-600"
                                            onClick={prevSlide}>
                                            <VscChevronLeft style={{ margin: '0 auto' }} />
                                        </button>
                                        <button className="w-1/2 text-3xl py-3 xl:py-4 hover:bg-gray-500 duration-600"
                                            onClick={nextSlide}>
                                            <VscChevronRight style={{ margin: '0 auto' }} />
                                        </button>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                )
            })}

            {/* FOOTER  */}
            <div className="grid grid-cols-1 lg:grid-cols-4 items-center lg:gap-x-5">
                <img className="w-screen h-full" src={dark} alt="" />
                <div className="my-10 lg:my-8 px-8 col-span-2">
                    <h1 className="text-lg lg:text-3xl font-semibold uppercase lg:tracking-widest mb-6 ">About our furniture </h1>
                    <p className="text-gray-500 text-base">
                        Our multinational collection blends design and function to suit your individual
                        taste. Make each room unique, or pick a cohesive theme that besy express your
                        interests and what inspires you. Find furniture pieces you need, from traditional
                        to contemporary styles or anything in between. Products specialists are available to help
                        you create your dream space.
                    </p>
                </div>
                <img className="w-screen h-full" src={light} alt="" />
            </div>
        </main>
    )
}
