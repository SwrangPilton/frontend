import { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import cart from './images/cart.jpg'
import avatar from './images/avatar.png'

export default function Nav() {
    const [navOpen, setNavOpen] = useState(true);
    const [isScrollable, setIsScrollable] = useState(false)

    const toggleNav = () => {
        setNavOpen(!navOpen)
        setIsScrollable(!isScrollable)
    }
    const closeNav = () => {
        setNavOpen(false)
    }
    // useEffect(() => {
    //     document.body.classList.toggle('body-fixed', isScrollable);
    // }, [isScrollable])

    return (
        <nav className={`flex flex-wrap px-6 lg:px-16 justify-between items-center py-4 shadow-md`}>
            <ul className="flex flex-wrap flex-row items-center ">
                <div className="flex flex-wrap flex-row items-end">
                    <AiOutlineMenu className="block lg:hidden text-2xl lg:text-3xl mr-3" onClick={toggleNav} />
                    <h1 className="text-2xl lg:text-3xl font-bold mr-8">sneakers</h1>
                </div>
                <div className={`hidden lg:block ${navOpen ? ' block ' : ' hidden '}`}>
                    <a href="#!" className="mr-4 hover:text-red-500" onClick={closeNav}>Collections</a>
                    <a href="#!" className="mr-4 hover:text-red-500" onClick={closeNav}>Men</a>
                    <a href="#!" className="mr-4 hover:text-red-500" onClick={closeNav}>Women</a>
                    <a href="#!" className="mr-4 hover:text-red-500" onClick={closeNav}>About</a>
                    <a href="#!" className="mr-4 hover:text-red-500" onClick={closeNav}>Contact</a>
                </div>
            </ul>

            <ul className="flex flex-wrap flex-row items-center justify-end">
                <img src={cart} className="cursor-pointer w-5 lg:w-6 mr-4 " alt="cart" />
                <img src={avatar} className="cursor-pointer w-1/6 lg:w-2/6 h-1/2 rounded-full" alt="avatar" />
            </ul>

            <div className={`absolute lg:hidden bg-white shadow-2xl-red text-black top-0 left-0 h-screen w-3/4 pl-4 
            ${navOpen ? ' block ' : 'hidden'}`}>
                <AiOutlineClose className="block lg:hidden text-3xl mr-3 mt-5" onClick={closeNav} />
                <div className="flex flex-col justify-start mt-10">
                    <a href="#!" className="mb-4 text-2xl font-semibold hover:text-red-500" onClick={closeNav}>Collections</a>
                    <a href="#!" className="mb-4 text-2xl font-semibold hover:text-red-500" onClick={closeNav}>Men</a>
                    <a href="#!" className="mb-4 text-2xl font-semibold hover:text-red-500" onClick={closeNav}>Women</a>
                    <a href="#!" className="mb-4 text-2xl font-semibold hover:text-red-500" onClick={closeNav}>About</a>
                    <a href="#!" className="mb-4 text-2xl font-semibold hover:text-red-500" onClick={closeNav}>Contact</a>
                </div>
            </div>

            {/* <div className={`absolute lg:hidden bg-white text-black w-3/5 top-16 left-0`}>
                <div className="relative">
                    <h1 className="text-2xl font-semibold">Cart</h1>
                    <hr />
                    <h1 className="text-xl text-center text-gray-500 my-20">Your cart is empty</h1>
                    <button className="text-white bg-red-500 py-3 px-6 rounded-xl text-xl">Checkout</button>
                </div>
            </div> */}
        </nav>
    )
}
