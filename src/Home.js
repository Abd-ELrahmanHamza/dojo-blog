import { useState, useEffect } from "react";
import Blogs from "./BlogsList";
const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const handleDeleteBlogs = (id) => {
    const newBlogs = blogs.filter((element) => element.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    const fetchResponse = (response) => {
      if (!response.ok) {
        throw Error("Couldn't fetch data please try again");
      }
      return response.json();
    };
    const setResponse = (data) => {
      setBlogs(data);
      setIsPending(false);
      setError(null);
    };

    const handleFetchError = (error) => {
      setError(error.message);
      setIsPending(false);
    };
    fetch("http://localhost:8000/blogs")
      .then(fetchResponse)
      .then(setResponse)
      .catch(handleFetchError);
  }, []);

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
            handleDeleteBlogs={handleDeleteBlogs}
          />
        )
      }
    </div>
  );
};

export default Home;
