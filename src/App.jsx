import { Route, Routes } from "react-router-dom";
import Header from "./layout/Header";
import Home from "./pages/home/index";
import Blog from "./pages/blog/index";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Blog />} path="/blog" />
      </Routes>
    </>
  );
};

export default App;
