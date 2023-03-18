import { useState } from "react";

const Faq = ({ question, answer }) => {
  const [active, setActive] = useState(false);
  return (
    <div className="flex justify-start  items-center flex-col overflow-hidden  w-full">
      <button
        onClick={() => setActive((prev) => !prev)}
        className="px-4 sm:px-8 text-blogPara text-sm sm:text-base font-semibold flex justify-between items-center gap-4 w-full bg-white rounded-[20px] min-h-[75px] text-left"
      >
        {question}
        <svg
          viewBox="0 0 19 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`sm:min-w-[19px] min-w-[14px] w-[14px] sm:w-[19px] object-contain ${
            active ? "rotate-0" : "rotate-180"
          } transition-all duration-300`}
        >
          <path
            d="M9.5 0.875L18.875 10.25L0.125 10.25L9.5 0.875Z"
            fill="url(#paint0_linear_510_1779)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_510_1779"
              x1="18.875"
              y1="10.7951"
              x2="13.0423"
              y2="-3.80836"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#A14A4A" />
              <stop offset="1" stopColor="#4B0C0C" />
            </linearGradient>
          </defs>
        </svg>
      </button>
      <div
        className={`bg-white rounded-[20px] transition-all duration-500 overflow-hidden  ${
          active ? "py-5 max-h-full mt-4" : "py-0 max-h-0 mt-0"
        } px-5 flex justify-start text-left items-center w-full `}
      >
        <p className="text-sm text-blogPara text-left">{answer}</p>
      </div>
    </div>
  );
};

export default Faq;
