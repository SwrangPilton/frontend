import React, { useState } from 'react'
import './toggle.css'

export default function Index() {
    const [toggle, setToggle] = useState(false)

    return (
        <div className="price-component">
            <div className="price_inside ">
                <h1 className="text-4xl font-semibold mb-5">Our Pricing</h1>

                <div className="flex-row items-center">
                    <h1 className="semi_bold">Monthly</h1>
                    <label className="switch mx-5">
                        <input type="checkbox" onClick={() => setToggle(!toggle)} />
                        <span className="slider round"></span>
                    </label>
                    <h1 className="semi_bold">Annually</h1>
                </div>
            </div>

            <div className="price_grid">
                <div className="p-6 py-4 xl:py-14 shadow-xl w-full bg-white">
                    <h1 className="text-2xl mb-4">Basic</h1>
                    <h1 className="text-6xl font-bold text-gray-700">
                        <span className="text-4xl relative bottom-2">$</span>
                        {toggle ? 19.99 : 199.99}</h1>

                    <hr className="mt-6" />
                    <h1 className="semi_bold gray_text py-3">500 GB Storage </h1>
                    <hr />
                    <h1 className="semi_bold gray_text py-3">2 Users Allowed</h1>
                    <hr />
                    <h1 className="semi_bold gray_text py-3">Send Upto 3 GB</h1>
                    <hr className="mb-6" />

                    <button className="side_btn mb-6 lg:mb-0">
                        <h1 className="font-semibold tracking-widest">Learn More</h1>
                    </button>
                </div>

                <div className="px-6 py-8 xl:py-24 
                bg-gradient-to-br from-indigo-400 to-indigo-500 
                shadow-xl text-white rounded-md w-full">
                    <h1 className="text-2xl mb-4 mt-6">Professional</h1>
                    <h1 className="text-6xl font-bold gray_100">
                        <span className="text-4xl relative bottom-2">$</span>
                        {toggle ? 24.99 : 249.99}</h1>

                    <hr className="mt-6" />
                    <h1 className="semi_bold gray_100 py-3">1 TB Storage </h1>
                    <hr />
                    <h1 className="semi_bold gray_100 py-3">5 Users Allowed</h1>
                    <hr />
                    <h1 className="semi_bold gray_100 py-3">Send Upto 10 GB</h1>
                    <hr className="mb-6" />

                    <button className="mid_btn">
                        <h1 className="font-semibold tracking-widest">Learn More</h1>
                    </button>
                </div>


                <div className="p-6 py-4 mb-8 lg:mb-0 xl:py-14 shadow-xl w-full bg-white">
                    <h1 className="text-2xl mb-4">Master</h1>
                    <h1 className="text-6xl font-bold text-gray-700">
                        <span className="text-4xl relative bottom-2">$</span>
                        {toggle ? 39.99 : 399.99}</h1>
                    <hr className="mt-6" />
                    <h1 className="semi_bold gray_text py-3">2 TB Storage </h1>
                    <hr />
                    <h1 className="semi_bold gray_text py-3">10 Users Allowed</h1>
                    <hr />
                    <h1 className="semi_bold gray_text py-3">Send Upto 20 GB</h1>
                    <hr className="mb-6" />

                    <button className="side_btn mb-6 lg:mb-0">
                        <h1 className="font-semibold tracking-widest">Learn More</h1>
                    </button>
                </div>
            </div>
        </div>
    )
}
