import {useState, useEffect} from 'react'
import './index.css'
import notes from './note'

export default function Index() {
    const [content, setContent]=useState(localStorage.content)    
    localStorage.setItem('content',content);
    const [finish, setFinish]=useState(false);
    const [ans, setAns]=useState(['hello world'])
    // useEffect(() => {
    //     // console.log(setContent)
    // }, [])

    // const ans=['ans', 'keys'];

    // const handleSubmit=(e)=>{
    //     e.preventDefault();
    //     console.log(content)
    //     setAns([...ans, content])
    //     setContent('')
    //     console.log('content added')
    // }

    const [title, setTitle]=useState('')
    const [body, setBody]=useState('')
    const handleSubmit=(e)=>{
        e.preventDefault();
        notes.push({title:title, body:body});
        setTitle('')
        setBody('')
        console.log(notes)
    }

    return (
        <div className='transistion duration-700 bg-black text-white h-screen'>
            <h1>This is a test</h1>
            <form action="">
            <input type="text" value={title} onChange={e=>setTitle(e.target.value)} className='text-black' placehodler="Title" name="" id="" />
            <br />
            <input type="text" value={body} onChange={e=>setBody(e.target.value)} className='text-black mt-10' placehodler=" Body" name="" id="" />
            <button type='submit' onClick={handleSubmit}>submit</button>
            </form>

            {notes.map((a, idx)=>{ 
                return (
                    <div key={idx}>
                    <h1  onClick={()=>{setFinish(!finish)}} 
                    className={`text-3xl ${finish} ? 'line-through' : '' ` }>{a.title}</h1>
                    <p className='text-lg'>{a.body}</p>   
                    </div>
                ) 
                
            })}
        </div>
    )
}
