import Hero from "./Hero";
import Services from "./Services";
import Video from "./Video";
import Header from "../../layout/Header";
import Articles from "./Articles";
import Customer from "./Customer";
import TenantFaq from "./TenantFaq";
import LandlordFaq from "./LandlordFaq";
import Find from "./Find";

const Index = () => {
  return (
    <>
      <Header />
      <Hero />
      <Video />
      <Services />
      <Articles />
      <Customer />
      <TenantFaq />
      <LandlordFaq />
      <Find />
    </>
  );
};

export default Index;
