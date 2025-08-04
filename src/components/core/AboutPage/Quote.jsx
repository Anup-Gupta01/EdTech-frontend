import React from 'react'
import HighLightText from '../HomePage/HighLightText'

const Quote = () => {
  return (
    <div className='text-center text-3xl font-bold mx-32'>
    We are passionate about revolutionizing the way we learn.Our innovative platform 
    {/* <HighLightText text={"combines technology"} /> */}
    <span className="inline-block align-baseline">
    <HighLightText text={"combines technology"} />
  </span>
    <span className='text-brown-500'>
        ,{" "}
        expertise
    </span>
    , and community to create an 
    <span className='text-brown-300'>
        {" "}
        unparalleled educational experience.
    </span>

    </div>
  )
}

export default Quote