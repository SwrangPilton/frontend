import '../stats.css'
import { Link } from "react-router-dom";

function Card({ data }) {
    const { title, html, css, js, level, levelName, text, imgURI, location } = data

    const clc = (level) => {
        // getColorLevelClass
        if (level === 1) return 'newbie--text'
        if (level === 2) return 'junior--text'
        if (level === 3) return 'intermediate--text'
        if (level === 4) return 'advanced--text'
        if (level === 5) return 'guru--text'
        return ''
    }

    const bgClc = (level) => {
        // getColorLevelClass
        if (level === 1) return 'newbie--bg'
        if (level === 2) return 'junior--bg'
        if (level === 3) return 'intermediate--bg'
        if (level === 4) return 'advanced--bg'
        if (level === 5) return 'guru--bg'
        return ''
    }

    const renderLevel = (level, levelName) => {
        return (
            <div>
                <h1 className={`text-md xl:text-lg font-semibold newbie ${clc(level)}`}>
                    <span className={`mr-2 ${bgClc(level)} text-white px-3
                    py-1 rounded-md`}>{level}</span>{levelName}</h1>
            </div>)
    }

    return (
        <>
            <div className="bg-white rounded-xl border-2 border-gray-100 shadow-xl hover:shadow-2xl-red duration-400 ease-linear">
                <Link to={location}>
                    <div className="px-2 py-3 bg-gray-100 rounded-tl-xl rounded-tr-xl overflow-hidden
                h-60 xl:h-72 w-100 flex items-center justify-center">
                        <img className="transform hover:scale-150 
                    duration-300 h-60 xl:h-72 py-4"
                            src={process.env.PUBLIC_URL + imgURI} alt="" />
                    </div>

                    <div className="flex flex-col p-6 flex-wrap">
                        <Link to={location} className="text-2xl font-semibold hover:text-red-600 duration-500 capitalize">{title}</Link>

                        <div className="flex flex-wrap flex-row justify-between my-4">
                            <div className="flex flex-wrap flex-row">
                                <h1 className="mr-2 text-md xl:text-lg font-bold html">{html}</h1>
                                <h1 className="mr-2 text-md xl:text-lg font-bold css">{css}</h1>
                                <h1 className="mr-2 text-md xl:text-lg font-bold js">{js}</h1>
                            </div>
                            {renderLevel(level, levelName)}
                        </div>
                        <p className="my-2 tracking-tighter">{text}</p>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Card
