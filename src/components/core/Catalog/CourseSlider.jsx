import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { FreeMode, Pagination, Autoplay, Navigation } from 'swiper/modules'

import CourseCard from './CourseCard'

const CourseSlider = ({ Courses }) => {
  return (
    <>
      {
        Courses?.length ? (
          <Swiper
          loop={true}
          spaceBetween={20}
          modules={[Autoplay,Navigation,Pagination,FreeMode]}
          
          className='mySwiper'
          autoplay={{
            delay:1000,
            disableOnInteraction:false,
          }}
          navigation={true}
          breakpoints={{
            1024:{slidesPerView:3},
            768:{slidesPerView:2},
            640:{slidesPerView:1},
          }}
          >
            {
              Courses?.map((course,index) =>(
                <SwiperSlide key={index}>
                  <CourseCard course={course} Height={"h-[250px]"}/>

                </SwiperSlide>
              ))
            }
           
          </Swiper>
        ) : (
          <p>NO course found</p>
        )
      }
    </>
  )
}

export default CourseSlider