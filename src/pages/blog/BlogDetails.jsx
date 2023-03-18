import { useState } from "react";

const BlogDetails = () => {
  const [filter, setFilter] = useState("all");
  return (
    <div className="wrapper mt-[70px] px-[100px]">
      <div className="flex gap-16 w-full">
        <div
          className={`cursor-pointer text-xl font-semibold ${
            filter === "all"
              ? "border-b border-navyBlue bg-brownGr bg-clip-text text-transparent"
              : "text-lightBlack opacity-70"
          }`}
          onClick={() => setFilter("all")}
        >
          All
        </div>
        <div
          className={`cursor-pointer text-xl font-semibold ${
            filter === "residents"
              ? "border-b border-navyBlue bg-brownGr bg-clip-text text-transparent"
              : "text-lightBlack opacity-70"
          }`}
          onClick={() => setFilter("residents")}
        >
          Residents
        </div>
        <div
          className={`cursor-pointer text-xl font-semibold ${
            filter === "landlords"
              ? "border-b border-navyBlue bg-brownGr bg-clip-text text-transparent"
              : "text-lightBlack opacity-70"
          }`}
          onClick={() => setFilter("landlords")}
        >
          Landlords
        </div>
      </div>

      <div className="w-full">
        <div>
          <h2 className="text-navyBlue font-semibold text-4xl">
            10 Mistakes to Avoid in Bedroom Interior Design
          </h2>

          <div>
            <span>May 25, 2023</span>
            <span>5 mins read</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
