import React from "react";
import { notes } from "./../../assets/data/notes";
import NotesCard from "./NotesCard";


const NotesList = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            {notes.map((item, index) => (
                <NotesCard item={item} index = {index} key={index} />
            ))}
        </div>
    )
}
export default NotesList