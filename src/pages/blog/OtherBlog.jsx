import React from "react";

const OtherBlog = ({ img, alt, title }) => {
  return (
    <div className="rounded-sm shadow-thin min-w-[250px] sm:min-w-[50%] md:min-w-[33%] xl:min-w-0">
      <img src={img} alt={alt} />

      <h2 className="text-navyBlue font-semibold text-lg xl:text-xl p-5">
        {title}
      </h2>
    </div>
  );
};

export default OtherBlog;
