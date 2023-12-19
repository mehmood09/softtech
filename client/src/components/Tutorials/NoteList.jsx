import React from "react";
import { note } from "./../../assets/data/note";
import NotesCard from "./NotesCard";


const NoteList = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            {note.map((item, index) => (
                <NotesCard item={item} index = {index} key={index} />
            ))}
        </div>
    )
}
export default NoteList