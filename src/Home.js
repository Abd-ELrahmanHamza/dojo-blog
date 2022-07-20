import { useState, useEffect } from "react";
import Blogs from "./BlogsList";
const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);

  const handleDeleteBlogs = (id) => {
    const newBlogs = blogs.filter((element) => element.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    const fetchResponse = (response) => {
      return response.json();
    };
    const setResponse = (data) => {
      setBlogs(data);
      setIsPending(false);
    };

    fetch("http://localhost:8000/blogs").then(fetchResponse).then(setResponse);
  }, []);

  return (
    <div className="home">
      {isPending && <div>Loading...</div>}
      {
        /* All blogs */
        blogs && (
          <Blogs
            blogs={blogs}
            title={"All blogs"}
            handleDeleteBlogs={handleDeleteBlogs}
          />
        )
      }
    </div>
  );
};

export default Home;
