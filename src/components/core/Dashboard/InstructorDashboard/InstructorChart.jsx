import React, { useState } from 'react'

import {Chart, registerables} from "chart.js"
import {Pie} from "react-chartjs-2"

Chart.register(...registerables);

const InstructorChart = ({courses}) => {

    const [currChart, setCurrChart] = useState("students");

    //functio to genertae random colors
    const getRandomColors = (numColors) => {
        const colors = [];
        for(let i=0; i<numColors; i++) {
            const color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random()*256)},
            ${Math.floor(Math.random()*256)})`
            colors.push(color);
        }
        return colors;
    }

    //create data for chart displaying student info

    const chartDataForStudents = {
        labels: courses.map((course)=> course.courseName),
        datasets: [
            {
                data: courses.map((course)=> course.totalStudentsEnrolled),
                backgroundColor: getRandomColors(courses.length),
            }
        ]
    }


    //create data for chart displaying iincome info
    const chartDataForIncome = {
        labels:courses.map((course)=> course.courseName),
        datasets: [
            {
                data: courses.map((course)=> course.totalAmountGenerated),
                backgroundColor: getRandomColors(courses.length),
            }
        ]
    }


    //create options
    const options = {

    };


//   return (
//     <div>
//       <p>Visualise</p>
//       <div className='flex gap-x-5'>
//         <button
//         onClick={() => setCurrChart("students")}
//         >
//             Student
//         </button>

//         <button
//         onClick={() => setCurrChart("income")}
//         >
//             Income
//         </button>
//       </div>
//       <div>
//         <Pie 
//             data={currChart === "students" ? chartDataForStudents : chartDataForIncome}
//             options={options}
//         />
//       </div>
//     </div>
//   )
return (
    // Main container for the chart with vertical spacing
    <div className='flex flex-col gap-y-4'>
        {/* Chart Title */}
        <p className='text-lg font-bold text-richblack-5'>Visualise</p>

        {/* Buttons to toggle between views */}
        <div className='flex gap-x-4'>
            <button
                onClick={() => setCurrChart("students")}
                // Apply active styles conditionally
                className={`rounded-md px-4 py-1 text-sm font-medium transition-all duration-200 ${
                    currChart === "students"
                        ? "bg-richblack-700 text-yellow-50"
                        : "text-richblack-400"
                }`}
            >
                Student
            </button>

            <button
                onClick={() => setCurrChart("income")}
                // Apply active styles conditionally
                className={`rounded-md px-4 py-1 text-sm font-medium transition-all duration-200 ${
                    currChart === "income"
                        ? "bg-richblack-700 text-yellow-50"
                        : "text-richblack-400"
                }`}
            >
                Income
            </button>
        </div>

        {/* Container for the Pie chart */}
        <div className='relative mx-auto aspect-square h-full w-full'>
            <Pie
                data={currChart === "students" ? chartDataForStudents : chartDataForIncome}
                options={options}
            />
        </div>
    </div>
)
}

export default InstructorChart
