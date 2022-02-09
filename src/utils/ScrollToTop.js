import {useEffect} from 'react'
import {useHistory} from 'react-router-dom'

export default function ScrollToTop() {
    const history = useHistory()
    useEffect(() => {
        const unlisten = history.listen((location, action) => {
            if (action !== 'POP') {
                window.scrollTo(0, 0)
            }
        })
        return () => unlisten()
    }, [history])
    return (null)
}