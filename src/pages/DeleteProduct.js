import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import "./DeleteProduct.css";
function DeleteProduct() {
  const [product, setProduct] = useState({});
  let { productID } = useParams();
  useEffect(() => {
    fetch(`http://localhost:9000/products/${productID}`)
      .then((res) => res.json())
      .then((product) => {
        setProduct(product);
      });
  }, [productID]);
  const navigate = useNavigate();
  const deleteProduct = (productID) => {
    fetch(`http://localhost:9000/products/${productID}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire({
          title: "Done!",
          text: "Product has been deleted successfully.",
          icon: "success",
          confirmButtonColor: "#3085d6",
        });
        setTimeout(() => {
          navigate("/products");
        }, 3000);
      });
  };
  return (
    <>
      <div className="form-control">
        {product && <h1 className="product-title">{product.title}</h1>}
        <img className="product-img" src={product.image} alt="Product" />
        <h3 className="product-price">{product.price} $</h3>
        <hr />
        <h6 className="product-warn text-danger">
          Are You Sure You Want To Delelte This Product ?!
        </h6>
        <button
          className="btn btn-danger del-btn"
          onClick={() => deleteProduct(product.id)}
        >
          Delete
        </button>
        <Link to={`/products`} className="btn btn-dark back-btn">
          Go Back
        </Link>
      </div>
    </>
  );
}
export default DeleteProduct;
