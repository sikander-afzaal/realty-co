import React from "react";
import Review from "../../components/Review";

const reviews = [
  {
    company: "/google.png",
    companyAlt: "google",
    photo: "/review-photo-1.png",
    reviewedBy: "Jonas Herminton",
    review:
      "The residential real estate market is a vital component of the overall real estate indus",
  },
  {
    company: "/facebook.png",
    companyAlt: "facebook",
    photo: "/review-photo-2.png",
    reviewedBy: "Keery Maguire",
    review:
      "The residential real estate market is a vital component of the overall real estate indus",
  },
  {
    company: "/red-icon.png",
    companyAlt: "red icon",
    photo: "/review-photo-3.png",
    reviewedBy: "Keery Maguire",
    review:
      "The residential real estate market is a vital component of the overall real estate indus",
  },
  {
    company: "/google.png",
    companyAlt: "google",
    photo: "/review-photo-4.png",
    reviewedBy: "Jonas Herminton",
    review:
      "The residential real estate market is a vital component of the overall real estate indus",
  },
  {
    company: "/facebook.png",
    companyAlt: "facebook",
    photo: "/review-photo-5.png",
    reviewedBy: "Keery Maguire",
    review:
      "The residential real estate market is a vital component of the overall real estate indus",
  },
  {
    company: "/red-icon.png",
    companyAlt: "red icon",
    photo: "/review-photo-6.png",
    reviewedBy: "Keery Maguire",
    review:
      "The residential real estate market is a vital component of the overall real estate indus",
  },
];

const TestimonialReviews = () => {
  return (
    <div className="wrapper mt-[60px] px-[25px] sm:px-[50px] xl:px-[88px] gap-6">
      <h2 className="testimonial-heading text-3xl sm:text-4xl">Reviews</h2>

      <div className="grid grids-col-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {reviews.map(
          ({ company, companyAlt, photo, reviewedBy, review }, index) => (
            <Review
              key={index}
              company={company}
              companyAlt={companyAlt}
              photo={photo}
              reviewedBy={reviewedBy}
              review={review}
            />
          )
        )}
      </div>
    </div>
  );
};

export default TestimonialReviews;
