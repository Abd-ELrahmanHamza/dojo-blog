import { Link } from "react-router-dom";

const Blogs = ({ blogs, title }) => {
  // const blogs = props.blogs;
  // const title = props.title;
  // const handleDeleteBlogs = props.handleDeleteBlogs;

  //   console.log(blogs);

  return (
    <div className="blogs">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blog/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p> Written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
