import React from 'react';

const CourseCard = ({ cardData, currentCard, setCurrentCard }) => {
  return (
    <div
      className="bg-richblack-800 text-white p-6 shadow-md border border-richblack-600 w-[250px] h-[320px]
                 flex flex-col justify-between
                 transition-all duration-300 ease-in-out
                 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:border-yellow-400"
    >
      {/* Title and Description */}
      <div>
        <h2 className="text-lg font-semibold mb-3">{cardData.heading}</h2>
        <p className="text-sm text-richblack-300">{cardData.description}</p>
      </div>

      {/* Bottom Details */}
    <div className="flex justify-center items-center text-xs text-yellow-400 border-t border-richblack-600 pt-4 mt-6 gap-4">
  <div className="flex items-center gap-2">
    <span className="font-medium">Level:</span> {cardData.level}
  </div>

  {/* vertical line only in center */}
  <div className="w-[1px] h-4 bg-yellow-400" />

  <div className="flex items-center gap-2">
    <span className="font-medium">Lessons:</span> {cardData.lessionNumber}
  </div>
</div>

    </div>
  );
};

export default CourseCard;
