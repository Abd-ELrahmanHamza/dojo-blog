import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("mario");
  const [body, setBody] = useState("");
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, author, body };

    const afterFetch = () => {
      setIsPending(false);
      // console.log("Blog Add");
    };

    setIsPending(true);
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify(blog),
    }).then(afterFetch);
  };

  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Blog body</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>

        <label>Blog author</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        {!isPending && <button>Add blog</button>}

        {isPending && (
          <button disabled style={{ backgroundColor: "gray" }}>
            Add blog
          </button>
        )}
      </form>
    </div>
  );
};

export default Create;
