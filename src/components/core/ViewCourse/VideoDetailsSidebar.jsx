import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { BsChevronLeft } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import IconBtn from '../../common/IconBtn';
import { useLoaderData, useLocation, useNavigate, useParams } from 'react-router-dom';

const VideoDetailsSidebar = ({ setReviewModal }) => {

    const [activeStatus, setAcitveStatus] = useState("");
    const [videobarActive, setVideobarActive] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const { sectionId, subSectionId } = useParams();
    const {
        courseSectionData,
        courseEntireData,
        totalNoOfLectures,
        completedLectures,
    } = useSelector((state) => state.viewCourse);


    useEffect(() => {
        const setActiveFlags = () => {
            if (!courseSectionData.length)
                return;
            const currentSectionIndex = courseSectionData.findIndex(
                (data) => data._id === sectionId
            )
            const currentSubSectionIndex = courseSectionData?.[currentSectionIndex]?.subSection.findIndex(
                (data) => data._id === subSectionId
            )

            const activeSubSectionId = courseSectionData[currentSectionIndex]?.subSection?.[currentSubSectionIndex]?._id;

            //set current secction here
            setAcitveStatus(courseSectionData?.[currentSectionIndex]?._id);
            //set current subsection here
            setVideobarActive(activeSubSectionId);

        }
        setActiveFlags();
    }, [courseSectionData, courseEntireData, location.pathname])

    // return (
    //     <>
    //         <div className='text-white'>
    //             {/* //for button and headings  */}
    //             <div>
    //                 {/* for button  */}
    //                 <div>
    //                     <div
    //                         onClick={() => {
    //                             navigate("/dashboard/enrolled-courses")
    //                         }}
    //                     >
    //                         Back
    //                     </div>
                       

    //                 </div>
    //                 {/* for heading  */}
    //                 <div>
    //                     <p>{courseEntireData?.courseName}</p>
    //                     <p>{completedLectures?.length}/{totalNoOfLectures}</p>
    //                 </div>
    //             </div>

    //             {/* for sections and subsections  */}
    //             <div>
    //                 {
    //                     courseSectionData.map((course, index) => (
    //                         <div
    //                             onClick={() => setAcitveStatus(course?._id)}
    //                             key={index}
    //                         >
    //                             {/* section  */}
    //                             <div>
    //                                 <div>
    //                                     {course?.sectionName}
    //                                 </div>

    //                                 {/* HW add arrow icon  */}
    //                             </div>


    //                             {/* subsection  */}
    //                             <div>
    //                                 {
    //                                    activeStatus === course?._id && (
    //                                     <div>
    //                                         {
    //                                             course.subSection.map((topic,index) =>{
    //                                                 <div
    //                                                 className={`flex gap-3 p-4 ${
    //                                                     videobarActive === topic._id
    //                                                     ? "bg-yellow-200 text-richblack-900"
    //                                                     : "bg-richblack-900 text-white "
    //                                                 }`}
    //                                                 key={index}
    //                                                 onClick={() =>{
    //                                                     navigate(
    //                                                         `/view-course/${courseEntireData?._id}/section/${course?._id}/sub-section/${topic?._id}`
    //                                                     )
    //                                                     setVideobarActive(topic?._id);
    //                                                 }}
    //                                                 >
    //                                                     <input 
    //                                                     type='checkbox'
    //                                                     checked={completedLectures.includes(topic?._id)}
    //                                                     onChange={()=>{}}
    //                                                     />
    //                                                     <span>
    //                                                         {topic.title}
    //                                                     </span>
    //                                                 </div>
    //                                             })
    //                                         }
    //                                     </div>
    //                                    )
    //                                 }
    //                             </div>
    //                         </div>
    //                     ))
    //                 }
    //             </div>
    //              <div>
    //                         <IconBtn
    //                             text="Add Review"
    //                             onClick={() => setReviewModal(true)}
    //                         />
    //                     </div>
    //         </div>

    //     </>
    // )

     return (
        <>
            <div className="flex h-[calc(100vh-3.5rem)] w-[320px] max-w-[350px] flex-col border-r-[1px] border-r-richblack-700 bg-richblack-800">
                {/* Header: Back Button, Heading, and Add Review Button */}
                <div className="mx-5 flex flex-col items-start justify-between gap-y-4 border-b border-richblack-600 py-5 text-lg font-bold text-richblack-25">
                    <div className="flex w-full items-center justify-between">
                        <div
                            onClick={() => navigate("/dashboard/enrolled-courses")}
                            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-richblack-100 p-1 text-richblack-700 transition-transform duration-200 hover:scale-90"
                            title="Back"
                        >
                            <BsChevronLeft size={24} />
                        </div>
                        <IconBtn
                            text="Add Review"
                            customClasses="ml-auto"
                            onclick={() => {
                                console.log("Add Review button clicked in Sidebar!");
                                setReviewModal(true)}}
                        />
                    </div>
                    {/* Course Title and Progress */}
                    <div className="flex flex-col gap-1">
                        <p className="text-xl font-semibold text-richblack-5">{courseEntireData?.courseName}</p>
                        <p className="text-sm font-semibold text-richblack-500">{completedLectures?.length} / {totalNoOfLectures} Lectures Completed</p>
                    </div>
                </div>

                {/* Sections and Subsections */}
                <div className="h-[calc(100vh-5rem)] overflow-y-auto">
                    {courseSectionData.map((course, index) => (
                        <div
                            className="mt-2 cursor-pointer text-sm text-richblack-5"
                            onClick={() => setAcitveStatus(course?._id)}
                            key={index}
                        >
                            {/* Section Header */}
                            <div className="flex flex-row items-center justify-between bg-richblack-600 px-5 py-4">
                                <div className="w-[70%] font-semibold">
                                    {course?.sectionName}
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className={`${activeStatus === course?._id ? "rotate-180" : "rotate-0"} transition-all duration-500`}>
                                        <IoIosArrowDown />
                                    </span>
                                </div>
                            </div>

                            {/* Subsections */}
                            <div className="transition-[height] duration-500 ease-in-out">
                                {activeStatus === course?._id && (
                                    <div className="transition-all duration-500">
                                        {course.subSection.map((topic, i) => (
                                            <div
                                                className={`flex items-center gap-3 px-5 py-2 ${
                                                    videobarActive === topic._id
                                                        ? "bg-yellow-200 font-semibold text-richblack-900"
                                                        : "hover:bg-richblack-900"
                                                }`}
                                                key={i}
                                                onClick={() => {
                                                    navigate(`/view-course/${courseEntireData?._id}/section/${course?._id}/sub-section/${topic?._id}`);
                                                    setVideobarActive(topic?._id);
                                                }}
                                            >
                                                <input
                                                    type='checkbox'
                                                    checked={completedLectures.includes(topic?._id)}
                                                    onChange={() => {}}
                                                    className="h-4 w-4 accent-yellow-200"
                                                />
                                                <span>{topic.title}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default VideoDetailsSidebar