import React from 'react'

const HighLightText = ({text}) => {
  return (
    <div>
        <span className='font-bold text-richblue-200 ml-1.5'>
            {/* {""} */}
            {text}
        </span>
    </div>
  )
}

export default HighLightText