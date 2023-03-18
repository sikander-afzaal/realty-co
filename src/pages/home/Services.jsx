const Services = () => {
  return (
    <div className="wrapper py-[40px] sm:py-[80px] px-5 bg-mahroon">
      <div className="flex w-full max-w-[1375px] flex-col justify-start items-center gap-10 sm:gap-14">
        <h2 className="title text-center text-white">Discover Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 w-full gap-6">
          <ServiceBox
            img="/service1.png"
            title="5% Monthly Rental Charge"
            desc="We keep up-to-date with the latest property management laws and provide you with fully screened and qualified tenants. "
            active
          />
          <ServiceBox
            img="/service2.png"
            title="99.9% eviction-free tenant record"
            desc="Our property management stays current with laws and provides fully screened, qualified tenants."
          />
          <ServiceBox
            img="/service3.png"
            title="11-Month Tenant Guarantee
"
            desc="If a tenant we place leaves within 11 months, we will find a new tenant for free."
          />
          <ServiceBox
            img="/service4.png"
            title="Flexible monthly contract."
            desc="Our goal is for you to choose to stay with us because you love our service, not because you're tied to a management contract."
          />
        </div>
      </div>
    </div>
  );
};

export default Services;

const ServiceBox = ({ img, desc, title, active }) => {
  return (
    <div
      className={`flex w-full justify-start items-center text-center sm:text-left sm:items-start flex-col gap-3 rounded-[20px] p-5 ${
        active ? "bg-white" : "bg-transparent"
      }`}
    >
      <img src={img} className="h-[60px] object-contain" alt="" />
      <h3
        className={`text-xl sm:text-2xl font-bold ${
          active ? "text-[#363A3D]" : "text-white"
        }`}
      >
        {title}
      </h3>
      <p
        className={`text-base font-normal ${
          active ? "text-gray" : "text-white"
        }`}
      >
        {desc}
      </p>
    </div>
  );
};
