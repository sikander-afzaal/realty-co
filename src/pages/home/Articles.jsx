import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Articles = () => {
  return (
    <div className="wrapper my-[40px] sm:my-[80px]">
      <div className="flex justify-center items-center flex-col gap-2 text-center">
        <h2 className="title text-[1E2640]">Blog articles</h2>
        <p className="text-gray max-w-[700px] text-xl">
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat.
        </p>
      </div>
      <div className="w-full mt-10 sm:mt-14 pl-3">
        <Splide
          hasTrack={false}
          options={{
            width: "100%",
            gap: "2rem",
            autoWidth: true,
            pagination: false,
            arrows: true,
            type: "loop",
            drag: true,
            perMove: 1,
          }}
          className="pb-[30px]"
          aria-label="..."
        >
          <SplideTrack>
            <SplideSlide>
              <SliderBox
                img="/article-slider.png"
                location="Washington"
                size="12000"
                hot
              />
            </SplideSlide>
            <SplideSlide>
              <SliderBox
                img="/article-slider.png"
                location="Washington"
                size="12000"
                hot
              />
            </SplideSlide>
            <SplideSlide>
              <SliderBox
                img="/article-slider.png"
                location="Washington"
                size="12000"
                hot
              />
            </SplideSlide>
            <SplideSlide>
              <SliderBox
                img="/article-slider.png"
                location="Washington"
                size="12000"
                hot
              />
            </SplideSlide>
            <SplideSlide>
              <SliderBox
                img="/article-slider.png"
                location="Washington"
                size="12000"
                hot
              />
            </SplideSlide>
            <SplideSlide>
              <SliderBox
                img="/article-slider.png"
                location="Washington"
                size="12000"
                hot
              />
            </SplideSlide>
          </SplideTrack>

          <div className="splide__arrows absolute top-full left-1/2 -translate-x-1/2 flex justify-center items-center gap-5">
            <button className="static translate-y-0 translate-x-0 bg-brownGr opacity-100 w-[44px] aspect-square h-auto rounded splide__arrow splide__arrow--prev">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
            <button className="static translate-y-0 translate-x-0 bg-brownGr opacity-100 w-[44px] aspect-square h-auto rounded splide__arrow splide__arrow--next">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </div>
        </Splide>
      </div>
    </div>
  );
};

export default Articles;

const SliderBox = ({ img, hot, location, size }) => {
  return (
    <div className="w-[312px] h-[425px] relative rounded-[6px] overflow-hidden">
      <img src={img} className="w-full h-full object-cover" alt="" />
      <div className="bg-articleOverlay absolute top-0 left-0 z-10 w-full h-full"></div>
      {hot && (
        <div className="bg-brownGr z-20 text-sm font-normal text-white  w-[90px] h-[32px] rounded-sm flex justify-center items-center absolute top-3 left-3">
          Hot Offer
        </div>
      )}
      <div className="flex justify-between z-20  items-center w-full px-5 absolute bottom-6 left-0">
        <div className="flex justify-start text-white items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
          <p className="font-medium">{location}</p>
        </div>
        <div className="flex justify-start text-white items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
            />
          </svg>

          <p className="font-medium">{size}</p>
        </div>
      </div>
    </div>
  );
};
