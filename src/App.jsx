import { Route, Routes } from "react-router-dom";
import Header from "./layout/Header";
import Home from "./pages/home/index";
import Blog from "./pages/blog/index";
import Testimonial from "./pages/testimonial/index";
import AboutUs from "./pages/aboutus/index";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Blog />} path="/blog" />
        <Route element={<Testimonial />} path="/testimonial" />
        <Route element={<AboutUs />} path="/aboutus" />
      </Routes>
    </>
  );
};

export default App;
