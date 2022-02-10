import React, { Fragment } from 'react'
import icon1 from './images/icon-online.svg'
import icon2 from './images/icon-budgeting.svg'
import icon3 from './images/icon-onboarding.svg'
import icon4 from './images/icon-api.svg'
import img1 from './images/image-currency.jpg'
import img2 from './images/image-restaurant.jpg'
import img3 from './images/image-plane.jpg'
import img4 from './images/image-confetti.jpg'
import logo from './images/logo.svg'
import intro from './images/image-mockups.png'

import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle, AiFillYoutube, AiOutlineLinkedin, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import './index.css'

export default function Index() {
    const [nav, showNav] = React.useState(false)
    const [modal, showModal] = React.useState(true)
    const closeNav = () => showNav(false)
    const toggleNav = () => {
        showNav(!nav)
        showModal(!modal)
    }

    React.useEffect(() => {
        document.body.classList.toggle('dark-opacity', modal);
    },[modal])

    return (
        <section id="easy-bank-landing">
            {/* //! NAV  */}
            <nav className='flex flex-wrap justify-between items-center py-3 px-6 lg:px-32 bg-white shadow-xl relative z-50'>
                <img src={logo} className='' alt="" />

                <div className="lg:hidden">
                    {!nav ? <AiOutlineMenu className='lg:hidden text-xl font-semibold' 
                    onClick={toggleNav} /> :
                        <AiOutlineClose className='lg:hidden text-xl text-red-500 font-semibold' onClick={toggleNav} />}
                </div>
                {nav && (
                    <Fragment className=''>
                        <div className='absolute top-0 left-0 w-screen mt-16 px-6 nav-small'>
                            <div className={`flex lg:hidden flex-col justify-between bg-white text-black px-6 py-4 rounded-xl text-center shadow-xl ${modal ? ' bright-opacity ':''}`}>
                                <a href="#!" onClick={closeNav} className='text-lg mb-2'>About</a>
                                <a href="#!" onClick={closeNav} className='text-lg mb-2'>Contact</a>
                                <a href="#!" onClick={closeNav} className='text-lg mb-2'>Blog</a>
                                <a href="#!" onClick={closeNav} className='text-lg mb-2'>Careers</a>
                            </div>
                        </div>
                    </Fragment>
                )}
                <div className='hidden lg:flex md:w-2/4 xl:w-1/4 flex-row justify-between'>
                    <a href="#!" className='text-lg xl:mr-4'>About</a>
                    <a href="#!" className='text-lg xl:mr-4'>Contact</a>
                    <a href="#!" className='text-lg xl:mr-4'>Blog</a>
                    <a href="#!" className='text-lg xl:mr-4'>Careers</a>
                </div>
                <button className='hidden lg:block bg-red-800 py-2 text-white px-4 rounded-3xl'>Request Invite</button>
            </nav>

            {/* //! Head  */}
            <div className="head relative grid grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-28 lg:py-32 xl:py-40 text-center lg:text-left head-bg">
                <div className='order-2 lg:order-1 head_inside px-6 lg:px-32 my-6 lg:my-0'>
                    <h1 className="">Next generation digital banking</h1>
                    <p className="lg:w-5/6">
                        Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, bidgeting, investing and much more.</p>

                    <button className='bg-red-800 mb-5 py-2 my-4 text-white px-4 rounded-3xl xl:w-1/4'>Request Invite</button>
                </div>

                <div className='lg:my-16 lg:absolute -top-48 -right-20 head-bg-small'>
                    <img src={intro} className='mx-auto lg:mx-0' alt="" />
                </div>
            </div>

            {/* //! Features  */}
            <div className="features grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-12 bg-gray-200 py-20 px-6 lg:px-32 text-center lg:text-left">
                <div className="col-span-1 md:col-span-2 xl:col-span-4">
                    <h1 className='text-4xl lg:text-5xl mb-6 text-gray-600'>Why choose  Easybank ?</h1>
                    <p className='text-xl lg:w-1/2 text-gray-500'>We leverage open banking to turn your bank account into your financial hub. Control your finances like never before.</p>
                </div>

                <div className='mt-14 features_inside'>
                    <img src={icon1} className='mx-auto lg:mx-0' alt="" />
                    <h1 className="">online banking</h1>
                    <p className="">Our modern web and applications allow you to keep tracks of your finances wherever you are in the world.</p>
                </div>

                <div className='mt-14 features_inside'>
                    <img src={icon2} className='mx-auto lg:mx-0' alt="" />
                    <h1 className="">Simple Budgeting</h1>
                    <p className="">See exactly where your money goes each month.Receive notifications when you're close to hitting your limits.</p>
                </div>

                <div className='mt-14 features_inside'>
                    <img src={icon3} className='mx-auto lg:mx-0' alt="" />
                    <h1 className="">Fast Onboarding</h1>
                    <p className="">Open your account in minutes online and start taking control of your finances right away.</p>
                </div>

                <div className='mt-14 features_inside'>
                    <img src={icon4} className='mx-auto lg:mx-0' alt="" />
                    <h1 className="">Open API</h1>
                    <p className="">Manage your savings, investments, pensions and much more from one account.Tracking your money easily.</p>
                </div>

            </div>

            {/* //! Articles  */}
            <div className="articles grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-6 py-20 px-6 lg:px-32 lg:text-left">
                <div className="col-span-1 md:col-span-2 xl:col-span-4">
                    <h1 className='text-4xl lg:text-5xl mb-6 text-gray-600'>Latest Articles</h1>
                </div>

                <div className='articles_inside '>
                    <img src={img1} className='' alt="" />
                    <div className='p-6 cursor-pointer'>
                        <p className='article_author'>By Clarie Robinson</p>
                        <h1 className=''>Receive money in any currency with no fees</h1>
                        <p className='text-base'>The world is getting smaller and we're becoming more mobile. SO why should you be forced to only receive money in single... </p>
                    </div>
                </div>

                <div className='articles_inside '>
                    <img src={img2} className='' alt="" />
                    <div className='p-6 cursor-pointer'>
                        <p className='article_author'>By Wilson Hutton</p>
                        <h1 className=''>Treat yourself without worrying about money</h1>
                        <p className='text-base'>Our simple budgeting features allows you to separate out your spending and set realistics limits each month. That means..</p>
                    </div>
                </div>

                <div className='articles_inside '>
                    <img src={img3} className='' alt="" />
                    <div className='p-6 cursor-pointer'>
                        <p className='article_author'>By Wilson Hutton</p>
                        <h1 className=''>Take your Easybank card wherever you go</h1>
                        <p className='text-base'>We want you to enjoy your travels. This is why we don't charge any fees on purchase while you're abroad. We'll even show you....</p>
                    </div>
                </div>

                <div className='articles_inside '>
                    <img src={img4} className='' alt="" />
                    <div className='p-6 cursor-pointer'>
                        <p className='article_author'>By Clarie Robinson</p>
                        <h1 className=''>Our invite-only Beta accounts are now live</h1>
                        <p className='text-base'>After a lot of hardwork by the whole team, we're excietd tio launch our closed beta. It's easy to request an invite through the site..</p>
                    </div>
                </div>

            </div>

            {/* //! Footer  */}
            <footer className='py-16 px-6 lg:px-32'>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-5 text-center lg:text-left">
                    <div className='flex flex-col justify-between cursor-pointer'>
                        <img src={logo} className='bg-white w-3/5 mb-6 lg:mb-0 mx-auto lg:mx-0' alt="" />
                        <div className='flex flex-wrap flex-row justify-between text-2xl md:w-3/5 mx-auto lg:mx-0'>
                            <AiFillFacebook className='text-white hover:text-red-400' />
                            <AiFillInstagram className='text-white hover:text-red-400' />
                            <AiFillYoutube className='text-white hover:text-red-400' />
                            <AiFillTwitterCircle className='text-white hover:text-red-400' />
                            <AiOutlineLinkedin className='text-white hover:text-red-400' />
                        </div>
                    </div>

                    <div className='flex flex-col lg:w-1/2 mt-6 lg:mt-0'>
                        <a href="#!" className=''>About Us</a>
                        <a href="#!" className=''>Contact</a>
                        <a href="#!" className=''>Blog</a>
                    </div>

                    <div className='flex flex-col lg:w-1/2 mb-6 lg:mb-0'>
                        <a href="#!" className=''>Careers</a>
                        <a href="#!" className=''>Support</a>
                        <a href="#!" className=''>Privacy Policy</a>
                    </div>

                    <div className='flex flex-col justify-between lg:items-end text-center lg:text-right'>
                        <button className='bg-red-800 mb-5 py-2 text-white px-4 rounded-3xl w-3/4 mx-auto lg:mx-0'>Request Invite</button>
                        <p className=''>&copy; Easybank. All Rights Reserved</p>
                    </div>

                </div>
            </footer>
        </section>
    )
}
