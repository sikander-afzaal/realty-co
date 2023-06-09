const Pagination = ({ totalPages, selectedPage }) => {
  return (
    <div className="flex gap-2 sm:gap-3 justify-center mt-[50px] xl:mt-[125px]">
      <button
        className={`static translate-y-0 translate-x-0 opacity-100 w-[36px] sm:w-[44px] aspect-square h-auto rounded grid place-items-center ${
          selectedPage === 1 ? "bg-pagination" : "bg-brownGr"
        }`}
        disabled={selectedPage === 1 ? true : false}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke={selectedPage === 1 ? "#6D737A" : "white"}
          className="w-5 h-5 sm:w-6 sm:h-6 rotate-180"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </button>

      {new Array(3).fill(0).map((_, index) => {
        return (
          <button
            key={index}
            className={`w-[36px] sm:w-[44px] aspect-square grid place-items-center font-semibold font-base rounded font-inter ${
              selectedPage === index + 1
                ? "bg-brownGr text-white"
                : "bg-pagination hover:bg-brownGr hover:text-white hover:opacity-60"
            }`}
          >
            {index + 1}
          </button>
        );
      })}

      <>
        <div className="bg-pagination w-[36px] sm:w-[44px] aspect-square grid place-items-center font-semibold rounded font-inter">
          ...
        </div>

        <button className="bg-pagination w-[36px] sm:w-[44px] aspect-square grid place-items-center font-semibold rounded hover:bg-brownGr font-inter hover:text-white hover:opacity-60">
          {totalPages}
        </button>
      </>

      <button
        className={`static translate-y-0 translate-x-0 opacity-100 w-[36px] sm:w-[44px] aspect-square h-auto rounded grid place-items-center ${
          selectedPage === totalPages ? "bg-pagination" : "bg-brownGr"
        }`}
        disabled={selectedPage === totalPages ? true : false}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke={selectedPage === totalPages ? "#6D737A" : "white"}
          className="w-5 h-5 sm:w-6 sm:h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
