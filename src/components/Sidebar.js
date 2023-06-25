import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <ul className="list-unstyled">
        <li>
          <hr />
          <Link to={"/products"}>Get All Products</Link>
        </li>
        <hr />
        <li>
          <a href="...">Get All Categories</a>
          <hr />
        </li>
      </ul>
    </>
  );
}
export default Sidebar;
