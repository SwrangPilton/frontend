import { useState } from 'react'
import './index.css'
import header from './images/header.jpg'
import egg from './images/egg.jpg'
import stand from './images/stand.jpg'
import fruit from './images/fruit.jpg'
import orange from './images/orange.jpg'
import avatar1 from './images/image-emily.jpg'
import avatar2 from './images/image-jennie.jpg'
import avatar3 from './images/image-thomas.jpg'
import bottle from './images/bottle.jpg'
import orange2 from './images/orange2.jpg'
import cone from './images/cone.jpg'
import cubes from './images/cubes.jpg'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Index() {
    const [nav, showNav] = useState(false);
    const toggleNav = () => showNav(!nav)
    const closeNav = () => showNav(false)

    return (
        <section id="sunny_landing">
            {/* //! NAVBAR */}
            <div className="relative text-white">
                <div className="flex absolute w-full justify-between items-center py-4 px-6 lg:px-20">
                    <h1 className="text-2xl xl:text-4xl font-bold">sunnyside</h1>
                    <div className="block xl:hidden">
                        {!nav ? (<AiOutlineMenu onClick={toggleNav} className='text-2xl font-semibold' />) :
                            (<AiOutlineClose onClick={toggleNav} className='text-2xl font-semibold' />)}
                    </div>
                    <div className="w-1/4 hidden xl:block">
                        <div className="flex justify-around items-center ">
                            <a href="#!" onClick={closeNav} className="text-lg font-semibold hover:text-red-300">About</a>
                            <a href="#!" onClick={closeNav} className="text-lg font-semibold hover:text-red-300">Services</a>
                            <a href="#!" onClick={closeNav} className="text-lg font-semibold hover:text-red-300">Projects</a>
                            <a href="#!" onClick={closeNav} className="text-lg py-2 px-4 rounded-full border 
                    bg-gray-50 hover:bg-gray-200 text-black">Contact</a>
                        </div>
                    </div>
                </div>

                {nav && (
                    <div className="flex rounded-2xl py-4 z-50 xl:hiden mt-20 right-0 left-0 mx-auto flex-col absolute w-80 bg-gray-100 text-center text-gray-600">
                        <a href="#!" onClick={closeNav} className="my-2">About</a>
                        <a href="#!" onClick={closeNav} className="my-2">Services</a>
                        <a href="#!" onClick={closeNav} className="my-2">Projects</a>
                        <a href="#!"
                            onClick={closeNav} className="text-lg w-1/2 mx-auto py-2 px-4 rounded-full border my-2 bg-yellow-400 hover:bg-yellow-300 text-black">Contact</a>
                    </div>
                )}

                <div className="absolute top-1/2 left-1/2 bottom-24 transform -translate-x-1/2 -translate-y-1/2">
                    <h1 className="text-lg xl:text-6xl font-bold uppercase xl:tracking-widest">We are creatives</h1>
                </div>
                <img src={header} alt="" />
            </div>

            {/* //! CONTENT */}
            <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center">
                <div className="px-10 py-6 xl:py-0 xl:px-20 xl:w-3/4 order-2 lg:order-1">
                    <h1 className="text-2xl xl:text-5xl font-bold">Transform your brand</h1>
                    <p className="my-5 text-lg font-semibold">
                        We are a full-service creative agency specializing in helping brands grow faster. Engage your clients
                        through compelling visuals that do most of the marketing for you.
                    </p>
                    <a className="uppercase text-xl font-bold hover:text-gray-400 hover:underline" href="#!">Learn more</a>

                </div>
                <div className="order-1 lg:order-2 ">
                    <img className="w-full h-full" src={egg} alt="" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center">
                <div className='order-2 lg:order-1'>
                    <img className="w-full h-full" src={stand} alt="" />
                </div>
                <div className="py-6 xl:py-0 px-10 xl:px-20 xl:w-3/4 order-2 lg:order-1 ">
                    <h1 className="text-2xl xl:text-5xl font-bold">Stand out to the right audience</h1>
                    <p className="my-5 text-lg font-semibold">
                        Using collaboration formula of designers , researchers , photographers, bideographers, and copywriters ,
                        we'll build and expand your brand in digital platform.
                    </p>
                    <a className="uppercase text-xl font-bold hover:text-gray-400 hover:underline" href="#!">Learn more</a>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center">
                <div className="relative">
                    <img className="w-full h-full" src={fruit} alt="" />
                    <div
                        className="flex flex-col absolute lg:w-7/12 bottom-0 xl:left-44 text-center px-4 xl:px-0 mb-4 xl:mb-16">
                        <h1 className="capitalize text-2xl xl:text-4xl mb-4 xl:mb-8 font-bold">Graphic design</h1>
                        <p className="text-sm font-semibold xl:text-xl">Great design makes you memorable.We deliver artwork that
                            underscores your brand message and captures potential client's message.
                        </p>
                    </div>
                </div>
                <div className="relative">
                    <img className="w-full h-full" src={orange} alt="" />
                    <div
                        className="flex flex-col absolute lg:w-7/12 bottom-0 xl:left-52 text-center px-4 xl:px-0 mb-4 xl:mb-16">
                        <h1 className="capitalize text-2xl xl:text-4xl mb-4 xl:mb-8 font-bold">Graphic design</h1>
                        <p className="text-sm font-semibold xl:text-xl">Increase your credibility by getting the most stunning and the high quality photos that improve your business image.
                        </p>
                    </div>
                </div>

            </div>

            {/* //! TESTIMONIALS  */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-center px-10 xl:px-24">
                <h1 className="col-span-1 md:col-span-3 uppercase font-bold text-2xl xl:text-4xl mt-10 xl:mt-20 mb-8 xl:mb-16">client testimonials</h1>

                <div className='shadow-xl'>
                    <div className="p-5">
                        <img className="mx-auto rounded-full h-24 w-24" src={avatar1} alt="" />
                        <p className="my-8 text-lg font-semibold ">
                            We put our trust in Sunnyside and the delivered, making sure our needs were not and deadlines were
                            always hit.
                        </p>
                        <p className="text-2xl font-bold capitalize mb-2">emily r.</p>
                        <p className="text-md  capitalize text-gray-600">Marketing Director</p>
                    </div>
                </div>

                <div className='shadow-xl order-2 lg:order-3'>
                    <div className="p-5">
                        <img className="mx-auto rounded-full h-24 w-24" src={avatar2} alt="" />
                        <p className="my-8 text-lg font-semibold ">
                            Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended.
                        </p>
                        <p className="text-2xl font-bold capitalize mb-2">Jennie F.</p>
                        <p className="text-md  capitalize text-gray-600">Business Owner</p>
                    </div>
                </div>

                <div className='shadow-xl md:col-span-2 lg:col-span-1 order-3 lg:order-2 '>
                    <div className="p-5">
                        <img className="mx-auto rounded-full h-24 w-24" src={avatar3} alt="" />
                        <p className="my-8 text-lg font-semibold ">
                            Sunnyside enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.
                        </p>
                        <p className="text-2xl font-bold capitalize mb-2">emily r.</p>
                        <p className="text-md  capitalize text-gray-600">Cheif Operating Officer</p>
                    </div>
                </div>
            </div>

            {/* //! GALLERY  */}
            <div className="grid grid-cols-2 xl:grid-cols-4 mt-12 xl:mt-24">
                <div>
                    <img src={bottle} alt="" />
                </div>
                <div>
                    <img src={orange2} alt="" />
                </div>
                <div>
                    <img src={cone} alt="" />
                </div>
                <div>
                    <img src={cubes} alt="" />
                </div>
            </div>

            {/* //! FOOTER  */}
            <div className="grid grid-cols-1 place-content-center bg-green-400 pb-8 xl:pb-16 ">
                <h1 className="text-4xl xl:text-6xl font-bold my-5 xl:my-10 text-center">Sunnyside</h1>
                <div className="w-full xl:w-1/2 mx-auto text-center flex justify-around text-lg xl:text-2xl">
                    <a href="#!" className="hover:text-white">About</a>
                    <a href="#!" className="hover:text-white">Services</a>
                    <a href="#!" className="hover:text-white">Projects</a>
                </div>
            </div>
        </section>
    )
}
