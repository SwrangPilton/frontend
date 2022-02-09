import { useState } from 'react'
import Note from './note'
import './index.css'
import CreateNote from './createNote'

export default function Index() {
    const [notes, setNotes] = useState([])

    function addNote(newNote) {
        console.log(newNote)
        setNotes(prevNotes => [...prevNotes,    newNote]);
    }

    function deleteNote(id) {
        setNotes(prevNotes => {
            return prevNotes.filter((   note, idx) => {
                return idx !== id;
            })
        })
    }



    return (
        <div className='px-10 py-10 transition-all duration-700'>
            <div className="w-1/2 mx-auto shadow-xl py-16">
                <h1 className='text-3xl px-12 '>Keeper TODO</h1>
                <CreateNote onAdd={addNote} />
            </div>

            <div className="grid grid-cols-3 gap-5 mt-10">
                {notes.map((note, idx) => {
                    return (<Note key={idx} id={idx}
                        title={note.title}
                        content={note.content}
                        onDelete={deleteNote} />)
                })}
            </div>
        </div>
    )
}
