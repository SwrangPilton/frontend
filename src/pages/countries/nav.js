import { useEffect } from 'react'
import useDarkMode from '../../utils/useDarkMode';
import { Link } from 'react-router-dom';
import { IoMoonOutline, IoMoonSharp } from "react-icons/io5";

export default function Nav() {
    const [colorTheme, setTheme] = useDarkMode()
    useEffect(() => {
        if (colorTheme === 'dark') {
            document.body.classList.add('dark')
            document.body.classList.remove('light')
        } else {
            document.body.classList.remove('dark')
            document.body.classList.add('light')
        }
        console.log(colorTheme)
    }, [colorTheme])

    const RenderButton = () => {
        return (
            <button className='text-lg'
                onClick={() => setTheme(colorTheme)}>
                <div className="flex flex-wrap flex-row items-center dark:text-white">
                    {colorTheme === 'dark' ? (<IoMoonSharp className='mr-2' />) : (
                        <IoMoonOutline className='mr-2 dark:text-black' />
                    )}
                    Dark Mode
                </div>
            </button>
        )
    }
    return (
        <nav className='flex flex-wrap justify-between items-center px-4 md:px-10 lg:px-20 py-4 shadow-lg font-semibold  dark:bg-gray-600'>
            <Link to="/rest-countries" className="mb-2 md:mb-0">
                <h1 className='text-2xl dark:text-gray-50'>Where in the world ?</h1>
            </Link>
            <RenderButton />
        </nav>
    )
}
