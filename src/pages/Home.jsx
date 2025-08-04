// import React from 'react'
import { Link } from "react-router-dom"
import { FaArrowRight } from "react-icons/fa"
import HighLightText from '../components/core/HomePage/HighLightText'
import CTAButton from "../components/core/HomePage/Button"
import CodeBlocks from "../components/core/HomePage/CodeBlocks"

import Banner from "../assets/Images/banner.mp4"

import TimelineSection from '../components/core/HomePage/TimelineSection'
import LearningLanguageSection from '../components/core/HomePage/LearningLanguageSection'
import InstructorSection from '../components/core/HomePage/InstructorSection'
import ExploreMore from '../components/core/HomePage/ExploreMore'
import ReviewSlider from '../components/common/ReviewSlider'
import Footer from '../components/common/Footer'


const Home = () => {
    return (
        <div>
            {/* section1 */}
            <div className='relative mx-auto flex flex-col w-11/12 items-center text-white
            justify-between max-w-maxContent'>
                <Link to={"/signup"}>

                    <div className='mt-16 p-1 mx-auto rounded-full bg-richblack-700 font-bold text-richblack-200
                    transition-all duration-200 hover:scale-95 w-fit'>
                        <div className=' flex flex-row items-center gap-rounded-full px-10 py-[5px] 
                        transition-all duration-200 group-hover:bg-richblack-900 '>
                            <p className='mr-2'> Become an Instructor</p>
                            <FaArrowRight />
                        </div>
                    </div>
                </Link>

                <div className='text-center text-4xl font-semibold flex mt-4'>
                    Empower Your Future with
                    <HighLightText text={"Coding Skills"} />

                </div>


                <div className='mt-3 w-[80%] text-center text-lg font-semibold text-richblack-300'>
                    With our online coding courses, you can learn at your own pace, from anywhere in the world  ,and get access to a wealth of resources, including hands-on projects,quizzes,and personalized fedback from instructors.
                </div>

                <div className='flex flex-row gap-7 mt-6'>
                    <CTAButton active={true} linkto={"/signup"}>
                        Learn More
                    </CTAButton>
                    <CTAButton active={false} linkto={"/login "}>
                        Book a demo
                    </CTAButton>

                </div>

                <div className='shadow-blue-200 mx-20 my-12'>
                    <video
                        muted
                        loop
                        autoPlay
                    >
                        <source src={Banner} type="video/mp4" />
                    </video>
                </div>

                {/* code section 1*/}
                <div className='mx-20'>
                    <CodeBlocks
                        position={"lg:flex-row"}
                        heading={
                            <div className='text-4xl font-semibold'>
                                Unlock Your
                                <HighLightText text={"coding potential"} />
                                with our online courses
                            </div>
                        }
                        subheading={
                            "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                        }
                        ctabtn1={{
                            btnText: "Try it yourself",
                            linkto: "/signup",
                            active: true,
                        }}
                        ctabtn2={{
                            btnText: "Learn more",
                            linkto: "/login",
                            active: false,
                        }}
                        codeblock={`<!DOCTYPE html>\n<html>\n  <head>\n    <title>Example</title>\n    <link rel="stylesheet" href="styles.css">\n  </head>\n</html>`}
                        codeColor={"text-yellow-25"}
                    />

                </div>


                {/* code section 2*/}
                <div className='mx-20'>
                    <CodeBlocks
                        position={"lg:flex-row-reverse"}
                        heading={
                            <div className='text-4xl font-semibold'>
                                Unlock Your
                                <HighLightText text={"coding potential"} />
                                with our online courses
                            </div>
                        }
                        subheading={
                            "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                        }
                        ctabtn1={{
                            btnText: "Try it yourself",
                            linkto: "/signup",
                            active: true,
                        }}
                        ctabtn2={{
                            btnText: "Learn more",
                            linkto: "/login",
                            active: false,
                        }}
                        codeblock={`<!DOCTYPE html>\n<html>\n  <head>\n    <title>Example</title>\n    <link rel="stylesheet" href="styles.css">\n  </head>\n</html>`}
                        codeColor={"text-yellow-25"}
                    />

                </div>
              
              <ExploreMore />


            </div>


            {/* section2 */}
            <div className='bg-white text-richblack-700 '>
                <div className='homepage_bg h-[310px]'>

                    <div className='w-11/12 max-w-maxContent flex flex-col  items-center gap-5 mx-auto '>
                        <div className='h-[220px]'></div>
                        <div className='flex flex-row gap-7 text-white'>
                            <CTAButton active={true} linkto={"/signup"}>
                                <div className='flex items-center gap-3'>
                                    Explore Full catalogue
                                    <FaArrowRight />
                                </div>

                            </CTAButton>
                            <CTAButton active={false} linkto={"/signup"}>
                                <div>
                                    Learn More..
                                </div>

                            </CTAButton>
                        </div>

                    </div>

                </div>

                <div className='mx-20 w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-6 '>

                    <div className=' mx-20 flex flex-row gap-4 mb-10 mt-[70px]'>
                        <div className='text-4xl font-semibold w-[60%]'>
                            Get the Skills you need for a
                            <HighLightText text={"Job that is in demand"} />
                        </div>
                        <div className='flex flex-col  gap-10 w-[30%]'>
                            <div className='text-[16px] '>
                                The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
                            </div>
                            <div className='w-[40%] '>
                                <CTAButton  active={true} linkto={"/signup"}>
                                    <div>
                                        Learn More..
                                    </div>

                                </CTAButton>
                            </div>
                        </div>


                    </div>


                  <TimelineSection />

                <LearningLanguageSection/>
                </div>

              

            </div>

            {/* section3 */}

            <div className='w-11/12 mx-auto max-w-maxContent flex-col items-center justify-between gap-8 first-lettter bg-richblack-900 text-white'>

            <InstructorSection/>

            <h2 className='text-center text-4xl font-semibold mt-10 mb-10'> review from other learners</h2>
            {/* revview slider */}
            <ReviewSlider />
               
            </div>


            {/* footer*/}

            <Footer/>


        </div>
    )
}

export default Home