import {useState, useEffect} from 'react'
import { AiFillFacebook, AiFillTwitterSquare,AiOutlineInstagram, AiFillYoutube, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from './logo.svg'
import hero from './hero.jpg'
import logo1 from './snappy.svg'
import logo2 from './affordable.svg'
import logo3 from './people.svg'
import './index.css'

export default function Index() {
    const [navOpen, setNavOpen] = useState(false);
    const [isScrollable, setIsScrollable] = useState(false)

    const toggleNav = () => {
        setNavOpen(!navOpen)
        setIsScrollable(!isScrollable)
    }
    const closeNav = () =>{setNavOpen(false)}

    useEffect(() => {
        document.body.classList.toggle('body-fixed', isScrollable);
    },[isScrollable])


    return (
        <section className='insurance-landing'>
        <nav className="flex flex-wrap justify-between items-center bg-white px-4 lg:mx-0 lg:px-48 py-5 shadow-xl">
        <a href="/"><img src={logo} alt="" /></a>
            {navOpen ? <AiOutlineClose className='lg:hidden text-xl' onClick={toggleNav} /> :<AiOutlineMenu className='lg:hidden text-xl' onClick={toggleNav} />}

            <div className='hidden lg:block uppercase font-semibold text-gray-500'>
                <a href="#!" className='mr-6 hover:text-gray-800'>How we work</a>
                <a href="#!" className='mr-6 hover:text-gray-800'>Blog</a>
                <a href="#!" className='mr-6 hover:text-gray-800'>Account</a>
                <a href="#!" className='mr-6 py-2 text-black px-6 border-2 border-black 
                hover:bg-black hover:text-white '>View plans</a>
            </div>
        </nav>

        {navOpen ? (
            <div className="flex flex-col flex-wrap grey-bg text-white py-10 text-2xl text-center h-screen px-4 uppercase bg-mobile-nav">
            <a href="#!" onClick={closeNav} className='hover:text-gray-300 mb-4'>How we work</a>
                <a href="#!" onClick={closeNav} className='hover:text-gray-300 mb-4'>Blog</a>
                <a href="#!" onClick={closeNav} className='hover:text-gray-300 mb-4'>Account</a>
                <a href="#!" onClick={closeNav} className='py-2 text-white px-6 border-2 border-white 
                hover:bg-white hover:text-black'>View plans</a>
        </div>
        ) : ''}

        {/* //! Head  */}
        <div className='relative flex flex-col lg:flex-row justify-between bg-intro text-white pt-14 lg:py-24 text-center lg:text-left '>
            <div className='lg:pl-48 lg:pr-14 px-4 lg:w-7/12'>
                <hr className='border-t-2 w-1/6'  />
                <h1 className='text-4xl lg:text-6xl mt-10'>Humanizing <br /> your insurance.</h1>
                <p className='my-8 text-lg lg:text-xl'>
                    Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that's right for you. Ensure your and your loved ones are protected.
                </p>

                <button className='py-2 px-6 border-2 border-white 
                hover:bg-white hover:text-black uppercase'> 
                    View Plans
                </button>
            </div>
            <div className='lg:pr-48 mt-6 lg:my-0  lg:w-5/12'>
                <img src={hero} className='relative lg:absolute lg:w-1/4 h-100' alt="" />
            </div>
        </div>

        {/* //! FEATURES  */}
        <div className='grid grid-cols-1 text-center lg:text-left lg:grid-cols-3 gap-y-4 gap-x-8 text-black px-5 lg:px-48 py-8 lg:py-16 lg:mt-20'>
        <div className='col-span-1 lg:col-span-3'>
        <hr className='pt-10 border-t-2 w-1/6' />
        <h1 className='text-5xl lg:text-6xl mb-10'>We're different</h1>
        </div>
            <div>
            <img src={logo1} className='mx-center' height="90" width="90" alt="" />
                <h1 className='text-4xl tracking-tight my-5'>Snappy Process</h1>
                <p className='text-gray-600 text-lg lg:text-xl'>Our application process can be completed in minutes, not hours. Don't get stuck filling in tedious forms.</p>
            </div>
            <div className='my-6 lg:my-0'>
            <img src={logo2} className='mx-center' height="90" width="90" alt="" />
                <h1 className='text-4xl tracking-tight my-5'>Affordable Prices</h1>
                <p className='text-gray-600 text-lg lg:text-xl'>
                We don't want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.</p>
            </div>
            <div>
            <img src={logo3} className='mx-center' height="90" width="90" alt="" />
                <h1 className='text-4xl tracking-tight my-5'>People First</h1>
                <p className='text-gray-600 text-lg lg:text-xl'>
                Our plans aren't full of conditions and clauses to prevent payouts. We make sure you're covered when you need it.</p>
            </div>
        </div>


        {/* //! ABOUT  */}
        <div className="flex text-white px-5 lg:px-48 py-16 bg-about-outer">
            <div className='flex-col justify-between items-center py-16 px-3 lg:px-12 text-center lg:text-left w-screen bg-about'>
                <h1 className='text-3xl lg:text-5xl mb-16 lg:mb-6'>Find out more <br /> about how we work</h1>
                <button className='py-2 px-6 border-2 border-white 
                hover:bg-white hover:text-black'>
                    HOW WE WORK
                </button>
            </div>
        </div>

        {/* //! FOOTER  */}
        <footer className='px-5 lg:px-48 py-16'>
            <div className='flex flex-col lg:flex-row justify-between items-center '>
            <img src={logo} className='mb-5 lg:mb-0' alt="" />
            {/* <h1 className='text-3xl font-semibold uppercase mb-5 lg:mb-0'>insure</h1> */}
                <div className='flex-row text-4xl text-gray-600'>
                    <a href="#!" className='mr-3 hover:text-black'><AiFillFacebook/> </a>
                    <a href="#!" className='mr-3 hover:text-black'><AiFillTwitterSquare/> </a>
                    <a href="#!" className='mr-3 hover:text-black'><AiOutlineInstagram/> </a>
                    <a href="#!" className='mr-3 hover:text-black'><AiFillYoutube/> </a>
                </div>
            </div>
            <hr className='my-10 border-t-2' />

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 uppercase text-center lg:text-left">
                <div className='mb-4 lg:mb-0'>
                    <h1 className='text-md tracking-widest font-semibold text-gray-500 mb-6'>our company</h1>
                    <a href="#!" className='text-lg mb-3 text-gray-600 hover:text-black block font-semibold'>how we work</a>
                    <a href="#!" className='text-lg mb-3 text-gray-600 hover:text-black block font-semibold'>Why insure ?</a>
                    <a href="#!" className='text-lg mb-3 text-gray-600 hover:text-black block font-semibold'>view plans</a>
                    <a href="#!" className='text-lg mb-3 text-gray-600 hover:text-black block font-semibold'>reviews</a>
                </div>
                <div className='mb-4 lg:mb-0'>
                    <h1 className='text-md tracking-widest font-semibold text-gray-500 mb-6'>help me</h1>
                    <a href="#!" className='text-lg mb-3 text-gray-600 hover:text-black block font-semibold'>faq</a>
                    <a href="#!" className='text-lg mb-3 text-gray-600 hover:text-black block font-semibold'>terms of use</a>
                    <a href="#!" className='text-lg mb-3 text-gray-600 hover:text-black block font-semibold'>privacy policy</a>
                    <a href="#!" className='text-lg mb-3 text-gray-600 hover:text-black block font-semibold'>cookies</a>
                </div>
                <div className='mb-4 lg:mb-0'>
                    <h1 className='text-md tracking-widest font-semibold text-gray-500 mb-6'>contact</h1>
                    <a href="#!" className='text-lg mb-3 text-gray-600 hover:text-black block font-semibold'>Sales</a>
                    <a href="#!" className='text-lg mb-3 text-gray-600 hover:text-black block font-semibold'>Support</a>
                    <a href="#!" className='text-lg mb-3 text-gray-600 hover:text-black block font-semibold'>Live chat</a>
                </div>
                <div >
                    <h1 className='text-md tracking-widest font-semibold text-gray-500 mb-6'>others</h1>
                    <a href="#!" className='text-lg mb-3 text-gray-600 hover:text-black block font-semibold'>careers</a>
                    <a href="#!" className='text-lg mb-3 text-gray-600 hover:text-black block font-semibold'>Press</a>
                    <a href="#!" className='text-lg mb-3 text-gray-600 hover:text-black block font-semibold'>licences</a>
                </div>
            </div>
        </footer>
        </section>
    )
}
