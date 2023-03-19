import BlogHeader from "./BlogHeader";
import BlogDetails from "./BlogDetails";
import Header2 from "../../layout/Header2";
import Pagination from "../../components/Pagination";

const Index = () => {
  return (
    <>
      <Header2 />
      <BlogHeader />
      <BlogDetails />
      <Pagination totalPages={54} selectedPage={1} />
    </>
  );
};

export default Index;
