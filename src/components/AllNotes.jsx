import React, { useState } from 'react'
import NotesDetail from './NotesDetail';
import { useNote } from '../NotesContext/NotesContex';
import { FaRegTrashAlt } from 'react-icons/fa';

export default function AllNotes() {
  const { notes,deleteNote } = useNote()
  console.log("#####Notes", notes);
  const [isNoteModalVisible, setIsNoteModalVisible] = useState(false)

  const [id, setId] = useState(0)
  console.log(isNoteModalVisible)
  return (
    <div className='flex justify-start items-center h-1/3 bg-white rounded-xl shadow-2xl w-1/2 mt-10 p-5'>


      {
        notes.map((item) => (
          <div className='rounded-xl shadow-inner bg-gray-300 h-full w-1/3 m-4 ' key={item?.id}
            onClick={() => {
              setId(item?.id)
              setIsNoteModalVisible(!isNoteModalVisible)
            }
            }
          >
            <p className='p-5'>{item?.title}</p>
            <p className='pl-5'>{item?.note}</p>
            <div className='p-5 w-full px-40 text-right'>
              <FaRegTrashAlt className='text-red-600' onClick={()=>deleteNote(item?.id)}/>
            </div>
          </div>
        ))
      }

      {
        isNoteModalVisible && <NotesDetail notes={notes} id={id} setIsNoteModalVisible={setIsNoteModalVisible} isNoteModalVisible={isNoteModalVisible} />
      }


      {/* <button name="changeModal"
        onClick={() => {
         
        }}
        className='bg-white text-red-500  rounded-xl shadow-2xl  absolute top-1/3 right-1/4 mr-5'
      >
        X
      </button> */}

    </div>
  )
}
