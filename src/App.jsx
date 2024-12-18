import { useEffect, useState } from 'react'
import CustomInputField from './components/CustomInputField'
import TakeNoteModal from './components/TakeNoteModal'
import AllNotes from './components/AllNotes'
import { NotesProvider, useNote } from './NotesContext/NotesContex'

function App() {
  const [count, setCount] = useState(0)
  const [isClicked, setIsClicked] = useState(false)

  const [notes, setNotes] = useState([])


  useEffect(() => {
    console.log("Notes\n", notes)
  }, [notes])

  // const { createNote } = useNote();

  const createNote = (note) => {
    console.log("Creat note called")

    setNotes((prev) => [{ id: Date.now(), createdTime: new Date(), ...note }, ...notes])

  }
  const deleteNote = (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id))
  }

  const getNote = (id) => {
    return notes.filter((note) => note.id == id)
  }


  const updateNote = (id, title, note) => {
    setNotes((prev) =>
      prev.map((prevNote) => (prevNote.id===id?{ ...prevNote, title, note }:prevNote))
    );
  };

  return (
    <NotesProvider value={{ notes, createNote, deleteNote, updateNote, getNote }}>

      <div className='h-screen bg-gray-400 flex flex-col items-center'>
        {
          isClicked ? <TakeNoteModal setIsClicked={setIsClicked} /> : <CustomInputField setIsClicked={setIsClicked} />
        }

        <AllNotes/>
      </div>

    </NotesProvider>
  )
}

export default App
