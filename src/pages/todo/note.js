import React from 'react'
import { AiFillDelete } from "react-icons/ai";

export default function note(props) {
    function handleClick() {
        props.onDelete(props.id)
    }

    return (
        <div className='shadow-md px-4 py-5'>
            <h1 className='capitalize tracking-wider'>{props.title}</h1>
            <p className='text-lg'>{props.content}</p>
            <AiFillDelete onClick={handleClick}
                className='text-2xl float-right hover:text-red-600 cursor-pointer' />
        </div>
    )
}
