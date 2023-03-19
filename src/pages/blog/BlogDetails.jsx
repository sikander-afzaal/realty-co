import { useState } from "react";
import OtherBlog from "../../components/OtherBlog";

const otherBlogs = [
  {
    img: "/otherBlog-1.png",
    alt: "living room",
    title: "10 Mistakes to Avoid in Bedroom Interior Design",
  },
  {
    img: "/otherBlog-2.png",
    alt: "kitchen",
    title: "10 Mistakes to Avoid in Bedroom Interior Design",
  },
  {
    img: "/otherBlog-3.png",
    alt: "sofa",
    title: "10 Mistakes to Avoid in Bedroom Interior Design",
  },
  {
    img: "/otherBlog-3.png",
    alt: "sofa",
    title: "10 Mistakes to Avoid in Bedroom Interior Design",
  },
];

const BlogDetails = () => {
  const [filter, setFilter] = useState("all");
  return (
    <div className="wrapper mt-[70px] px-5 md:px-[50px] lg:px-[70px] xl:px-[100px]">
      <div className="wrapper max-w-[1500px] gap-8 md:gap-12 xl:gap-16">
        <div className="flex gap-8 xl:gap-16 w-full">
          <div
            className={`cursor-pointer text-xl font-semibold ${
              filter === "all"
                ? "border-b border-navyBlue bg-brownGr bg-clip-text text-transparent uppercase"
                : "text-lightBlack opacity-70"
            }`}
            onClick={() => setFilter("all")}
          >
            All
          </div>
          <div
            className={`cursor-pointer text-xl font-semibold ${
              filter === "residents"
                ? "border-b border-navyBlue bg-brownGr bg-clip-text text-transparent uppercase"
                : "text-lightBlack opacity-70"
            }`}
            onClick={() => setFilter("residents")}
          >
            Residents
          </div>
          <div
            className={`cursor-pointer text-xl font-semibold ${
              filter === "landlords"
                ? "border-b border-navyBlue bg-brownGr bg-clip-text text-transparent uppercase"
                : "text-lightBlack opacity-70"
            }`}
            onClick={() => setFilter("landlords")}
          >
            Landlords
          </div>
        </div>

        <div className="w-full flex flex-col gap-6">
          <div className="flex flex-col gap-4 xl:gap-4">
            <h2 className="text-navyBlue font-semibold leading-[1.2] text-2xl sm:text-3xl xl:text-4xl">
              10 Mistakes to Avoid in Bedroom Interior Design
            </h2>
            <p className="text-darkGray flex gap-3">
              <span>May 25 2023</span>
              <span>.</span>
              <span>5 mins read</span>
            </p>
          </div>

          <div className="grid xl:grid-cols-blogCol justify-between items-start gap-6">
            <div className="bg-lightGray px-4 md:px-6 xl:px-8 py-6 rounded-2xl flex flex-col gap-6">
              <img src="/blog-img.png" alt="interior design" />
              <div className="text-blogPara text-base md:text-lg font-medium">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Cursus volutpat risus
                  netus pellentesque accumsan aenean tellus. In fermentum eget
                  sed consectetur. A venenatis diam tortor sem quis egestas.
                  Arcu arcu nulla feugiat quis. Fermentum ac eget in semper
                  cursus vitae ut.
                </p>
                <p>
                  Non enim nunc pellentesque interdum et a. Id interdum
                  tincidunt commodo ut in. Pretium ut sed risus nunc nulla
                  volutpat in nibh. Convallis sit tincidunt nunc est. Dui et id
                  vel sed felis gravida leo platea. Id nec ullamcorper dapibus
                  faucibus tincidunt. Nisl risus fringilla at egestas eget cras
                  varius diam risus. Sed est at turpis luctus.
                </p>
                <p>
                  Risus magna volutpat non commodo venenatis. Vitae dignissim
                  consectetur in donec nibh posuere pharetra. Donec velit nisl
                  semper tellus elit fermentum in. Id neque sapien volutpat
                  varius porta leo tellus. Vitae pretium arcu nec rutrum sed
                  gravida posuere sit.
                </p>
                <p>
                  Aliquam eu vulputate diam ipsum eget nec tristique massa. Enim
                  nisi phasellus vitae sit vitae mauris justo ipsum facilisis.
                  Ultrices iaculis suspendisse malesuada porttitor. Blandit
                  morbi morbi turpis a. Nibh est ut consequat netus et eget
                  ultricies non risus. Mattis morbi nisi vivamus in purus diam
                  cum. Amet massa magna et fermentum. Nulla leo vulputate
                  feugiat rhoncus.
                </p>
                <p>
                  Orci gravida morbi odio cras mattis arcu platea gravida
                  accumsan. Felis viverra ut phasellus faucibus ornare mauris.
                  Dui mattis enim hac mauris. Ut donec dignissim neque
                  vestibulum nec sapien varius eu. Senectus urna nam blandit
                  arcu consequat blandit tincidunt penatibus quam. Bibendum
                  elementum habitasse pulvinar fringilla nulla lectus felis.
                  Adipiscing amet interdum lacus blandit aliquet. Diam sem
                  fermentum phasellus nisi.
                </p>
              </div>
            </div>

            <div className=" flex justify-start items-start flex-col w-full xl:overflow-x-visible overflow-x-hidden">
              <div className="flex flex-col">
                <h2 className="font-bold text-navyBlue text-xl sm:text-2xl">
                  Recent Events
                </h2>
                <div className="w-3/5 h-[2px] bg-navyBlue"></div>
              </div>

              <div className="py-4 xl:py-4 xl:px-0 pl-1 flex xl:flex-col gap-6 md:gap-8 w-full xl:overflow-visible overflow-x-auto">
                {otherBlogs.map(({ img, alt, title }, index) => (
                  <OtherBlog key={index} img={img} alt={alt} title={title} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
