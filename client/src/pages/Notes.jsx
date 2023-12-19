import React, { useState, useEffect } from 'react'

import NotesList from "../components/Tutorials/NotesList"
import NoteList from "../components/Tutorials/NoteList"

const Notes = () => {
    const [tab, setTab] = useState('nine')
    return (
        <> 
            <div className="tabs d-flex align-items-center gap-5 py-3 text-[20px] font-[600]">
                <h1 className= {` ${tab === 'nine' ? 'tab__active' : ''} `} onClick={() => setTab('nine')}
                
                >CSC G9</h1>
                <h1 className={` ${tab === 'ten' ? 'tab__active' : ''} `} onClick={() => setTab('ten')}>CSC G10</h1>
            </div>

            {
                tab === 'nine' ? (<div className='tab__content'>
                    <div className="xl:w-[470px] mx-auto">
                        <h2 className="heading text-center"> Computer Science 9</h2>                        
                    </div>
                    <NotesList />
                </div>
                ) : (
                    <div className="tab__content">
                        <div className="xl:w-[470px] mx-auto">
                        <h2 className="heading text-center"> Computer Science 10</h2>                        
                    </div>
                    <NoteList />
                    </div>
                )
            }            
        </>
    )
}
export default Notes