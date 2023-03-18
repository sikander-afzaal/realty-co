import React from "react";

const OtherBlog = ({ img, alt, title }) => {
  return (
    <div className="rounded-sm  overflow-hidden flex justify-start items-center flex-col shadow-thin min-w-[350px]  xl:min-w-0">
      <img src={img} alt={alt} className="w-full object-cover" />

      <h2 className="text-navyBlue font-semibold text-lg xl:text-xl p-5">
        {title}
      </h2>
    </div>
  );
};

export default OtherBlog;
