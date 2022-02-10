import React from 'react'
import './index.css'
import intro from './images/intro.svg'
import logo from './images/logo.svg'
import avatar1 from './images/avatar-anisha.png'
import avatar2 from './images/avatar-ali.png'
import avatar3 from './images/avatar-richard.png'
import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle, AiFillYoutube, AiOutlineLinkedin, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Index() {
    const [nav, showNav] = React.useState(false);
    const closeNav = () => showNav(false)
    const toggleNav = () => {
        showNav(!nav)
        console.log(nav)
    }
    console.log(`nav-bg ${!nav ? 'bg-black' : ''}`)
    return (
        <section id={`nav-bg ${!nav} && bg-black`}>
            <nav className='nav-bg'>
                <nav className='flex flex-wrap flex-row justify-between items-center w-full col-span-2 py-6 mb-6 px-6 lg:px-28 '>
                    <a href="#!">
                        <img src={logo} className='bg-white' alt="" />
                    </a>
                    <div className={`block lg:hidden`}>
                        {!nav ? (
                            <AiOutlineMenu className='text-3xl duration-1000'
                                onClick={toggleNav} />
                        ) : (
                            <AiOutlineClose className='text-3xl duration-1000'
                                onClick={toggleNav} />
                        )}
                    </div>
                    {nav && (
                        <div className='lg:hidden text-center absolute top-0 left-0 mt-20 bg-white flex flex-col py-5 w-screen'>
                            <a href="#!" onClick={closeNav} className='text-lg font-semibold mb-3 lg:mr-3 hover:text-red-400'>Home</a>
                            <a href="#!" onClick={closeNav} className='text-lg font-semibold mb-3 lg:mr-3 hover:text-red-400'>Pricing</a>
                            <a href="#!" onClick={closeNav} className='text-lg font-semibold mb-3 lg:mr-3 hover:text-red-400'>Products</a>
                            <a href="#!" onClick={closeNav} className='text-lg font-semibold mb-3 lg:mr-3 hover:text-red-400'>About us</a>
                        </div>
                    )}
                    <div className='hidden lg:block'>
                        <a href="#!" onClick={closeNav} className='text-lg font-semibold mb-3 lg:mr-3 hover:text-red-400'>Home</a>
                        <a href="#!" onClick={closeNav} className='text-lg font-semibold mb-3 lg:mr-3 hover:text-red-400'>Pricing</a>
                        <a href="#!" onClick={closeNav} className='text-lg font-semibold mb-3 lg:mr-3 hover:text-red-400'>Products</a>
                        <a href="#!" onClick={closeNav} className='text-lg font-semibold mb-3 lg:mr-3 hover:text-red-400'>About us</a>
                        <button onClick={closeNav} className='lg:hidden py-2 px-6 rounded-3xl bg-red-400  text-white text-lg shadow-xl'>Get Started</button>
                    </div>

                    <button className='hidden lg:block py-2 px-6 rounded-3xl bg-red-400 hover:bg-red-300 text-white text-lg shadow-xl'>Get Started</button>
                </nav>

                {/* //! Head */}
                <div className="head grid grid-cols-1 lg:grid-cols-2 gap-y-4 lg:gap-y-0 gap-x-6 px-6 lg:px-28 items-center">
                    <div className='text-center sm:text-left order-2 lg:order-1'>
                        <h1 className='lg:w-4/5 text-4xl lg:text-5xl font-semibold'>Bring everyone together to build better products.</h1>
                        <p className='lg:w-4/5 text-lg my-10 text-gray-500'>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in views.</p>

                        <button className='py-2 px-6 rounded-3xl bg-red-400 hover:bg-red-300 text-white text-lg shadow-xl'>Get Started</button>
                    </div>
                    <img src={intro} className='w-100 order-1 lg:order-2' alt="" />
                </div>
            </nav>

            {/* //! Features */}
            <div className="feature-bg ">
                <div className=" grid grid-cols-1 lg:grid-cols-2 gap-y-4 lg:gap-y-0 gap-x-6 px-6 lg:px-28 my-16">
                    <div className='text-center sm:text-left'>
                        <h1 className='lg:w-4/5 text-4xl lg:text-5xl font-semibold'>What's different about Manage ?</h1>
                        <p className='lg:w-4/5 text-lg my-10 text-gray-500'>Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern for modern digital product teams.</p>
                    </div>

                    <div className='flex flex-wrap flex-col'>
                        <div className='flex-row '>
                            <div className="w-1/5 mr-4 hidden md:block">
                                <button className='py-2 px-8 rounded-3xl bg-red-400 text-white text-2xl shadow-xl'>01</button>
                            </div>
                            <div className="flex-col">
                                <div className="flex-row items-start">
                                    <button className='md:hidden w-1/5 py-2 px-4 mr-4 rounded-3xl bg-red-400 text-white text-2xl shadow-xl'>01</button>
                                    <h1 className='text-2xl lg:text-3xl font-semibold mb-4'>Track company-wide progress </h1>
                                </div>
                                <p className='text-lg text-gray-500'>See how your day-to-day tasks fit into the wider version.Go from tracking progress at the milestone level all the way done to the smallest of details. Never lsoe sight of the bigger picture again.</p>
                            </div>
                        </div>

                        <div className='flex-row my-10'>
                            <div className="w-1/5 mr-4 hidden md:block">
                                <button className='py-2 px-8 rounded-3xl bg-red-400 text-white text-2xl shadow-xl'>02</button>
                            </div>
                            <div className="flex-col">
                                <div className="flex-row items-start">
                                    <button className='md:hidden w-1/5 py-2 px-4 mr-4 rounded-3xl bg-red-400 text-white text-2xl shadow-xl'>02</button>
                                    <h1 className='text-2xl lg:text-3xl font-semibold mb-4'>Advanced built-in reports</h1>
                                </div>
                                <p className='text-lg text-gray-500'>See internal delivery estimates and track progress towards company goals. Our customisable dashboard helps you build out the reports you need to keep the stakeholders informed.</p>
                            </div>
                        </div>

                        <div className='flex-row'>
                            <div className="w-1/5 mr-4 hidden md:block">
                                <button className='py-2 px-8 rounded-3xl bg-red-400 text-white text-2xl shadow-xl'>03</button>
                            </div>
                            <div className="flex-col">
                                <div className="flex-row items-start">
                                    <button className='md:hidden w-1/5 py-2 px-4 mr-4 rounded-3xl bg-red-400 text-white text-2xl shadow-xl'>03</button>
                                    <h1 className='text-2xl lg:text-3xl font-semibold mb-4'>Everything you need in one place </h1>
                                </div>
                                <p className='text-lg text-gray-500'>Stop jumping from one service to another to communicate, to store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.</p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* //! Testimonial */}
                <div className="head grid grid-cols-1 lg:grid-cols-3 gap-y-16 lg:gap-y-0 gap-x-6 px-6 lg:px-28 text-center my-16">
                    <div className="col-span-1 lg:col-span-3 text-center mb-0 lg:mb-6 ">
                        <h1 className='text-3xl lg:text-5xl font-semibold lg:mb-12'>What they've said</h1>
                    </div>
                    <div className='shadow-md px-4 py-5 bg-gray-50'>
                        <div className="relative">
                            <img src={avatar1} className='w-20 absolute mx-auto left-0 right-0 text-center -top-12' alt="" />
                        </div>
                        <h1 className='text-2xl lg:text-3xl font-semibold mt-8'>Anisha Li</h1>
                        <p className='text-lg my-5 text-gray-500'>Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern for modern digital product teams.</p>
                    </div>

                    <div className='shadow-md px-4 py-5 bg-gray-50 '>
                        <div className="relative">
                            <img src={avatar2} className='w-20 absolute mx-auto left-0 right-0 text-center -top-12' alt="" />
                        </div>
                        <h1 className='text-2xl lg:text-3xl font-semibold mt-8'>Ali Bravo</h1>
                        <p className='text-lg my-5 text-gray-500'>We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is mnuch more focused.</p>
                    </div>

                    <div className='shadow-md px-4 py-5 bg-gray-50 '>
                        <div className="relative">
                            <img src={avatar3} className='w-20 absolute mx-auto left-0 right-0 text-center -top-12' alt="" />
                        </div>
                        <h1 className='text-2xl lg:text-3xl font-semibold mt-8'>Richard Watts</h1>
                        <p className='text-lg my-5 text-gray-500'>"Manage allows us to provide structure and plan to keep us organized and focus. I can't stop recording them to everyone I talk to!".</p>
                    </div>

                    <div className="col-span-1 lg:col-span-3 text-center mt-4 lg:mt-10">
                        <button className='py-2 px-6 rounded-3xl bg-red-400 hover:bg-red-300 text-white text-lg shadow-3xl'>Get Started</button>
                    </div>
                </div>
            </div>

            {/* //! Testimonial */}
            {/* <div className="head grid grid-cols-1 lg:grid-cols-3 gap-y-16 lg:gap-y-0 gap-x-6 px-6 lg:px-28 text-center my-16">
                <div className="col-span-1 lg:col-span-3 text-center mb-0 lg:mb-6 ">
                    <h1 className='text-3xl lg:text-5xl font-semibold lg:mb-12'>What they've said</h1>
                </div>
                <div className='shadow-md px-4 py-5 bg-gray-50'>
                    <div className="relative">
                        <img src={avatar1} className='w-20 absolute mx-auto left-0 right-0 text-center -top-12' alt="" />
                    </div>
                    <h1 className='text-2xl lg:text-3xl font-semibold mt-8'>Anisha Li</h1>
                    <p className='text-lg my-5 text-gray-500'>Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern for modern digital product teams.</p>
                </div>

                <div className='shadow-md px-4 py-5 bg-gray-50 '>
                    <div className="relative">
                        <img src={avatar2} className='w-20 absolute mx-auto left-0 right-0 text-center -top-12' alt="" />
                    </div>
                    <h1 className='text-2xl lg:text-3xl font-semibold mt-8'>Ali Bravo</h1>
                    <p className='text-lg my-5 text-gray-500'>We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is mnuch more focused.</p>
                </div>

                <div className='shadow-md px-4 py-5 bg-gray-50 '>
                    <div className="relative">
                        <img src={avatar3} className='w-20 absolute mx-auto left-0 right-0 text-center -top-12' alt="" />
                    </div>
                    <h1 className='text-2xl lg:text-3xl font-semibold mt-8'>Richard Watts</h1>
                    <p className='text-lg my-5 text-gray-500'>"Manage allows us to provide structure and plan to keep us organized and focus. I can't stop recording them to everyone I talk to!".</p>
                </div>

                <div className="col-span-1 lg:col-span-3 text-center mt-4 lg:mt-10">
                    <button className='py-2 px-6 rounded-3xl bg-red-400 hover:bg-red-300 text-white text-lg shadow-3xl'>Get Started</button>
                </div>
            </div> */}

            {/* //! Footer  */}
            <footer>
                <div className='footer1-bg flex flex-col lg:flex-row lg:justify-between items-center lg:px-32 bg-red-500 text-white py-16 text-center lg:text-left'>
                    <h1 className='text-3xl lg:text-4xl font-semibold lg:w-2/4 mb-10 lg:mb-0'>Simply how your team <br /> works today.</h1>
                    <button className='py-2 px-6 rounded-3xl bg-white hover:bg-gray-200 text-red-400 text-lg shadow-xl'>Get Started</button>
                </div>

                <div className='grid grid-cols-2 lg:grid-cols-4 gap-5 bg-gray-800 text-white px-6 lg:px-32 py-16 duration-500'>
                    <div className='flex flex-col justify-between col-span-2 lg:col-auto order-4 lg:order-1'>
                        <img src={logo} className='bg-white w-3/4 lg:w-full mx-auto lg:mb-0 order-2 lg:order-1' alt="" />
                        <div className="flex flex-wrap flex-row justify-between text-4xl cursor-pointer order-1 mb-10 lg:mb-0 lg:order-2">
                            <AiFillFacebook className='hover:text-red-400' />
                            <AiFillInstagram className='hover:text-red-400' />
                            <AiFillYoutube className='hover:text-red-400' />
                            <AiFillTwitterCircle className='hover:text-red-400' />
                            <AiOutlineLinkedin className='hover:text-red-400' />
                        </div>
                    </div>
                    <div className='flex flex-col lg:w-1/2 lg:relative lg:left-16 my-5 lg:my-0  order-2'>
                        <a href="#!" className='text-lg mb-3 hover:text-red-400'>Home</a>
                        <a href="#!" className='text-lg mb-3 hover:text-red-400'>Pricing</a>
                        <a href="#!" className='text-lg mb-3 hover:text-red-400'>Products</a>
                        <a href="#!" className='text-lg mb-3 hover:text-red-400'>About us</a>
                    </div>
                    <div className='flex flex-col lg:w-1/2 lg:relative lg:left-16 my-5 lg:my-0  order-3'>
                        <a href="#!" className='text-lg mb-3 hover:text-red-400'>Careers</a>
                        <a href="#!" className='text-lg mb-3 hover:text-red-400'>Community</a>
                        <a href="#!" className='text-lg mb-3 hover:text-red-400'>Privacy Policy</a>
                    </div>

                    <div className='flex flex-wrap flex-col justify-between col-span-2 lg:col-auto order-1 lg:order-4'>
                        <div className='flex flex-wrap flex-row justify-between mb-10 lg:mb-0'>
                            <input type="email" className='py-2 mr-4 lg:mr-0 px-4 rounded-3xl text-black appearance-none focus:outline-none focus:shadow-outline border focus:border-red-500' placeholder='Update in your inbox...' />
                            <button className='py-2 px-6 rounded-3xl text-white bg-red-400 hover:bg-red-300 text-lg shadow-xl'>Go</button>
                        </div>
                        <p className='hidden lg:block text-md relative bottom-0 '>Copyright 2021. All Rights Reserved</p>
                    </div>
                </div>
                <p className='block lg:hidden sm:col-span-4 w-screen text-lg text-center bg-gray-800 text-white px-6 lg:px-32 py-8'>Copyright 2021. All Rights Reserved</p>
            </footer>
        </section>
    )
}
