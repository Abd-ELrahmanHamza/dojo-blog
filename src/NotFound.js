import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="NotFound">
      <h2>Sorry</h2>
      <p>Page not found</p>
      <Link to="/">Return to home page</Link>
    </div>
  );
};

export default NotFound;
