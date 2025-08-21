import React from 'react'


import logo1 from "../../../assets/TimeLineLogo/Logo1.svg"
import logo2 from "../../../assets/TimeLineLogo/Logo2.svg"
import logo3 from "../../../assets/TimeLineLogo/Logo3.svg"
import logo4 from "../../../assets/TimeLineLogo/Logo4.svg"
import timelineImage from "../../../assets/Images/TimelineImage.png"

const timeline = [
    {
        Logo: logo1,
        heading: "Ledearship",
        Description: "Fully committed to the sucess company",
    },
    {
        Logo: logo2,
        heading: "Ledearship",
        Description: "Fully committed to the sucess company",
    },
    {
        Logo: logo3,
        heading: "Ledearship",
        Description: "Fully committed to the sucess company",
    },
    {
        Logo: logo4,
        heading: "Ledearship",
        Description: "Fully committed to the sucess company",
    },
]
const TimelineSection = () => {
    return (
        // <div>
        //     <div className='flex flex-row gap-15 items-center'>
        //         <div className='flex flex-col w-[45%] gap-8'>
        //             {
        //                 timeline.map((element,index) => {
        //                   return (
        //                     <div className='flex flex-row gap-6' key ={index}>
        //                         <div className='w-[50px] h-[50px] bg-white flex items-center'>
        //                             <img src={element.Logo}/>

        //                         </div>
        //                         <div>
        //                             <h2 className='font-semibolfdd text-[18px] '>{element.heading}</h2>
        //                             <p className='text-base'>{element.Description}</p>
        //                         </div>

        //                     </div>
        //                   )  
        //                 })
        //             }
        //         </div>

        //         <div className='relative shadow-blue-200'>
        //             <img src={timelineImage} alt="timelineImage" className='shadow-white object-cover h-fit'/>
                     
        //              <div className='absolute bg-caribbeangreen-700 flex flex-row text-white uppercase py-6
        //              left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        //                 <div className=' mx-6 flex flex-row gap-4 items-center border-r border-caribbeangreen-300'>
        //                     <p className='text-3xl font-bold'>10</p>
        //                     <p className='text-caribbeangreen-200 text-sm mx-5'>years of Experience</p>
        //                 </div>
                        
        //                 <div className='flex gap-4 items-center px-7'>
        //                      <p className='text-3xl font-bold'>250</p>
        //                     <p className='text-caribbeangreen-200 texr-sm'>Type of courses</p>
        //                 </div>
        //              </div>
        //         </div>
        //     </div>
        // </div>
<div className="w-full px-4">
  <div className="flex flex-col lg:flex-row gap-12 items-center">
    {/* Timeline text side */}
    <div className="flex flex-col w-full lg:w-[45%] gap-8">
      {timeline.map((element, index) => {
        return (
          <div className="flex flex-row gap-6" key={index}>
            <div className="w-[50px] h-[50px] bg-white flex items-center justify-center rounded-md shadow">
              <img src={element.Logo} alt="logo" className="w-8 h-8 object-contain" />
            </div>
            <div>
              <h2 className="font-semibold text-lg sm:text-xl">{element.heading}</h2>
              <p className="text-sm sm:text-base text-richblack-300">{element.Description}</p>
            </div>
          </div>
        );
      })}
    </div>

    {/* Timeline image side */}
    <div className="w-full lg:w-[55%] flex flex-col items-center">
      {/* Image */}
      <img
        src={timelineImage}
        alt="timelineImage"
        className="shadow-white object-cover w-full h-auto rounded-lg"
      />

      {/* Stats Section BELOW image */}
      <div
        className="mt-6 bg-caribbeangreen-700 flex flex-col sm:flex-row text-white uppercase py-4 sm:py-6 px-6 sm:px-10 
        rounded-lg shadow-lg justify-center items-center gap-6 sm:gap-12"
      >
        {/* First stat */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 sm:pr-6 sm:border-r border-caribbeangreen-300">
          <p className="text-2xl sm:text-3xl font-bold">10</p>
          <p className="text-caribbeangreen-200 text-xs sm:text-sm text-center sm:text-left">
            Years of Experience
          </p>
        </div>

        {/* Second stat */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 sm:pl-6">
          <p className="text-2xl sm:text-3xl font-bold">250</p>
          <p className="text-caribbeangreen-200 text-xs sm:text-sm text-center sm:text-left">
            Types of Courses
          </p>
        </div>
      </div>
    </div>
  </div>
</div>



    )
}

export default TimelineSection