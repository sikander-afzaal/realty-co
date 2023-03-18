import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Customer = () => {
  return (
    <div className="wrapper mb-[40px] sm:mb-[80px] mt-[100px] sm:mt-[140px] py-[40px] sm:py-[80px] bg-[#F3F3F34D] px-5">
      <div className="flex xl:flex-row flex-col gap-8 xl:gap-5 justify-between items-center max-w-[1440px] w-full">
        <div className="flex justify-start w-full items-center xl:text-left text-center xl:items-start flex-col gap-2 xl:gap-5">
          <h2 className="title text-mahroon">Customer Review</h2>
          <p className="text-blogPara text-base sm:text-xl font-normal max-w-[700px]">
            Our staff consists of seasoned veterans with extensive experience in
            the painting industry, and we take pride in utilizing cutting-edge
            technology and skills. Our staff consists of seasoned veterans with
            extensive experience in the painting industry, and we take pride in
            utilizing cutting-edge technology and skills. Our staff consists of
            seasoned veterans with extensive experience in the painting
            industry, and we take pride in utilizing cutting-edge technology and
            skills.
          </p>
        </div>
        <div className="max-w-[800px] xl:max-w-none w-full">
          <Splide
            hasTrack={false}
            options={{
              width: "100%",
              gap: "2rem",
              perPage: 1,
              pagination: false,
              arrows: true,
              type: "loop",
              drag: true,
              perMove: 1,
            }}
            className="center-slides"
            aria-label="..."
          >
            <SplideTrack>
              <SplideSlide>
                <SliderBox
                  img="/review-photo-1.png"
                  name="Natalie Wilson"
                  review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in dapibus mauris. "
                />
              </SplideSlide>
            </SplideTrack>

            <div className="splide__arrows ">
              <button className=" bg-brownGr opacity-100 w-[40px] sm:w-[50px] aspect-square h-auto rounded-full splide__arrow splide__arrow--prev">
                <svg
                  className="w-6 h-6 invert"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 512"
                >
                  <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
                </svg>
              </button>
              <button className=" bg-brownGr opacity-100 w-[40px] sm:w-[50px] aspect-square h-auto rounded-full splide__arrow splide__arrow--next">
                <svg
                  className="w-6 h-6 invert"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 512"
                >
                  <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
                </svg>
              </button>
            </div>
          </Splide>
        </div>
      </div>
    </div>
  );
};

export default Customer;

const SliderBox = ({ img, name, review }) => {
  return (
    <div className="flex justify-center text-center items-center flex-col gap-4 w-full bg-white rounded-[15px] max-w-[533px] py-[50px] ">
      <img
        src={img}
        className="rounded-full aspect-square w-[160px] object-cover"
        alt=""
      />
      <h4 className="text-blogPara text-2xl font-semibold">{name}</h4>
      <p className="text-[#666666] max-w-[370px]">{review}</p>
    </div>
  );
};
