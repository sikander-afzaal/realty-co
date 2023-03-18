import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home/index";
import Blog from "./pages/blog/index";
import Testimonial from "./pages/testimonial/index";
import AboutUs from "./pages/aboutus/index";
import Footer from "./layout/Footer";
import { useEffect } from "react";

const App = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Blog />} path="/blog" />
        <Route element={<Testimonial />} path="/testimonial" />
        <Route element={<AboutUs />} path="/aboutus" />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
