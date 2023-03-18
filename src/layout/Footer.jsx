import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="wrapper mt-[60px] sm:mt-[80px] py-[40px] bg-white">
      <div className="w-full lg:flex-row flex-col  max-w-[1340px] px-5 flex justify-between items-center lg:items-start gap-8  lg:gap-4">
        <div className="flex justify-start lg:text-left text-center items-center lg:items-start flex-col gap-5 ">
          <img
            src="/logo2.png"
            className="w-[220px] mb-2 object-contain"
            alt=""
          />
          <h3 className="text-lightBlack text-2xl font-semibold">Contact Us</h3>
          <a
            href="tel:123 400 123"
            className="text-[#6d737a] text-base font-normal"
          >
            Call : +123 400 123
          </a>
          <p className="text-[#6d737a] max-w-[312px] text-base font-normal">
            Praesent nulla massa, hendrerit vestibulum gravida in, feugiat
            auctor felis.
          </p>
          <a
            href="mailto:example@mail.com"
            className="text-[#363A3D] text-base font-normal"
          >
            Email: example@mail.com
          </a>
          <div className="flex justify-start items-center gap-4">
            <a
              href="#"
              target="blank"
              className="bg-brownGr w-[48px] aspect-square rounded flex justify-center items-center"
            >
              <img src="/fb.png" alt="" />
            </a>
            <a
              href="#"
              target="blank"
              className="bg-brownGr w-[48px] aspect-square rounded flex justify-center items-center"
            >
              <img src="/bk.png" alt="" />
            </a>
            <a
              href="#"
              target="blank"
              className="bg-brownGr w-[48px] aspect-square rounded flex justify-center items-center"
            >
              <img src="/li.png" alt="" />
            </a>
            <a
              href="#"
              target="blank"
              className="bg-brownGr w-[48px] aspect-square rounded flex justify-center items-center"
            >
              <img src="/in.png" alt="" />
            </a>
            <a
              href="#"
              target="blank"
              className="bg-brownGr w-[48px] aspect-square rounded flex justify-center items-center"
            >
              <img src="/be.png" alt="" />
            </a>
          </div>
        </div>
        <div className="flex justify-start lg:text-left text-center items-center lg:items-start flex-col gap-5 ">
          <h3 className="text-lightBlack mb-1 text-2xl font-semibold">
            Features
          </h3>
          <Link className="text-[#6d737a] text-base font-normal" to={"/"}>
            Home
          </Link>
          <Link className="text-[#6d737a] text-base font-normal" to={"/"}>
            Become a Host
          </Link>
          <Link className="text-[#6d737a] text-base font-normal" to={"/"}>
            Pricing
          </Link>
          <Link className="text-[#6d737a] text-base font-normal" to={"/blog"}>
            Blog
          </Link>
          <Link
            className="text-[#6d737a] text-base font-normal"
            to={"/aboutus"}
          >
            Contact
          </Link>
        </div>
        <div className="flex justify-start lg:text-left text-center items-center lg:items-start flex-col gap-5 ">
          <h3 className="text-lightBlack mb-1 text-2xl font-semibold">
            Company
          </h3>
          <Link
            className="text-[#6d737a] text-base font-normal"
            to={"/aboutus"}
          >
            About Us
          </Link>
          <Link className="text-[#6d737a] text-base font-normal" to={"/"}>
            Press
          </Link>
          <Link
            className="text-[#6d737a] text-base font-normal"
            to={"/aboutus"}
          >
            Contact
          </Link>
          <Link className="text-[#6d737a] text-base font-normal" to={"/"}>
            Careers
          </Link>
          <Link className="text-[#6d737a] text-base font-normal" to={"/blog"}>
            Blog
          </Link>
        </div>
        <div className="flex justify-start lg:text-left text-center items-center lg:items-start flex-col gap-5 ">
          <h3 className="text-lightBlack mb-1 text-2xl font-semibold">
            Team and policies
          </h3>
          <Link className="text-[#6d737a] text-base font-normal" to={"/"}>
            Terms of servies
          </Link>
          <Link className="text-[#6d737a] text-base font-normal" to={"/"}>
            Privacy Policy
          </Link>
          <Link className="text-[#6d737a] text-base font-normal" to={"/"}>
            Security
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
