import React from 'react'
import { Link } from 'react-router-dom'

export default function index() {
    return (
        <>
            <nav className="flex crowd-funding-nav px-36 py-3 h-80 bg-red-400" style={{ background: `${process.env.PUBLIC_URL}/images/crowd-funding/image-hero-desktop.jpg` }}>
                {/* {console.log(process.env.PUBLIC_URL + '/images/crowd-funding/image-hero-desktop.jpg')} */}
                {/* {console.log(`${process.env.PUBLIC_URL}/images/crowd-funding/image-hero-desktop.jpg`)} */}

                <div className="justify-between items-center self-start flex-row w-screen">
                    <h1 className="text-3xl font-bold">crowdfund</h1>
                    <div className="">
                        <Link to="#!" className="mr-2 text-lg">About</Link>
                        <Link to="#!" className="mr-2 text-lg">Discover</Link>
                        <Link to="#!" className="mr-2 text-lg">Get Started</Link>
                    </div>
                </div>
            </nav>
            <main className="px-8 lg:px-80 relative bottom-28 z-10">
                {/* <img src={process.env.PUBLIC_URL + '/images/crowd-funding/image-hero-desktop.jpg'} className="w-screen mr-4 h-1/4" alt="" /> */}

                <div className="text-center shadow-md p-8 pt-2 rounded-2xl bg-white">
                    <img className="mx-auto relative bottom-10" src={process.env.PUBLIC_URL +'/images/crowd-funding/logo-mastercraft.svg'} alt="" />
                    <h1 className="text-3xl font-bold capitalize ">Mastercraft bamboo monitor riser</h1>
                    <p className="mt-2 text-lg">A beautiful & handcrafted monitor stand to reduce neck and eye strain. </p>

                    <div className="flex justify-between mt-10 my-4">
                        <button className="bg-green-500 hover:bg-green-600 p-3 px-6 rounded-3xl text-white text-lg">Back this project</button>
                        <button className="bg-gray-500 p-3 px-6 rounded-3xl text-white text-lg">
                        <span className="rounded-full p-3 bg-red-500">hi</span>    Bookmark</button>
                    </div>
                </div>

            </main>
        </>
    )
}
