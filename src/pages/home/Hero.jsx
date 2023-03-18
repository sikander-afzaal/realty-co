const Hero = () => {
  return (
    <div className="xl:h-screen pb-8  wrapper bg-hero bg-cover bg-no-repeat min-h-screen pt-[200px] xl:p-0 xl:min-h-[800px]">
      <div className="relative flex justify-center gap-8 sm:gap-16 xl:gap-0 items-center h-full flex-col w-full max-w-[1375px] px-5">
        <h2 className="title text-white xl:h-full flex justify-center items-center text-center">
          Greater Portland Property Management
        </h2>
        <div className="flex gap-5 justify-center items-center flex-col w-full">
          <div className="gap-5 sm:gap-16 w-full flex sm:flex-row flex-col justify-center items-center">
            <button className="text-white text-base font-medium sm:w-auto w-full bg-brownGr px-6 py-3 rounded border-none">
              Get your FREE Rental Estimate !
            </button>
            <button className="text-lightPurple text-base font-medium bg-white sm:w-auto w-full px-6 py-3 rounded border-none">
              Questions?
            </button>
          </div>
          <div className="flex gap-5 xl:gap-0 flex-col xl:flex-row xl:translate-y-1/2 xl:-mt-[60px] justify-between items-center w-full bg-white rounded-lg py-5 px-4">
            <div className="flex sm:px-5  justify-start items-start w-full flex-col gap-3">
              <h3 className="text-darkBlue text-base font-semibold">Address</h3>
              <div className="flex justify-start items-center flex-col w-full gap-3">
                <input
                  type="text"
                  placeholder="Type Your Address"
                  className="input text-center"
                />
                <div className="grid grid-cols-[1fr__2fr__1fr] w-full gap-3">
                  <input
                    type="text"
                    placeholder="APT."
                    className="input text-center"
                  />
                  <input
                    type="text"
                    placeholder="State"
                    className="input text-center"
                  />
                  <input
                    type="text"
                    placeholder="Zip"
                    className="input text-center"
                  />
                </div>
              </div>
            </div>
            <div className="flex sm:px-5 sm:flex-row flex-col xl:border-x border-solid border-[#CFD3D6] justify-center items-center gap-5 sm:gap-3 w-full">
              <div className="flex justify-start items-start flex-col gap-3 w-full">
                <h3 className="text-darkBlue text-base font-semibold">Name</h3>
                <input
                  type="text"
                  className="input pl-2"
                  placeholder="First & Last Name"
                />
              </div>
              <div className="flex justify-start items-start flex-col gap-3 w-full">
                <h3 className="text-darkBlue text-base font-semibold">
                  Phone#
                </h3>
                <input
                  type="text"
                  className="input pl-2"
                  placeholder="Phone Number"
                />
              </div>
              <div className="flex justify-start items-start flex-col gap-3 w-full">
                <h3 className="text-darkBlue text-base font-semibold">Email</h3>
                <input
                  type="text"
                  className="input text-center"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="flex xl:max-w-[220px] sm:px-5 justify-start items-start flex-col xl:border-r border-solid border-[#CFD3D6] gap-3 w-full">
              <h3 className="text-darkBlue text-base font-semibold">
                Housing Type
              </h3>
              <select className="input">
                <option value="#">Housing Type</option>
                <option value="#">2</option>
                <option value="#">3</option>
              </select>
            </div>
            <button className="text-white ml-5 text-base font-medium bg-brownGr px-6 py-3 rounded border-none">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
