import React, { useState } from 'react'
import { useNote } from '../NotesContext/NotesContex'

function TakeNoteModal(props) {
    const { setIsClicked } = props

    const { createNote } = useNote();


    const [title,setTitle] = useState('')
    const [note,setNote]= useState('')

    const [id,setId] = useState(Date.now())


    return (
        <div className='flex flex-col justify-center items-center h-1/3 bg-white rounded-xl shadow-2xl w-1/2 mt-10 p-5'>
            <input type="text" name="title" id={Date.now()} placeholder='Title' className='bg-gray-200 p-5 mb-5 rounded-xl' value={title} onChange={(e)=>setTitle(e.target.value)} />
            <input type="text" name="note" id={Date.now()} placeholder='Note' className='bg-gray-200 p-5 mb-5 rounded-xl h-1/2' 
             value={note} onChange={(e)=>setNote(e.target.value)}
            />

            <button name="changeModal"
                onClick={() => {
                    createNote({title,note})
                    setIsClicked(false)
                }}
                className='bg-white text-red-500  rounded-xl shadow-2xl  absolute top-1/3 right-1/4 mr-5'
            >
                X
            </button>

        </div>
    )
}

export default TakeNoteModal