import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");

  return (
    <div className="create">
      <h2>Add a new blog</h2>

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
      <button>Add blog</button>
      <p>{title}</p>
      <p>{body}</p>
      <p>{author}</p>
    </div>
  );
};

export default Create;
