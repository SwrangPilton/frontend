import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Nav from './nav';
import { BsArrowLeft } from "react-icons/bs";
import { SiReactos } from "react-icons/si";

export default function Country() {
    const { name } = useParams()

    const [data, dataSet] = useState([])
    const [loading, loadingSet] = useState(true)
    let url = `https://restcountries.com/v3.1/name/${name}`
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(url)
            console.log(data[0])
            dataSet(data[0])
            loadingSet(false)
        }
        fetchData()
    }, [name, url])

    const { name: Name, population } = data

    return (
        <div className='bg-gray-100 dark:bg-gray-600 '>
            <Nav />
            <div className="h-screen">
                <div className="px-4 md:px-10 lg:px-20 py-8">
                    <Link to='/rest-countries'>
                        <button className='py-2 px-5 shadow hover:shadow-lg border text-lg'>
                            <div className="flex flex-wrap flex-row items-center dark:text-white">
                                <BsArrowLeft className='mr-2' />
                                Back
                            </div>
                        </button>
                    </Link>
                </div>

                {loading && (
                    <center>
                        <SiReactos className='text-4xl dark:text-white animate-spin' />
                    </center>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 px-4 md:px-10 lg:px-20 py-8 ">
                    {data && loading === false && (
                        <>
                            <img src={data.flags?.png} className="w-full h-full max-h-96 mb-6 lg:mb-0" alt="flag" />
                            <div className='flex flex-col justify-center '>
                                <h1 className="text-2xl font-bold text-gray-700 dark:text-white my-4 lg:mb-6 lg:mt-0">{Name.common}</h1>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5">
                                    <div>
                                        <p className="text-lg mb-2 font-semibold text-gray-600 dark:text-white">Native Name : <span
                                            className='font-normal'>{data.name.official}</span></p>
                                        <p className="text-lg mb-2 font-semibold text-gray-600 dark:text-white">Population : <span
                                            className='font-normal'>{population}</span></p>
                                        <p className="text-lg mb-2 font-semibold text-gray-600 dark:text-white">Region : <span
                                            className='font-normal'>{data.region}</span></p>
                                        <p className="text-lg mb-2 font-semibold text-gray-600 dark:text-white">Sub Region : <span
                                            className='font-normal'>{data.subregion}</span></p>
                                        <p className="text-lg mb-2 font-semibold text-gray-600 dark:text-white">Capital : <span
                                            className='font-normal'>{data.capital}</span></p>
                                    </div>
                                    <div>
                                        <p className="text-lg mb-2 font-semibold text-gray-600 dark:text-white">Top Level Domain : <span
                                            className='font-normal'>{data.name.official}</span></p>
                                        <p className="text-lg mb-2 font-semibold text-gray-600 dark:text-white">Currencies : <span
                                            className='font-normal'>{Object.keys(data.currencies)[0]}</span></p>
                                        <p className="text-lg mb-2 font-semibold text-gray-600 dark:text-white">Languages :
                                            {Object.values(data.languages).map((v, idx) => (
                                                <span className='font-normal' key={idx}> {v} </span>
                                            ))}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}

                    {/* <div>
                                <h1 className='text-xl font-semibold text-gray-700'>Border Countries :
                                    {data.borders.map((b, idx) => <span>{b}</span>)} </h1>
                            </div> */}
                </div>
                <div className=""></div>
            </div>
        </div>
    )
}
