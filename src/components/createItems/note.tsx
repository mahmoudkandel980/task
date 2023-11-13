import React, { useState } from "react";
import Model from "../models/model";
import Backdrop from "../shared/backdrop";
import Input from "../shared/input";

import { RiDeleteBin6Fill } from "react-icons/ri";

interface NoteProps {
    label: string;
}

const Note = (props: NoteProps) => {
    const [openModel, setOpenModel] = useState(false);
    const [newNote, setNewNote] = useState("");
    const [notes, setNotes] = useState([
        "Death valley",
        "Coconut jerk",
        "Honey garlic",
        "Lemon Pepper",
    ]);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewNote(e.target.value);
    };

    const toggleModelHandler = () => {
        setOpenModel((prevState) => !prevState);
    };

    const deleteNoteHandler = (note: string) => {
        setNotes((prevState) => prevState.filter((one) => one != note));
    };

    const addNewNoteHandler = () => {
        if (!newNote) return;
        setNotes((prevState) => [...prevState, newNote]);
        setNewNote("");
    };

    return (
        <>
            <div className='flex flex-col gap-1'>
                <label className='font-[600] text-[13] text-grayText'>
                    {props.label}
                </label>
                <p className='w-full sm:min-h-12 px-4 py-2 border-[1px] outline-none border-gray rounded-md'>
                    {notes.map((note) => (
                        <span className='text-[10px] font-[500] px-3 py-1 bg-main/30 capitalize mr-1 sm:mr-3'>
                            {note}
                        </span>
                    ))}
                </p>

                <button
                    onClick={toggleModelHandler}
                    className='text-main capitalize font-[400] py-2 border-[1px] rounded-md mt-5 border-main w-36 ml-auto'
                >
                    add notes
                </button>
            </div>
            {openModel && <Backdrop onClose={toggleModelHandler} />}
            <Model header='Add Notes' showModel={openModel}>
                <>
                    <Input
                        label='Add Notes'
                        htmlFor='addNotes'
                        type='text'
                        placeholder='Enter Notes...'
                        inputbtn='add'
                        onClick={addNewNoteHandler}
                        value={newNote}
                        onChange={onChangeHandler}
                    />

                    <div className='flex flex-col w-full justify-center items-center gap-8 mt-10'>
                        {notes.length > 0 &&
                            notes.map((note) => (
                                <div
                                    key={note}
                                    className='flex items-center w-60 justify-between'
                                >
                                    <span className='font-[500] text-[14px]'>
                                        {note}
                                    </span>
                                    <button
                                        className='text-delete'
                                        onClick={deleteNoteHandler.bind(
                                            null,
                                            note
                                        )}
                                    >
                                        <RiDeleteBin6Fill size={20} />
                                    </button>
                                </div>
                            ))}
                    </div>
                </>
            </Model>
        </>
    );
};

export default Note;
