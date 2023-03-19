import React from "react";

const Review = ({ company, companyAlt, photo, reviewedBy, review }) => {
  return (
    <div className="flex flex-col gap-1 relative bg-silver rounded-lg p-4 sm:p-6 xl:p-8">
      <div className="absolute top-5 right-5 bg-white w-12 aspect-square grid place-items-center rounded-sm p-2">
        <img src={company} alt={companyAlt} className="w-full" />
      </div>

      <img src={photo} alt={reviewedBy} className="max-w-[100px] mb-2" />

      <h2 className="testimonial-heading text-xl sm:text-2xl">{reviewedBy}</h2>

      <p className="text-base sm:text-lg">{review}</p>
    </div>
  );
};

export default Review;
