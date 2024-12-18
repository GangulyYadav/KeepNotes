import moment from 'moment';
import React, { useState, useEffect } from 'react';
import { useNote } from '../NotesContext/NotesContex';

function NotesDetail({ id, setIsNoteModalVisible }) {
    const { updateNote, notes } = useNote();

    const [isEditable, setIsEditable] = useState(false);
    const [currentNote, setCurrentNote] = useState({ title: '', note: '' });
    const [tempNote, setTempNote] = useState({ title: '', note: '' });


    useEffect(() => {
        const note = notes.find((note) => note.id === id);
        if (note) {
            setTempNote({ title: note.title, note: note.note });
        }
    }, [])

    useEffect(() => {
        const note = notes.find((note) => note.id === id);
        if (note) {
            setCurrentNote({ title: note.title, note: note.note });
        }
    }, [id, notes]);


    const handleTitleChange = (e) => {
        setCurrentNote((prev) => ({ ...prev, title: e.target.value }));
    };

    const handleNoteChange = (e) => {
        setCurrentNote((prev) => ({ ...prev, note: e.target.value }));
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 relative">
                <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-black"
                    onClick={() => setIsNoteModalVisible(false)}
                >
                    ✖
                </button>

                {isEditable ? (
                    <>
                        <input
                            name="title"
                            value={currentNote.title}
                            onChange={handleTitleChange}
                            id="title"
                            placeholder="Enter title"
                            className="w-full p-2 text-lg font-bold border-b-2 border-gray-300 focus:outline-none focus:border-orange-400 mb-4"
                        />
                        <textarea
                            name="note"
                            value={currentNote.note}
                            onChange={handleNoteChange}
                            id="note"
                            placeholder="Enter note..."
                            className="w-full p-2 h-32 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-400 resize-none"
                        />
                    </>
                ) : (
                    <>
                        <h1 className="text-2xl font-bold text-orange-600 mb-4">{currentNote.title}</h1>
                        <p className="text-gray-700 mb-4">{currentNote.note}</p>
                    </>
                )}

                <p className="text-sm text-gray-500 mb-4">
                    {moment(notes.find((note) => note.id === id)?.createdTime).format('DD-MM-YYYY')}
                </p>

                <div className="flex justify-end space-x-4">
                    <button
                        className={`px-4 py-2 rounded-lg ${isEditable
                            ? 'bg-gray-300 text-gray-700 hover:bg-gray-400'
                            : 'bg-blue-500 text-white hover:bg-blue-600'
                            }`}
                        onClick={() => setIsEditable(!isEditable)}
                    >
                        {isEditable ? 'Cancel' : 'Edit'}
                    </button>
                    <button
                        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                        onClick={() => {
                            if (tempNote.title != currentNote.title || tempNote.note != currentNote.note) {
                                console.log("Update Called")
                                updateNote(id, currentNote.title, currentNote.note);
                            }
                            setIsEditable(false);
                            setIsNoteModalVisible(false);
                        }}
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}

export default NotesDetail;
