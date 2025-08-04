import React from 'react'
import RenderSteps from './RenderSteps'


export default function AddCourse(){
    return (
        <>
        <div className='text-white flex flex-row gap-2'>
            <div className='w-[60%] flex flex-col '>
             <h1>Add Course</h1>
             <div className='flex flex-col gap-3'>
                <RenderSteps />
             </div>
            </div>
            <div className='w-[40%] m-2 h-fit p-3 space-x-2 border rounded-md  flex flex-col items-center text-richblack-800 bg-richblack-400 '>
                <p  className='text-2xl font-bold text-white'>⚡ Code Upload Tips</p>
                <ul className='list-disc pl-5 text-white '>
                     <li>Set the Course Price option or make it free.</li>
            <li>Standard size for the course thumbnail is 1024x576.</li>
            <li>Video section controls the course overview video.</li>
            <li>Course Builder is where you create & organize a course.</li>
            <li>
              Add Topics in the Course Builder section to create lessons,
              quizzes, and assignments.
            </li>
            <li>
              Information from the Additional Data section shows up on the
              course single page.
            </li>
            <li>Make Announcements to notify any important</li>
            <li>Notes to all enrolled students at once.</li>
                </ul>
            </div>

        </div>
        </>
    )
}

