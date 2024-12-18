import { createContext, useContext } from "react";

const NotesContex = createContext(
    {   
        notes : [
            {
                id:1,
                title:'Hello',
                note:'some note',
                createdTime:new Date(),
            },
        ],
        createNote: (title,note) =>{}, 
        deleteNote:( id)=>{},
        updateNote: (id,title,note) =>{},
        getNote:(id)=>{}
    }
);

export default NotesContex;

export const useNote = () => {
    return useContext(NotesContex)
}

export const NotesProvider = NotesContex.Provider


