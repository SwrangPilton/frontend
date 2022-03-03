import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <nav className="shadow-xl fixed w-screen z-10 bg-white flex items-center justify-between px-4 xl:px-40">
            <Link to="/" className="text-xl md:text-2xl py-3 capitalize font-semibold">Frontend Mentor Solutions</Link>
            <Link to="/about" className="name text-2xl tracking-tighter hover:text-red-500 duration-500">Pilton</Link>
        </nav>
    )
}
