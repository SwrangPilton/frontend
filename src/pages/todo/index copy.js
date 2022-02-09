import React from 'react'
import useDarkMode from '../../utils/useDarkMode'
import './index.css'

export default function Index() {
    const [colorTheme, setColorTheme] = useDarkMode();
    console.log(colorTheme)
    
    return (
        <div className='transistion duration-700 bg-black text-white h-screen'>

        {/* //     {colorTheme === 'dark' ? (
        //         <div className="dark">
        //             <div className="bg-red-500 p-10">
        //                 <h1 className="text-4xl">HELLO DARK</h1>
        //             </div>
        //         </div>
        //     ): (
        //         <div className="light">
        //             <div className="bg-green-500 p-10">
        //                 <h1 className="text-4xl">HELLO LIGHT</h1>
        //             </div>
        //         </div>
        //     )}

        //     <button className='bg-red rounded-xl shadow-xl' onClick={()=>setColorTheme(colorTheme)}>
        //         Toggle
        //     </button> */}
        <div className='px-24 w-1/2 mx-auto '>
            <div className="flex justify-between items-center">
                <h1 className='text-4xl tracking-widest uppercase'>todo</h1>
            <h1 className='text-4xl tracking-widest'>*</h1>
            </div>

            <div>
                <input type="checkbox" className='text-2xl' />
                <input className='border-2 shadow-xl w-full py-2 rounded-lg my-6' type="text" placeholder=' Create a new to-do...' />
            </div>

            <div className='relative'>
                <input type="checkbox" className='absolute text-2xl' />
                <input className='border-2 shadow-xl w-full py-2 rounded-lg my-6' type="text" placeholder=' Create a new to-do...' />
            </div>
            
        </div>
        </div>
    )
}
