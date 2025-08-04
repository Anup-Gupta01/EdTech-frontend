import React from 'react'
import copy from 'copy-to-clipboard';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BsFillCaretRightFill } from "react-icons/bs"
import { FaShareSquare } from "react-icons/fa"
import { toast } from 'react-hot-toast';

import { addToCart } from '../../../slices/cartSlice';
import { ACCOUNT_TYPE } from "../../../utils/constants"

function CourseDetailsCard({ course, setConfirmationModal, handleBuyCourse }) {


    const { user } = useSelector((state) => state.profile);
    const { token } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {
        thumbnail: ThumbnailImage,
        price: CurrentPrice,
        studentEnrolled = [],
        instructions = [],
    } = course || {};

    const isUserEnrolled = user &&
  Array.isArray(studentEnrolled) &&
  studentEnrolled.includes(user._id);


    const handleAddToCart = () => {
        if (user && user?.accountType === ACCOUNT_TYPE.INSTRUCTOR) {
            toast.error("You are an instructor, you cant buy a course")
            return;
        }
        if (token) {
            dispatch(addToCart);
            return;
        }
        setConfirmationModal({
            text1: "you are not logged in",
            text2: "pleaase login to add to cart",
            btn1text: "login",
            btn2text: "cancel",
            btn1Handler: () => navigate("/login"),
            btn2Handler: () => setConfirmationModal(null),
        })
    }

    const handleShare = () => {
        copy(window.location.href);
        toast.success("Link Copied to Clipboard")
    }

    return (
        <>
        <div className={`flex flex-col gap-4 rounded-md bg-richblack-700 p-4 text-richblack-5`}>
            <img
                src={ThumbnailImage}
                alt='Thumbnail Image'
                className="max-h-[300px] min-h-[180px] w-[400px] overflow-hidden rounded-2xl object-cover md:max-w-full"
            />
            <div className='px-4'>
            <div className="space-x-3 pb-4 text-3xl font-semibold">>
                Rs. {CurrentPrice}
            </div>
            <div className='flex flex-col gap-y-6'>
                <button
                    className='bg-yellow-50'
                    onClick={
                        isUserEnrolled
                            ? () => navigate("/dashboard/enrolled-courses")
                            : handleBuyCourse
                    }
                >
                    {
                       isUserEnrolled
                            ? "Go to Course" :
                            "Buy Now"
                    }
                </button>
                {user && Array.isArray(studentEnrolled) && !studentEnrolled.includes(user._id) && (
                    <button onClick={handleAddToCart} className='blackButton'>
                        Add to Cart
                    </button>
                )}
            </div>

               <div >
                <p className="pb-3 pt-6 text-center text-sm text-richblack-25">
                    30-Day Money-Back Guarantee
                </p>
                </div>
                <div>
                <p className={`my-2 text-xl font-semibold `}>
                    This course includes :
                </p>
                <div className='flex flex-col gap-3  text-sm text-caribbeangreen-100'>
                    {
                        course?.instructions?.map((item, index) => (
                            <p key={index} className='flex gap-2'>
                                <span>{item}</span>
                            </p>
                        ))
                    }

                </div>
            </div>
            <div className='text-center'>
                <button
                    className='mx-auto flex items-center gap-2 text-yellow-100'
                    onClick={handleShare}
                >
                   <FaShareSquare size={15} /> Share
                </button>
            </div>
            </div>
        </div>
        </>
    );
}


export default CourseDetailsCard