import { useState } from "react";
import { Link } from "react-router-dom";

const HeaderDropdown = ({ dropText, dropItems }) => {
  const [dropDown, setDropDown] = useState(false);
  return (
    <div className="relative lg:h-full flex-col gap-2 flex items-center w-full sm:w-auto sm:items-start lg:items-center">
      <button
        onClick={() => setDropDown((prev) => !prev)}
        onMouseEnter={() => (window.innerWidth > 1024 ? setDropDown(true) : "")}
        onMouseLeave={() =>
          window.innerWidth > 1024 ? setDropDown(false) : ""
        }
        className="text-lg h-full lg:text-sm  font-semibold text-black lg:text-inherit"
      >
        {dropText}
      </button>
      {dropDown && (
        <div
          onMouseEnter={() =>
            window.innerWidth > 1024 ? setDropDown(true) : ""
          }
          onMouseLeave={() =>
            window.innerWidth > 1024 ? setDropDown(false) : ""
          }
          className="lg:absolute flex-col w-full sm:w-max top-full left-1/2 lg:-translate-x-1/2 bg-white p-3 rounded flex justify-center items-center gap-3"
        >
          {dropItems.map((elem, idx) => {
            return (
              <Link
                key={idx + elem}
                className="text-lg lg:text-sm  font-semibold text-black"
                to={elem.url}
              >
                {elem.name}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default HeaderDropdown;
