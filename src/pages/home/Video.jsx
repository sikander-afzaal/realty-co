const Video = () => {
  return (
    <div className="wrapper md:pt-[80px] xl:pt-[154px] py-[40px] md:pb-[80px] bg-[#F3F3F3]">
      <div className="w-full px-5 max-w-[1375px] relative ">
        <img
          src="/vid.png"
          className="aspect-video object-cover w-full rounded-[20px]"
          alt=""
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brownGr rounded-full flex justify-center items-center aspect-square cursor-pointer w-[80px] md:w-[127px] text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 md:w-9 h-6 md:h-9"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Video;
