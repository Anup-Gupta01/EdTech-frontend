
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { fetchInstructorCourses } from '../../../../services/operations/courseDetailsAPI'
import { getInstructorData } from '../../../../services/operations/profileAPI'
import InstructorChart from './InstructorChart'
import { Link } from 'react-router-dom'

const Instructor = () => {
  const { token } = useSelector((state) => state.auth)
  const { user } = useSelector((state) => state.profile)

  const [loading, setLoading] = useState(false)
  const [instructorData, setInstructorData] = useState([])
  const [courses, setCourses] = useState([])

  useEffect(() => {
    const getCourseDataWithStats = async () => {
      try {
        setLoading(true)

        const instructorApiData = await getInstructorData(token)
        const result = await fetchInstructorCourses(token)

        console.log("Instructor API Data:", instructorApiData)

        // Handle instructor data (must be array)
        if (Array.isArray(instructorApiData)) {
          setInstructorData(instructorApiData)
        } else if (Array.isArray(instructorApiData?.courses)) {
          setInstructorData(instructorApiData.courses)
        } else {
          setInstructorData([]) // fallback
        }

        // Handle course list (must be array)
        if (Array.isArray(result)) {
          setCourses(result)
        } else {
          setCourses([]) // fallback
        }

      } catch (error) {
        console.error("Error loading instructor dashboard:", error)
      } finally {
        setLoading(false)
      }
    }

    getCourseDataWithStats()
  }, [token])

  const totalAmount = instructorData?.reduce?.(
    (acc, curr) => acc + (curr.totalAmountGenerated || 0),
    0
  ) || 0

  const totalStudents = instructorData?.reduce?.(
    (acc, curr) => acc + (curr.totalStudentsEnrolled || 0),
    0
  ) || 0

  // return (
  //   <div className='text-white'>
  //     <div>
  //       <h1>Hi {user?.firstName}</h1>
  //       <p>Let's start something new</p>
  //     </div>

  //     {loading ? (
  //       <div className='spinner'></div>
  //     ) : courses?.length > 0 ? (
  //       <div>
  //         <div>
  //           <InstructorChart courses={instructorData} />
  //           <div>
  //             <p>Statistics</p>
  //             <div>
  //               <p>Total Courses</p>
  //               <p>{courses.length}</p>
  //             </div>

  //             <div>
  //               <p>Total Students</p>
  //               <p>{totalStudents}</p>
  //             </div>

  //             <div>
  //               <p>Total Income</p>
  //               <p>₹ {totalAmount}</p>
  //             </div>
  //           </div>
  //         </div>

  //         {/* Render up to 3 courses */}
  //         <div>
  //           <div>
  //             <p>Your Courses</p>
  //             <Link to="/dashboard/my-courses">
  //               <p>View all</p>
  //             </Link>
  //           </div>
  //           <div>
  //             {courses.slice(0, 3).map((course) => (
  //               <div key={course._id}>
  //                 <img
  //                   src={course.thumbnail}
  //                   alt={course.courseName}
  //                   className="w-[150px] h-[100px] object-cover"
  //                 />
  //                 <div>
  //                   <p>{course.courseName}</p>
  //                   <div>
  //                     <p>{course.studentsEnrolled?.length || 0} students</p>
  //                     <p> | </p>
  //                     <p>₹ {course.price}</p>
  //                   </div>
  //                 </div>
  //               </div>
  //             ))}
  //           </div>
  //         </div>
  //       </div>
  //     ) : (
  //       <div>
  //         <p>You have not created any courses yet</p>
  //         <Link to="/dashboard/addCourse">
  //           Create a Course
  //         </Link>
  //       </div>
  //     )}
  //   </div>
  // )
  return (
  // Main container with padding and space between vertical elements
  <div className='mx-auto w-11/12 max-w-[1000px] py-10 text-white'>
    <div className='space-y-2 mb-8'>
      <h1 className='text-2xl font-bold text-richblack-5'>Hi {user?.firstName}</h1>
      <p className='font-medium text-richblack-200'>Let's start something new</p>
    </div>

    {loading ? (
      <div className='spinner'></div>
    ) : courses?.length > 0 ? (
      // Main content layout when courses exist
      <div className='space-y-8'>
        {/* Chart and Statistics Section */}
        <div className='flex flex-col lg:flex-row gap-6'>
          {/* Chart takes up more space and has a dark background */}
          <div className='flex-1 rounded-md bg-richblack-800 p-6'>
            <InstructorChart courses={instructorData} />
          </div>
          
          {/* Statistics section */}
          <div className='flex flex-col lg:w-[280px] flex-shrink-0 rounded-md bg-richblack-800 p-6'>
            <p className='text-lg font-bold text-richblack-5'>Statistics</p>
            <div className='mt-4 space-y-4'>
              <div>
                <p className='text-richblack-200'>Total Courses</p>
                <p className='text-3xl font-semibold text-richblack-5'>{courses.length}</p>
              </div>
              <div>
                <p className='text-richblack-200'>Total Students</p>
                <p className='text-3xl font-semibold text-richblack-5'>{totalStudents}</p>
              </div>
              <div>
                <p className='text-richblack-200'>Total Income</p>
                <p className='text-3xl font-semibold text-richblack-5'>₹ {totalAmount}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Your Courses Section */}
        <div className='rounded-md bg-richblack-800 p-6'>
          <div className='flex items-center justify-between'>
            <p className='text-lg font-bold text-richblack-5'>Your Courses</p>
            <Link to='/dashboard/my-courses'>
              <p className='text-xs font-semibold text-yellow-50 hover:text-yellow-100'>View All</p>
            </Link>
          </div>
          {/* Displaying up to 3 courses in a grid */}
          <div className='mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {courses.slice(0, 3).map((course) => (
              <div key={course._id} className='rounded-md bg-richblack-700'>
                <img
                  src={course.thumbnail}
                  alt={course.courseName}
                  className='h-[200px] w-full rounded-t-md object-cover'
                />
                <div className='p-4'>
                  <p className='text-base font-semibold text-richblack-5 truncate'>{course.courseName}</p>
                  <div className='mt-2 flex items-center gap-2 text-sm text-richblack-300'>
                    <p>{course.studentsEnrolled?.length || 0} students</p>
                    <p>|</p>
                    <p>₹ {course.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ) : (
      // View for when there are no courses
      <div className='mt-20 rounded-md bg-richblack-800 p-6 py-20'>
        <div className='text-center'>
            <p className='text-center text-2xl font-bold text-richblack-5'>
                You have not created any courses yet
            </p>
            <Link 
                to='/dashboard/add-course' 
                className='mt-6 inline-block bg-yellow-50 text-black font-semibold py-3 px-6 rounded-md hover:bg-yellow-100 transition-all duration-200'
            >
                Create a Course
            </Link>
        </div>
      </div>
    )}
  </div>
);
}

export default Instructor
