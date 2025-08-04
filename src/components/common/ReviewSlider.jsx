// import React, { useEffect } from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import 'swiper/css'
// import 'swiper/css/free-mode'
// import 'swiper/css/pagination'
// import 'swiper/css/navigation'
// import { FreeMode, Pagination, Autoplay, Navigation } from 'swiper/modules'
// import ReactStars from "react-rating-stars-component"
// import { useSearchParams } from 'react-router-dom'
// import { apiConnector } from '../../services/apiconnector'
// import { ratingsEndpoints } from '../../services/apis'
// import { useState } from 'react'
// import { FaStar } from 'react-icons/fa'

// const ReviewSlider = () => {

//     const [reviews, setReviews] = useState([]);
//     const truncateWords = 15;

//     useEffect(() => {
//         const fetchAllReviews = async () => {
//             const data = await apiConnector("GET", ratingsEndpoints.REVIEWS_DETAILS_API)
//             console.log("Loging response in rating", data);

//             if (data?.success) {
//                 setReviews(data?.data);
//             }

//             console.log("Printing Reviews", reviews);

//         }
//         fetchAllReviews();

//     }, []);



//     return (
//         <div className='text-white'>
//             <div className='h-[190px] max-w-maxContent'>
//                 <Swiper
//                   slidesPerView={4}
//                   spaceBetween={24}
//                   loop={true}
//                   freeMode={true}
//                   autoplay = {{
//                     delay:2500,
//                   }}
//                   modules={[FreeMode,Pagination,Autoplay]}
//                   className='w-full'
//                 >
//                     {
//                         reviews.map((review,index)=>(
//                             <SwiperSlide key={index}>
//                              <img
//                              src={review?.user?.image ? review?.user?.image :`https://api.dicebear.com/5.x/initials/svg?seed=${review?.user?.firstName}${review?.user?.lastName}`}
//                              alt='Profile pic'
//                              className='h-9 w-9 object-cover rounded-full'

//                              />
//                              <p>{review?.course?.firstName} {review?.course?.lastName}</p>
//                              <p>{review?.course?.courseName}</p>
//                              <p>
//                                 {review?.review}
//                              </p>

//                              <p>{review?.rating.toFixed(1)}</p>
//                              <ReactStars 
//                              count ={5}
//                              value={review.rating}
//                              size={20}
//                              edit={false}
//                              activeColor ="ffd700"
//                              emptyIcon={<FaStar/>}
//                              fullIcon={<FaStar/>}
//                              />
//                             </SwiperSlide>
//                         ))
//                     }

//                 </Swiper>
//             </div>

//         </div>
//     )
// }

// export default ReviewSlider
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';
import ReactStars from "react-rating-stars-component";
import { apiConnector } from '../../services/apiconnector';
import { ratingsEndpoints } from '../../services/apis';
import { FaStar } from 'react-icons/fa';

const ReviewSlider = () => {
    const [reviews, setReviews] = useState([]);
    const truncateWords = 15;

    useEffect(() => {
        const fetchAllReviews = async () => {
            try {
                // The 'response' object from apiConnector likely has the data inside a 'data' property
                const response = await apiConnector("GET", ratingsEndpoints.REVIEWS_DETAILS_API);
                console.log("Logging response from API", response);

                if (response?.data?.success) {
                    setReviews(response.data.data);
                }
            } catch (error) {
                console.error("Could not fetch reviews:", error);
            }
        };
        fetchAllReviews();
    }, []);

    // You can log here to see the state on each render
    // console.log("Rendering with reviews:", reviews);

    // Handle loading or no reviews case
    if (reviews.length === 0) {
        return (
            <div className='text-white text-center'>
                Loading reviews or no reviews yet...
            </div>
        )
    }

    return (
        <div className='text-white py-8'>
            <div className='mySwiper h-[190px] max-w-maxContent'>
                <Swiper
                    slidesPerView={1} // Default for smallest screens
                    spaceBetween={24}
                    loop={true}
                    freeMode={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[FreeMode, Pagination, Autoplay]}
                    className='w-full'
                    breakpoints={{
                        640: { // Screen width >= 640px (sm)
                            slidesPerView: 2,
                        },
                        1024: { // Screen width >= 1024px (lg)
                            slidesPerView: 4,
                        },
                    }}
                >
                    {reviews.map((review) => (
                        <SwiperSlide key={review._id} className="bg-richblack-800 p-4 rounded-lg flex flex-col gap-3">
                            <div className='flex items-center gap-4'>
                                <img
                                    src={review?.user?.image ? review.user.image : `https://api.dicebear.com/5.x/initials/svg?seed=${review?.user?.firstName} ${review?.user?.lastName}`}
                                    alt='Profile pic'
                                    className='h-9 w-9 object-cover rounded-full'
                                />
                                <div className='flex flex-col'>
                                    {/* FIX: Accessing user's name */}
                                    <p className='font-semibold'>{review?.user?.firstName} {review?.user?.lastName}</p>
                                    <p className='text-sm text-richblack-300'>{review?.course?.courseName}</p>
                                </div>
                            </div>
                            
                            {/* FIX: Truncating long reviews */}
                            <p className='text-sm text-richblack-25'>
                                {review?.review.split(" ").length > truncateWords
                                    ? `${review.review.split(" ").slice(0, truncateWords).join(" ")}...`
                                    : review.review}
                            </p>

                            <div className='flex items-center gap-2'>
                                <p className='font-semibold text-yellow-50'>{review?.rating?.toFixed(1)}</p>
                                <ReactStars
                                    count={5}
                                    value={review.rating}
                                    size={20}
                                    edit={false}
                                    activeColor="#ffd700"
                                    emptyIcon={<FaStar />}
                                    fullIcon={<FaStar />}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default ReviewSlider;