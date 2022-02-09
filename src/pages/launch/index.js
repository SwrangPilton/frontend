import { useState } from 'react'
import './index.css'
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare } from "react-icons/ai";


export default function Index() {
    const [days, setDays] = useState(0)
    const [hours, sethours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const [expired, isExpired] = useState(false)

    var countDownDate = new Date("June 5, 2022 15:37:25").getTime();
    // console.log(countDownDate)

    let x = function timer() {
        setInterval(function () {
            var now = new Date().getTime();
            var distance = countDownDate - now;
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setDays(days)
            sethours(hours)
            setMinutes(minutes)
            setSeconds(seconds)

            if (distance < 0) {
                clearInterval(x);
                isExpired(true)
            }
        }, 1000)
    }
    x()

    return (
        <div className='lg:h-screen flex flex-col items-center bg'>
            <div className="lg:w-3/4 mx-auto text-center my-36">
                {expired && (
                    <div className="">
                        <h1 className='text-6xl font-semibold tracking-widest mb-6'>EXPIRED</h1>
                        <h1 className='text-4xl text-red-500'>Jan 5, 2022 15:37:25</h1>
                    </div>
                )}
                {!expired && (
                    <div>
                        <h1 className='text-3xl lg:text-4xl font-semibold uppercase tracking-widest mb-12'>We're launching soon</h1>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 px-5 lg:px-0">
                            <div className='mb-4 lg:mb-0'>
                                <h1 className='card-bg rounded-xl text-5xl md:text-6xl lg:text-8xl font-bold py-8 px-4 text-red-500'>{days}</h1>
                                <p className='text-lg lg:text-xl mt-2 lg:mt-5 lg:font-semibold tracking-wider'>DAYS</p>
                            </div>

                            <div className='mb-4 lg:mb-0'>
                                <h1 className='card-bg rounded-xl text-5xl md:text-6xl lg:text-8xl font-bold py-8 px-4 text-red-500'>{hours}</h1>
                                <p className='text-lg lg:text-xl mt-2 lg:mt-5 lg:font-semibold tracking-wider'>HOURS</p>
                            </div>

                            <div className='mb-4 lg:mb-0'>
                                <h1 className='card-bg rounded-xl text-5xl md:text-6xl lg:text-8xl font-bold py-8 px-4 text-red-500'>{minutes}</h1>
                                <p className='text-lg lg:text-xl mt-2 lg:mt-5 lg:font-semibold tracking-wider'>MINUTES</p>
                            </div>

                            <div className='mb-4 lg:mb-0'>
                                <h1 className='card-bg rounded-xl text-5xl md:text-6xl lg:text-8xl font-bold py-8 px-4 text-red-500'>{seconds}</h1>
                                <p className='text-lg lg:text-xl mt-2 lg:mt-5 lg:font-semibold tracking-wider'>SECONDS</p>
                            </div>

                            {/* <div className=''>
                                <div className=" bg-black rounded-2xl">
                                    <h1 className='text-sm font-bold bg-gray-700 text-red-500 px-3 py-8 rounded-t-xl rounded-b-2xl'>&nbsp;</h1>
                                    <h1 className='text-7xl absolute left-0 right-0 font-bold text-red-500'>{days}</h1>
                                    <div className="absolute text-center mx-auto">
                                        <h1 className='relative w-screen text-7xl font-bold text-red-500'>{days}</h1>
                                    </div>

                                    <h1 className='text-sm font-bold bg-gray-600 text-red-500 px-3 py-8 rounded-b-xl rounded-t-2xl'>&nbsp;</h1>
                                    <p className='pt-1'>&nbsp;</p>
                                </div>
                                <h1 className='pt-3 text-xl tracking-widest uppercase text-black'>DAYS</h1>
                            </div> */}

                            {/* <div>
                                <div className="relative bg-black rounded-2xl">
                                    <h1 className='text-sm font-bold bg-gray-500 text-red-500 px-3 py-8 rounded-2xl'>&nbsp;</h1>
                                    <h1 className='text-6xl absolute left-0 right-0 font-bold text-red-500'>{hours}</h1>
                                    <h1 className='text-sm font-bold bg-gray-400 text-red-500 px-3 py-8 rounded-2xl'>&nbsp;</h1>
                                    <h1 className='pt-1'>&nbsp;</h1>
                                </div>
                                <h1 className='pt-3 text-xl tracking-widest uppercase text-black'>HOURS</h1>
                            </div>

                            <div>
                                <div className="relative bg-black rounded-2xl">
                                    <h1 className='text-sm font-bold bg-gray-500 text-red-500 px-3 py-8 rounded-2xl'>&nbsp;</h1>
                                    <h1 className='text-6xl absolute left-0 right-0 font-bold text-red-500'>{days}</h1>
                                    <h1 className='text-sm font-bold bg-gray-400 text-red-500 px-3 py-8 rounded-2xl'>&nbsp;</h1>
                                    <h1 className='pt-1'>&nbsp;</h1>
                                </div>
                                <h1 className='pt-3 text-xl tracking-widest uppercase text-black'>DAYS</h1>
                            </div>

                            <div>
                                <div className="relative bg-black rounded-2xl">
                                    <h1 className='text-sm font-bold bg-gray-500 text-red-500 px-3 py-8 rounded-2xl'>&nbsp;</h1>
                                    <h1 className='text-6xl absolute left-0 right-0 font-bold text-red-500'>{days}</h1>
                                    <h1 className='text-sm font-bold bg-gray-400 text-red-500 px-3 py-8 rounded-2xl'>&nbsp;</h1>
                                    <h1 className='pt-1'>&nbsp;</h1>
                                </div>
                                <h1 className='pt-3 text-xl tracking-widest uppercase text-black'>DAYS</h1>
                            </div> */}

                        </div>
                    </div>
                )}
            </div>
            <footer className='flex flex-wrap my-20 cursor-pointer'>
                <AiFillFacebook className='text-4xl text-gray-500 hover:text-red-400' />
                <AiFillInstagram className='text-4xl text-gray-500 hover:text-red-400 mx-4' />
                <AiFillTwitterSquare className='text-4xl text-gray-500 hover:text-red-400' />
            </footer>
        </div>
    )
}
