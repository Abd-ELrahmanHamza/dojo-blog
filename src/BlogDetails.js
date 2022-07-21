import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();

  const {
    error,
    isPending,
    data: blog,
  } = useFetch(`http://localhost:8000/blogs/${id}`);

  const [isPendingDelete, setIsPendingDelete] = useState(false);

  const history = useHistory();

  const handleDelete = () => {
    setIsPendingDelete(true);
    fetch(`http://localhost:8000/blogs/${id}`, { method: "DELETE" }).then(() =>
      setIsPendingDelete(false)
    );

    history.push("/");
  };
  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by{blog.author}</p>
          <div>{blog.body}</div>
          {!isPendingDelete && <button onClick={handleDelete}>Delete</button>}
          {isPendingDelete && (
            <button disabled style={{ backgroundColor: "gray" }}>
              Delete
            </button>
          )}
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
