import { useState, useEffect } from "react";
import Blogs from "./BlogsList";
import useFetch from "./useFetch";
const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {
        /* All blogs */
        blogs && (
          <Blogs
            blogs={blogs}
            title={"All blogs"}
          />
        )
      }
    </div>
  );
};

export default Home;
