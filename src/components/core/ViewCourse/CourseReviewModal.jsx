import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux'
import IconBtn from '../../common/IconBtn';
import { createRating } from '../../../services/operations/courseDetailsAPI';
// import { useParams } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";

import { RxCross2 } from "react-icons/rx";


const CourseReviewModal = ({setReviewModal}) => {

    const { user } = useSelector((state) => state.profile);
    const { token } = useSelector((state) => state.auth);
    const { courseEntireData } = useSelector((state) => state.viewCourse);
    // const {courseId} =useParams


    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();


    useEffect(() => {
        setValue("courseExperiencce", "");
        setValue("courseRating", 0);
    }, [])


    const ratingChanged = (newRating) => {
        setValue("courseRating", newRating);
    }


    const onSubmit = async (data) => {
        await createRating(
            {
                courseId: courseEntireData._id,
                rating:data.courseRating,
                review: data.courseExperience,
            },
            token
        );
        setReviewModal(false);
    }


    // return (
    //     <div>
    //         <div>
    //             {/* Modal header  */}
    //             <div>
    //                 <p>Add Review</p>
    //                 <button
    //                     onClick={() => setReviewModal(false)}
    //                 >
    //                     Close
    //                 </button>
    //             </div>

    //             {/* //modal body  */}
    //             <div>


    //                 <div>
    //                     <img
    //                         src='user?.image'
    //                         alt='user img'
    //                         className='aspect-square w-[50px] rounded-full object-cover'
    //                     />
    //                     <div>
    //                         <p>{user?.firstName} {user?.lastName}</p>
    //                         <p>Posting Publicly</p>

    //                     </div>
    //                 </div>

    //                 <form
    //                     onSubmit={handleSubmit(onSubmit)}
    //                     className='mt-6 flex flex-col items-center'
    //                 >
    //                     <ReactStars
    //                         count={5}
    //                         onChange={ratingChanged}
    //                         size={24}
    //                         activeColor="#ffc700"

    //                     />

    //                     <div>
    //                         <label htmlFor='courseExperience'>
    //                             Add your Experience
    //                         </label>
    //                         <textarea
    //                             id='courseExperience'
    //                             placeholder='Add Your Experience'
    //                             {...register("courseExperience", { required: true })}
    //                             className='form-style min-h-[130px] w-full'
    //                         />
    //                         {
    //                             errors.courseExperience && (
    //                                 <span>
    //                                     Please add youir experience
    //                                 </span>
    //                             )
    //                         }
    //                     </div>

    //                     {/* button  */}
    //                     <div>
    //                         <button
    //                             onClick={() => setReviewModal(false)}
    //                         >
    //                             Cancel
    //                         </button>

    //                         <IconBtn
    //                             text="Save"
    //                         />

    //                     </div>
    //                 </form>
    //             </div>
    //         </div>
    //     </div>
    // )

     return (
        <div className="fixed inset-0 z-[1000] !mt-0 grid h-screen w-screen place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm">
            <div className="my-10 w-11/12 max-w-[700px] rounded-lg border border-richblack-400 bg-richblack-800">
                {/* Modal Header */}
                <div className="flex items-center justify-between rounded-t-lg bg-richblack-700 p-5">
                    <p className="text-xl font-semibold text-richblack-5">Add Review</p>
                    <button onClick={() => setReviewModal(false)} className="text-2xl text-richblack-5">
                        <RxCross2 />
                    </button>
                </div>

                {/* Modal Body */}
                <div className="p-6">
                    <div className="flex items-center justify-center gap-x-4">
                        <img
                            src={user?.image}
                            alt='User'
                            className='aspect-square w-[50px] rounded-full object-cover'
                        />
                        <div>
                            <p className="font-semibold text-richblack-5">{user?.firstName} {user?.lastName}</p>
                            <p className="text-sm text-richblack-5">Posting Publicly</p>
                        </div>
                    </div>

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className='mt-6 flex flex-col items-center'
                    >
                        <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={30}
                            activeColor="#ffd700"
                        />
                        <div className="flex w-full flex-col space-y-2 mt-4">
                            <label htmlFor='courseExperience' className="text-sm text-richblack-5">
                                Add Your Experience <sup className="text-pink-200">*</sup>
                            </label>
                            <textarea
                                id='courseExperience'
                                placeholder='Share your thoughts about this course'
                                {...register("courseExperience", { required: true })}
                                className='min-h-[130px] w-full rounded-lg bg-richblack-700 p-3 text-richblack-5 placeholder:text-richblack-400 focus:outline-none focus:ring-2 focus:ring-yellow-50'
                            />
                            {errors.courseExperience && (
                                <span className="ml-2 text-xs tracking-wide text-pink-200">
                                    Please share your experience.
                                </span>
                            )}
                        </div>

                        {/* Buttons */}
                        <div className="mt-6 flex w-full justify-end gap-x-3">
                            <button
                                type="button" // Prevent form submission
                                onClick={() => setReviewModal(false)}
                                className="cursor-pointer rounded-md bg-richblack-600 py-2 px-5 font-semibold text-richblack-5 transition-all duration-200 hover:bg-richblack-700"
                            >
                                Cancel
                            </button>
                            <IconBtn
                                text="Save"
                                type="submit"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CourseReviewModal