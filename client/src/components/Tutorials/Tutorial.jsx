import React from 'react'
import { notes } from './../../assets/data/notes'
import TutorialItem from './TutorialItem';


const Tutorial = () => {
  return (
    <>
         <ul className='mt-[38px]'>
            {notes.map((item, index) =>(
                <TutorialItem item={item} key={index} />
            ))}
        </ul>
    </>
  )
}
export default Tutorial