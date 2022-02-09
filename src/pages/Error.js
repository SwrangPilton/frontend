import React from 'react'
import { Link } from 'react-router-dom';

export default function Error() {
    return (
        <div className="h-screen flex justify-center items-center">
            <div className="text-center lg:my-10 p-10 lg:p-20 border-2 border-gray-300 shadow-xl rounded-2xl lg:w-1/2 ">
                <div>
                    <h1 className="text-3xl lg:text-4xl text-red-600">Error 404</h1>
                    <h1 className="text-xl lg:text-2xl">Page Not Found</h1>
                </div>
                <div className="mt-4">
                    <Link to="/"><span className="text-xl text-blue-500 hover:text-blue-700">Go Home</span></Link>
                </div>
            </div>
        </div>
    )
}
