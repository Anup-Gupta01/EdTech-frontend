import React, { useState } from "react";
import { HomePageExplore } from "../../../data/homepage-explore";
import HighLightText from "./HighLightText";
// import {useState} from 'react';
import CourseCard from "./CourseCard";
const tabsName = [
  "Free",
  "New to Coding",
  "Most Popular",
  "Skill Paths",
  "Career Paths",
];

const ExploreMore = () => {
  const [currentTab, setCurrentTab] = useState(tabsName[0]);
  const [courses, setCourses] = useState(HomePageExplore[0].courses);
  const [currentCard, setCurrentCard] = useState(
    HomePageExplore[0].courses[0].heading
  );

  const setMyCards = (value) => {
    setCurrentTab(value);
    const result = HomePageExplore.filter((course) => course.tag === value);
    setCourses(result[0].courses);
    setCurrentCard(result[0].courses[0].heading);
  };

  // return (
  //     <div className=''>
  //         <div className='flex justify-center text-4xl font-semibold  mt-4 items-center'>
  //             Unlock the
  //             <HighLightText text={"Power of Code"} />

  //         </div>

  //         <p className='text-center text-richblack-300 text-lg text-[16px] mt-3'>Learn to build anything you can imagine</p>

  //         <div className='mt-5 flex flex-row rounded-full bg-richblack-800 mb-5 border-richblack-100 px-1 py-1 '>
  //             {
  //                 tabsName.map((element,index) =>{
  //                     return (
  //                         <div
  //                         className={`text-[16px] flex flex-row items-center gap-2 ${currentTab === element ? "bg-richblack-900 text-white font-medium" :
  //                             "text-richblack-300"
  //                         } rounded-full transition-all duration-200 cursor-pointer
  //                         hover:bg-richblack-900 hover:text-richblack-5 px-7 py-2`}
  //                         key={index}
  //                         onClick={() => setMyCards(element)}
  //                         >
  //                          {element}
  //                         </div>
  //                     )
  //                 })
  //             }
  //         </div>

  //      <div className='lg:h-[150px]'>
  //         {/* course card ka gr  */ }
  //         <div className='absolute flex flex-row gap-6 justify-between mt-10  -translate-x-12 translate-y-2'>
  //             {
  //                 courses.map((element,index) =>{
  //                     return(
  //                         <CourseCard
  //                         className='flex flex-row items-center '
  //                         key={index}
  //                         cardData ={element}
  //                         currentCard={currentCard}
  //                         setCurrentCard ={setCurrentCard}
  //                         />
  //                     )
  //                 })
  //             }
  //         </div>

  //      </div>

  //     </div>
  // )
  return (
    <div className="w-full px-4">
      {/* Heading */}
      <div className="flex justify-center text-2xl sm:text-3xl lg:text-4xl font-semibold mt-4 text-center">
        Unlock the <HighLightText text={"Power of Code"} />
      </div>

      <p className="text-center text-richblack-300 text-sm sm:text-base lg:text-lg mt-3">
        Learn to build anything you can imagine
      </p>

      {/* Tabs */}
      <div className="mt-5 w-fit mx-auto flex flex-wrap justify-center gap-2 rounded-full bg-richblack-800 mb-5  border-richblack-100 px-2 py-2">
        {tabsName.map((element, index) => {
          return (
            <div
              className={`text-sm sm:text-base flex items-center gap-2 ${
                currentTab === element
                  ? "bg-richblack-900 text-white font-medium"
                  : "text-richblack-300"
              } rounded-full transition-all duration-200 cursor-pointer
              hover:bg-richblack-900 hover:text-richblack-5 px-5 py-2`}
              key={index}
              onClick={() => setMyCards(element)}
            >
              {element}
            </div>
          );
        })}
      </div>

      {/* Course cards */}
      <div className="lg:h-[150px]">
        <div
          className="
      mt-10
      grid grid-cols-1 sm:grid-cols-2 gap-6
      lg:flex lg:flex-row lg:gap-6 lg:justify-center
    "
        >
          {courses.map((element, index) => (
            <CourseCard
              className="w-full max-w-[300px]"
              key={index}
              cardData={element}
              currentCard={currentCard}
              setCurrentCard={setCurrentCard}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreMore;
