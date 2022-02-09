import React from 'react'

export default function index() {
    return (
        <>
            {/* //! NAVBAR */}
            <div
                className="grid grid-cols-2 xl:grid-cols-3 gap-3 xl:gap-6 items-center justify-around px-6 xl:px-20 py-3 xl:py-6 relative bg-white z-10 shadow-md">
                <div>
                    <h1 className="text-2xl xl:text-4xl font-bold">easybank</h1>
                </div>
                <div className="hidden xl:flex justify-around">
                    <a href="#!"
                        className="text-xl border-b-4 border-white hover:border-red-500 font-semibold text-gray-500 hover:text-gray-900">About</a>
                    <a href="#!"
                        className="text-xl border-b-4 border-white hover:border-red-500 font-semibold text-gray-500 hover:text-gray-900">Contact</a>
                    <a href="#!"
                        className="text-xl border-b-4 border-white hover:border-red-500 font-semibold text-gray-500 hover:text-gray-900">Blog</a>
                    <a href="#!"
                        className="text-xl border-b-4 border-white hover:border-red-500 font-semibold text-gray-500 hover:text-gray-900">Career</a>
                </div>
                <div className="ml-auto">
                    <button
                        className="hidden xl:block capitalize text-lg xl:text-xl bg-blue-600 hover:bg-blue-500 px-2 xl:px-4 py-1 xl:py-2 rounded-3xl text-white">request
                        invite</button>
                    <img className="block xl:hidden ml-auto" src={process.env.PUBLIC_URL + " /images/easy-bank/icon-hamburger.svg"} alt="" />
                </div>
            </div>
            {/* //! HEADER  */}
            <div
                className="grid xl:grid-cols-2 gap-3 xl:gap-6 header items-center justify-center px-6 xl:px-20 pt-0 xl:pt-10 relative">
                <div className="xl:w-3/4 text-center xl:text-left order-2 relative bottom-2 xl:bottom-0">
                    <h1 className="text-4xl xl:text-6xl font-semibold leading-tight">Next generation digital banking </h1>
                    <p className="mt-6 mb-8 text-xl font-semibold text-gray-500">Take your financial life online. Your Easybank
                        account will be a one-stop-shop for spending, saving, bidgeting, investing and much more.</p>
                    <button
                        className="capitalize text-xl bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-3xl mb-4 text-white">request
                        invite</button>

                </div>
                <div className="hidden xl:block xl:absolute xl:-right-20 order-1">
                    <img className="" src={process.env.PUBLIC_URL + "/images/easy-bank/image-mockups.png"} alt="" />
                </div>
                <div className="block xl:hidden relative xl:absolute bottom-12 xl:bottom-0 xl:-right-20 order-1">
                    <img className="" src={process.env.PUBLIC_URL + "/images/easy-bank/image-mockups.png"} alt="" />
                </div>
            </div>

            {/* //! CHOOSE  */}
            <section className="text-center xl:text-left mt-32 xl:mt-0" style={{ backgroundColor: "hsl(220, 16%, 96%)" }}>
                <div className="xl:w-1/2 px-6 xl:px-20 pt-10 xl:pt-20 pb-4 xl:pb-8">
                    <h1 className="text-4xl xl:text-5xl font-semibold mb-4 xl:mb-8">Why choose Easybank ?</h1>
                    <p className="text-lg xl:text-xl">We leverage open banking to turn your bank account into your financial hub. Control your finances like never before. </p>
                </div>

                <div className="grid xl:grid-cols-4 gap-2 gap-y-10 xl:gap-4 mt-4 xl:mt-8 px-6 xl:px-20 pb-10 xl:pb-20 ">
                    <div>
                        <img className="mx-auto" sr={process.env.PUBLIC_URL + "/images/easy-bank/icon-online.svg"} alt="" />
                        <h1 className="text-xl xl:text-3xl font-semibold capitalize my-4 xl:my-6">online banking</h1>
                        <p className="text-xl">Our modern web and applications allow you to keep tracks of your finances wherever
                            you are in the world.</p>
                    </div>
                    <div>
                        <img className="mx-auto" src={process.env.PUBLIC_URL + " /images/easy-bank/icon-budgeting.svg"} alt="" />
                        <h1 className="text-3xl font-semibold capitalize my-6">Simple Budgeting</h1>
                        <p className="text-xl">See exactly where your money goes each month.Receive notifications when you're close
                            to hitting your limits.</p>
                    </div>
                    <div>
                        <img className="mx-auto" src={process.env.PUBLIC_URL + " /images/easy-bank/icon-onboarding.svg"} alt="" />
                        <h1 className="text-3xl font-semibold capitalize my-6">Fast Onboarding</h1>
                        <p className="text-xl">Open your account in minutes online and start taking control of your finances right
                            away.</p>
                    </div>
                    <div>
                        <img className="mx-auto" src={process.env.PUBLIC_URL + "/images/easy-bank/icon-api.svg"} alt="" />
                        <h1 className="text-3xl font-semibold capitalize my-6">Open API</h1>
                        <p className="text-xl">Manage your savings, investments, pensions and much more from one account.Tracking
                            your money easily.</p>
                    </div>
                </div>
            </section>

            {/* //! ARTICLES  */}
            <section>
                <div className="xl:w-1/2 mt-4:mt-8 px-6 xl:px-20 pt-5 xl:pt-10 text-center xl:text-left">
                    <h1 className="text-3xl xl:text-5xl font-semibold mt-8 xl:mt-0 mb-8">Latest Articles</h1>
                </div>

                <div className="grid xl:grid-cols-4 gap-3 gap-y-10 xl:gap-6 mt-4 xl:mt-8 px-6 xl:px-20 pb-8 xl:pb-10">
                    <div className="shadow-xl rounded-2xl items-center">
                        <img className="h-1/2 object-cover rounded-t-xl" src={process.env.PUBLIC_URL + " /images/easy-bank/image-currency.jpg"} alt="" />
                        <div className="my-8 mb-28 px-6">
                            <p className="capitalize text-md">by david mardia</p>
                            <h1 className="text-2xl font-semibold my-3">Receive money in any currency with no fees</h1>
                            <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit.Illum dolor delectus
                                consectetur...</p>
                        </div>
                    </div>

                    <div className="shadow-xl rounded-2xl">
                        <img className="h-1/2 object-cover rounded-t-xl" src={process.env.PUBLIC_URL + " /images/easy-bank/image-restaurant.jpg"} alt="" />
                        <div className="my-8 mb-28 px-6">
                            <p className="capitalize text-md">by wilson hutton</p>
                            <h1 className="text-2xl font-semibold my-3">Treat yourself without worrying about money</h1>
                            <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit.Illum dolor delectus
                                consectetur...
                            </p>
                        </div>
                    </div>

                    <div className="shadow-xl rounded-2xl">
                        <img className="h-1/2 object-cover rounded-t-xl" sr={process.env.PUBLIC_URL + " /images/easy-bank/image-plane.jpg"} alt="" />
                        <div className="my-8 mb-28 px-6">
                            <p className="capitalize text-md">by clarie robinson</p>
                            <h1 className="text-2xl font-semibold my-3">Take your Easybank card wherever you go</h1>
                            <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit.Illum dolor delectus
                                consectetur...
                            </p>
                        </div>
                    </div>

                    <div className="shadow-xl rounded-2xl">
                        <img className="h-1/2 object-cover rounded-t-xl" src={process.env.PUBLIC_URL + " /images/easy-bank/image-confetti.jpg"} alt="" />
                        <div className="my-8 mb-28 px-6">
                            <p className="capitalize text-md">by clarie robinson</p>
                            <h1 className="text-2xl font-semibold my-3">Our invite-only Beta accounts are now live</h1>
                            <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit.Illum dolor delectus
                                consectetur...
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* //! FOOTER  */}
            <div
                className="grid xl:grid-cols-3 bg-black text-white mt-4 xl:mt-8 px-10 py-5 xl:px-20 xl:py-10 items-end text-center xl:text-left">
                <div className="xl:w-2/4 text-center mb-10 xl:mb-0 pt-6 xl:pt-0">
                    {/* <!- <img {srprocess.env.PUBLIC_URL + c=""/images/easy-bank/logo}."sg" alt=""/> --> */}
                    <h1 className="text-4xl font-bold mb-8">
                        easybank</h1>
                    <div className="flex justify-around">
                        <a href="#!">
                            <img className="w-7 xl:w-auto" src={process.env.PUBLIC_URL + "/images/easy-bank/icon-facebook.svg"} alt="" />
                        </a>
                        <a href="#!">
                            <img className="w-7 xl:w-auto" src={process.env.PUBLIC_URL + "/images/easy-bank/icon-youtube.svg"} alt="" />
                        </a>
                        <a href="#!">
                            <img className="w-7 xl:w-auto" src={process.env.PUBLIC_URL + "/images/easy-bank/icon-twitter.svg"} alt="" />
                        </a>
                        <a href="#!">
                            <img className="w-7 xl:w-auto" src={process.env.PUBLIC_URL + " /images/easy-bank/icon-pinterest.svg"} alt="" />
                        </a>
                        <a href="#!">
                            <img className="w-7 xl:w-auto" src={process.env.PUBLIC_URL + " /images/easy-bank/icon-instagram.svg"} alt="" />
                        </a>
                    </div>
                </div>
                <div className="grid xl:grid-cols-2 mb-10 xl:mb-0 ">
                    <div className="flex flex-col mb-4 xl:mb-0">
                        <a href="#!" className="text-xl mb-4">About us</a>
                        <a href="#!" className="text-xl mb-4">Contact</a>
                        <a href="#!" className="text-xl ">Blog</a>
                    </div>
                    <div className="flex flex-col">
                        <a href="#!" className="text-xl mb-4">Careers</a>
                        <a href="#!" className="text-xl mb-4">Support</a>
                        <a href="#!" className="text-xl ">Privacy Policy</a>
                    </div>
                </div>
                <div className="xl:text-right">
                    <button className="capitalize text-xl bg-blue-400 px-4 py-2 rounded-3xl mb-4">request invite</button>
                    <p className="capitalize">&copy; 2021 Easybank. All rights reserved</p>
                </div>
            </div>

        </>
    )
}
