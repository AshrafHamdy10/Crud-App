import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../pages/Products.css";
function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:9000/products`)
      .then((res) => res.json())
      .then((data) => {
        console.table(data);
        setProducts(data);
      });
  }, []);
  return (
    <>
      <h1 className="mt-3 text-center">Products</h1>

      <Link className="btn btn-success mt-2" to={"/products/add"}>
        Add New Product
      </Link>
      <table className="table table-striped mt-5">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.price} $</td>
                <td>
                  <img src={product.image} alt="Product" />
                </td>
                <td>
                  <Link
                    to={`/products/delete/${product.id}`}
                    className="btn btn-danger m-2 mt-4"
                  >
                    Delete
                  </Link>
                  <Link
                    to={`/products/${product.id}`}
                    className="btn btn-info m-2 mt-4"
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-primary m-2 mt-4"
                    to={`/products/update/${product.id}`}
                  >
                    Update
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
export default Products;
