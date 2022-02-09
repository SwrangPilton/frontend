import { useState, useEffect, useRef } from 'react'

export default function CreateNote(props) {
    const [expand, isExpand] = useState(false);
    const formNode = useRef(null);

    const [notes, setNotes] = useState({
        title: '',
        content: ''
    })

    function handleChange(e) {
        const { name, value } = e.target
        setNotes(preNotes => {
            return { ...preNotes, [name]: value }
        })
    }

    function submitNote(e) {
        // console.log(notes.title,notes.content);
        if (notes.title !== '' && notes.content !== '') {
            props.onAdd(notes);
        } else {
            alert('Please enter value');
        }
        setNotes({
            title: '',
            body: ''
        })
        e.preventDefault();
    }

    const handleClickOutside = e => {
        if (formNode.current && !formNode.current.contains(e.target)) {
            isExpand(false);
            console.log('clicked outside')
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    return (
        <div className='px-12' ref={formNode}>
            <form action="" className='w-full py-8'>
                {expand && (<input type="text" onChange={handleChange} name="title"
                    className='w-full p-2 mb-4 shadow-md' placeholder='Title' />)}
                <textarea

                    name="content"
                    onClick={() => {
                        console.log(expand)
                        isExpand(true)
                    }}
                    onChange={handleChange} className='w-full p-2 shadow-md mb-4' cols="30"
                    rows={isExpand ? 3 : 10}
                    placeholder='Content' style={{ resize: 'none' }} />
                <button onClick={submitNote} className='shadow-md rounded-md px-4 py-2' title='add new note' >Add</button>
            </form>
        </div>
    )
}
