import Slideshow from "./_home/Slideshow";
import HomePosts from "./_home/HomePosts";

const page = () => {
  return (
    <>
      {" "}
      <Slideshow />
      <main id="main-content" className=" container ">
        <HomePosts />
      </main>
    </>
  );
};

export default page;
