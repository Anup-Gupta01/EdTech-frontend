// import React from 'react'
// import CTAButton from "../HomePage/Button"
// // import HighLightText from './HighLightText'
// import { FaArrowRight } from "react-icons/fa"
// import { TypeAnimation } from 'react-type-animation'


// const CodeBlocks = ({ position, heading, subheading, ctabtn1, ctabtn2, codeblock, backgroundGradient, codeColor }) => {

//     return (
//         <div className={`flex ${position} my-20 justify-between gap-40 `}>
//             {/*section 1*/}
//             <div className='w-[80%] flex flex-col gap-8'>
//                 {heading}
//                 <div className='text-richblack-300 font-bold '>
//                     {subheading}
//                 </div>

//                 <div className='flex gap-7 mt-7'>
//                     <CTAButton active={ctabtn1.active} linkto={ctabtn1.linkto}>
//                         <div className='flex gap-2 items-center'>
//                             {ctabtn1.btnText}
//                             <FaArrowRight />
//                         </div>
//                     </CTAButton>


//                     <CTAButton active={ctabtn2.active} linkto={ctabtn2.linkto}>
//                         <div className='flex gap-2 items-center'>
//                             {ctabtn2.btnText}

//                         </div>
//                     </CTAButton>

//                 </div>

//             </div>

//             {/* section2 */}

//             <div className='h-fit  flex flex-row text-10[px] w-[100%] py-5 lg;[500px] '>
//                 {/* HW: _>BG GRADEINT */}
//                 <div className='text-center flex flex-col w-[10%] text-richblack-400 font-inter font-bold'>
//                     <p>1</p>
//                     <p>2</p>
//                     <p>3</p>
//                     <p>4</p>
//                     <p>5</p>
//                     <p>6</p>
//                     <p>7</p>
//                     <p>8</p>
//                     <p>9</p>
//                     <p>10</p>
//                     <p>11</p>
//                 </div>

//                 <div className={`w-[90%] flex flex-col gap-2 font-bold font-mono ${codeColor} pr-2'`}>
//                     <TypeAnimation
//                         sequence={[codeblock, 2000, ""]}
//                         repeat={Infinity}
//                         cursor={true}
//                         style={{
//                             whiteSpace: "pre-line",
//                             display: "block",
//                         }}
//                         omitDeletionAnimation={true}
//                     />

//                 </div>

//             </div>


//         </div>
//     )
// }

// export default CodeBlocks


import React from 'react'
import CTAButton from "../HomePage/Button"
// import HighLightText from './HighLightText'
import { FaArrowRight } from "react-icons/fa"
import { TypeAnimation } from 'react-type-animation'

const CodeBlocks = ({ position, heading, subheading, ctabtn1, ctabtn2, codeblock, backgroundGradient, codeColor }) => {

    return (
        <div className={`flex flex-col lg:flex-row ${position} my-10 lg:my-20 justify-between gap-10 lg:gap-40`}>
            {/* section 1 */}
            <div className='w-full lg:w-[80%] flex flex-col gap-6 lg:gap-8'>
                {heading}
                <div className='text-richblack-300 font-bold text-sm sm:text-base md:text-lg'>
                    {subheading}
                </div>

                <div className='flex flex-col sm:flex-row gap-4 sm:gap-7 mt-5 lg:mt-7'>
                    <CTAButton active={ctabtn1.active} linkto={ctabtn1.linkto}>
                        <div className='flex gap-2 items-center'>
                            {ctabtn1.btnText}
                            <FaArrowRight />
                        </div>
                    </CTAButton>

                    <CTAButton active={ctabtn2.active} linkto={ctabtn2.linkto}>
                        <div className='flex gap-2 items-center'>
                            {ctabtn2.btnText}
                        </div>
                    </CTAButton>
                </div>
            </div>

            {/* section 2 */}
            <div className='h-fit flex flex-row text-[10px] w-full lg:w-[100%] py-5 lg:max-w-[500px] overflow-x-auto'>
                {/* Line numbers */}
                <div className='text-center flex flex-col w-[10%] text-richblack-400 font-inter font-bold text-xs sm:text-sm md:text-base'>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                    <p>6</p>
                    <p>7</p>
                    <p>8</p>
                    <p>9</p>
                    <p>10</p>
                    <p>11</p>
                </div>

                {/* Code block */}
                <div className={`w-[90%] flex flex-col gap-2 font-bold font-mono ${codeColor} pr-2 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl`}>
                    <TypeAnimation
                        sequence={[codeblock, 2000, ""]}
                        repeat={Infinity}
                        cursor={true}
                        style={{
                            whiteSpace: "pre-line",
                            display: "block",
                        }}
                        omitDeletionAnimation={true}
                    />
                </div>
            </div>
        </div>
    )
}

export default CodeBlocks
