import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { SiReactos } from "react-icons/si";
import Nav from './nav';

export default function Countries() {
    const [data, dataSet] = useState([])
    const [loading, loadingSet] = useState(true)
    const [region, regionSet] = useState('Oceania')
    const [name, nameSet] = useState('India')
    const [callCountry, callCountrySet] = useState(false)

    useEffect(() => {
        let regionURL = `https://restcountries.com/v3.1/region/${region}`
        let nameURL = `https://restcountries.com/v3.1/name/${name}`

        if (name === '') {
            nameSet(region)
            const fetchRegion = async () => {
                const { data } = await axios.get(regionURL)
                dataSet(data)
                loadingSet(false)
            }
            fetchRegion()
        }
        if (callCountry) {
            console.log(callCountry)
            const fetchCountry = async () => {
                const { data } = await axios.get(nameURL)
                dataSet(data)
                loadingSet(false)
            }
            fetchCountry()
        } else {
            const fetchRegion = async () => {
                const { data } = await axios.get(regionURL)
                dataSet(data)
                loadingSet(false)
            }
            fetchRegion()
        }
    }, [callCountry, name, region])

    const handleChange = (event) => {
        regionSet(event.target.value)
        // callCountrySet(false)
    }
    return (
        <div className={`bg-gray-100 dark:bg-gray-600 ${callCountry ? ' h-screen' : ''} `}>
            <Nav />
            <main className='flex flex-wrap justify-between items-center px-4 md:px-10 lg:px-20 py-8'>
                <input type="text" className='p-2 px-4 lg:w-1/4 mb-2 md:mb-0 appearance-none focus:outline-none focus:shadow-outline bg-white dark:bg-gray-400 dark:text-white rounded-md border shadow'
                    onChange={e => {
                        nameSet(e.target.value)
                        callCountrySet(true)
                    }}
                    placeholder='Search for a country...' />
                <select className=' p-2 px-4 appearance-none focus:outline-none focus:shadow-outline bg-white dark:bg-gray-400 dark:text-white rounded-md border shadow' value={region} 
                onChange={handleChange}>
                    <option value="oceania">Oceania</option>
                    <option value="asia">Asia</option>
                    <option value="africa">Africa</option>
                    <option value="americas">Americas</option>
                    <option value="europe">Europe</option>
                </select>
            </main>

            {loading && (
                <center>
                    <SiReactos className='text-4xl dark:text-white animate-spin' />
                </center>
            )}
            
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:lg:grid-cols-4 gap-10 px-4 md:px-10 lg:px-20 py-4 ${loading ? ' h-screen':''}`}>
                {data && data.map((cn, idx) => {
                    return <div key={idx} className="bg-white shadow flex flex-wrap flex-col rounded-xl">
                        <Link to={`/rest-countries/country/${cn.name.common}`}>
                            <img src={cn.flags.png} className="w-full h-60 rounded-t-lg" alt="flag" />
                            <div className='px-4 lg:px-10 w-full py-5 dark:bg-gray-500'>
                                <h1 className='text-2xl font-bold text-gray-700 dark:text-gray-50 mb-4'>{cn.name.common}</h1>
                                <p className='text-lg font-semibold text-gray-700 dark:text-gray-50 my-2'>Population : {cn.population}</p>
                                <p className='text-lg font-semibold text-gray-700 dark:text-gray-50 my-2'>Region : {cn.region}</p>
                                <p className='text-lg font-semibold text-gray-700 dark:text-gray-50 my-2'>Capital : {cn?.capital}</p>
                            </div>
                        </Link>
                    </div>
                })}
            </div>
        </div>
    )
}
