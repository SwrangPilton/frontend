import React from 'react'
import Card from '../components/Card'
import { data } from '../data'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <>
            <nav className="shadow-xl fixed w-screen z-10 bg-white flex items-center justify-between px-4 xl:px-40">
                <Link to="/" className="text-xl md:text-2xl py-3 capitalize font-semibold">Frontend Mentor Solutions</Link>
                <Link to="/about" className="text-2xl tracking-tighter hover:text-red-500 duration-500">Pilton</Link>
            </nav>

            {/* // BODY  */}
            <div className="relative pt-12">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 gap-y-8 md:gap-8 xl:gap-10 px-4 xl:px-40 py-4 xl:py-12 ">
                    {data.map((data, idx) => {
                        return <Card data={data} key={idx} />
                    })}
                </div>
            </div>

            <footer className="shadow-lg pb-4">
                <h1 className="text-xl text-center">Made with 💖 by <span className="font-semibold ">Pilton</span> </h1>
            </footer>
        </>
    )
}
