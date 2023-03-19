import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header2 = () => {
  const [headerToggle, setHeaderToggle] = useState(false);
  const [headerbg, setHeaderbg] = useState(false);
  useEffect(() => {
    const bg = () => {
      if (window.scrollY > 0) {
        setHeaderbg(true);
      } else {
        setHeaderbg(false);
      }
    };

    window.addEventListener("scroll", bg);

    return () => {
      window.removeEventListener("scroll", bg);
    };
  }, []);

  return (
    <header className={`wrapper sticky z-50 top-0 left-0`}>
      {headerToggle && (
        <div
          onClick={() => setHeaderToggle(false)}
          className="lg:hidden cursor-pointer z-[90] block bg-brownGr opacity-60 w-full h-full fixed top-0 left-0"
        ></div>
      )}
      <div
        className={`bg-brownGr transition-all duration-300 flex  justify-between  items-stretch border-b gap-[30px] border-solid border-primary py-[15px] px-5 lg:px-8 w-full`}
      >
        <div className="hidden sm:flex justify-center items-center gap-[30px]">
          <div className="text-white flex justify-start items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
              />
            </svg>
            <a href="mailto:example@mail.com" className="text-sm">
              Email us at : example@mail.com
            </a>
          </div>
        </div>
        <div className="flex justify-center items-stretch gap-[30px]">
          <div className="hidden lg:flex justify-center items-center gap-[30px]">
            <a href="#" target={"blank"}>
              <img src="/fb.png" className="max-w-5 object-contain" alt="" />
            </a>
            <a href="#" target={"blank"}>
              <img src="/bk.png" className="max-w-5 object-contain" alt="" />
            </a>
            <a href="#" target={"blank"}>
              <img src="/li.png" className="max-w-5 object-contain" alt="" />
            </a>
            <a href="#" target={"blank"}>
              <img src="/in.png" className="max-w-5 object-contain" alt="" />
            </a>
            <a href="#" target={"blank"}>
              <img src="/be.png" className="max-w-5 object-contain" alt="" />
            </a>
          </div>
          <div className=" w-[1px] lg:block hidden bg-white"></div>
          <div className="text-white flex justify-start items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>

            <a href="tel:123-4567 890" className="text-sm">
              123-4567 890
            </a>
          </div>
        </div>
      </div>
      <div
        className={`bg-white transition-all duration-300 flex justify-between items-center  w-full py-2 gap-5 px-5 lg:px-8`}
      >
        <Link to={"/"}>
          <img
            src="/logo2.png"
            className={`max-w-[180px] sm:max-w-full object-contain transition-all duration-300 `}
            alt=""
          />
        </Link>
        <nav
          className={`flex z-[91] gap-[30px] justify-start flex-col lg:flex-row pt-[5rem] pb-[3rem] px-[3rem] lg:p-0 bg-primary h-full lg:bg-transparent lg:h-auto  fixed top-0 lg:static lg:justify-end items-center sm:items-start lg:items-center w-full max-w-[450px] lg:max-w-[950px] overflow-y-auto lg:overflow-visible text-black ${
            headerToggle ? "right-0" : "-right-[800px]"
          } transition-all duration-700`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="black"
            onClick={() => setHeaderToggle(false)}
            className="w-6 h-6 lg:hidden block absolute top-4 cursor-pointer right-4 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>

          <Link
            onClick={() => setHeaderToggle(false)}
            className="text-lg lg:text-sm  font-semibold text-black lg:text-inherit"
            to="/"
          >
            Home
          </Link>
          <Link
            onClick={() => setHeaderToggle(false)}
            className="text-lg lg:text-sm  font-semibold text-black lg:text-inherit"
            to="/aboutus"
          >
            About Us
          </Link>
          <a
            onClick={() => setHeaderToggle(false)}
            className="text-lg lg:text-sm  font-semibold text-black lg:text-inherit"
            href="#"
          >
            Our Agents
          </a>
          <a
            onClick={() => setHeaderToggle(false)}
            className="text-lg lg:text-sm  font-semibold text-black lg:text-inherit"
            href="#"
          >
            Properties
          </a>
          <Link
            onClick={() => setHeaderToggle(false)}
            className="text-lg lg:text-sm  font-semibold text-black lg:text-inherit"
            to="/testimonial"
          >
            Gallery
          </Link>
          <Link
            onClick={() => setHeaderToggle(false)}
            className="text-lg lg:text-sm  font-semibold text-black lg:text-inherit"
            to="/blog"
          >
            Blog
          </Link>
          <Link
            onClick={() => setHeaderToggle(false)}
            className="text-lg lg:text-sm  font-semibold text-black lg:text-inherit"
            to="/aboutus"
          >
            Contact Us
          </Link>
          <input
            type="text"
            placeholder="Seach here"
            className="border-none max-w-[140px] outline-none bg-transparent  text-lg lg:text-sm font-semibold placeholder:text-inherit text-inherit lg:text-left text-center"
          />
          <div className="lg:hidden flex justify-center items-center gap-[30px]">
            <a href="#" target={"blank"}>
              <img
                src="/fb.png"
                className="max-w-5 invert object-contain"
                alt=""
              />
            </a>
            <a href="#" target={"blank"}>
              <img
                src="/bk.png"
                className="max-w-5 invert object-contain"
                alt=""
              />
            </a>
            <a href="#" target={"blank"}>
              <img
                src="/li.png"
                className="max-w-5 invert object-contain"
                alt=""
              />
            </a>
            <a href="#" target={"blank"}>
              <img
                src="/in.png"
                className="max-w-5 invert object-contain"
                alt=""
              />
            </a>
            <a href="#" target={"blank"}>
              <img
                src="/be.png"
                className="max-w-5 invert object-contain"
                alt=""
              />
            </a>
          </div>
          <div className="flex flex-col sm:hidden justify-center items-center gap-[30px]">
            <div className="text-black flex justify-start items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
                />
              </svg>
              <a href="mailto:inqury@toprealtyco.com" className="text-sm">
                inqury@toprealtyco.com{" "}
              </a>
            </div>
            <div className="text-black flex justify-start items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>

              <a href="tel:123-4567 890" className="text-sm">
                123-4567 890
              </a>
            </div>
          </div>
        </nav>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => setHeaderToggle(true)}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="black"
          className="w-6 h-6 cursor-pointer lg:hidden block"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
          />
        </svg>
      </div>
    </header>
  );
};

export default Header2;
