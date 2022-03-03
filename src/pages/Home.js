import React from 'react'
import Card from '../components/Card'
import { data } from '../data'
import Nav from './Nav'

export default function Home() {
    return (
        <>
            <Nav />

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
