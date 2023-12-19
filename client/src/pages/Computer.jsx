import React from 'react'
import TutorialList from "../components/Tutorials/Tutorial";
import TutorialLists from "../components/Tutorials/Tutorials";

const Computer = () => {
  return (
    <div>
         <section>
      <div className="container">
        <div className="flex justify-between gap-[50] lg:gap-0">
          <div className="w-1/2 hidden md:block">
          <h4 className="heading"> Grade 10</h4>
          <TutorialLists />
          </div>
          <div className="w-full md:w-1/2">
            <h4 className="heading"> Grade 9</h4>
            <TutorialList />
          </div>
        </div>
      </div>
     </section>
    </div>
  )
}
export default Computer
