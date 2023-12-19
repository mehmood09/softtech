import React from 'react'
import { note } from './../../assets/data/note'
import TutorialItem from './TutorialItem';

const Tutorials = () => {
  return (
    <>
         <ul className='mt-[38px]'>
            {note.map((item, index) =>(
                <TutorialItem item={item} key={index} />
            ))}
        </ul>
    </>
  )
}
export default Tutorials