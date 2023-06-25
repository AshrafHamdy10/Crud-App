import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import "./UpdateProduct.css";

function UpdateProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

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

  const formSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:9000/products/${productID}`, {
      method: "PUT",
      headers: {
        "content-type": "Application/json",
      },
      body: JSON.stringify({
        title,
        price,
        description,
        image,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .then(() => {
        Swal.fire({
          title: "Done!",
          text: "Product has been updated successfully.",
          icon: "success",
          confirmButtonColor: "#3085d6",
        });
        setTimeout(() => {
          navigate("/products");
        }, 2000);
      });
  };

  return (
    <>
      <h1 className="text-center mt-3 mb-5">Update Product</h1>
      <form className="container form-control form" onSubmit={formSubmit}>
        <div className="mb-3">
          <label htmlFor="productTitle" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control mb-2 title"
            id="productTitle"
            placeholder="Insert Product Title"
            aria-describedby="Product title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <label className="text-light form-control bg-dark title">
            Current Title : "{product.title}"
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="productPrice" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control mb-2 price"
            id="productPrice"
            placeholder="Insert Product Price"
            aria-describedby="product price"
            onChange={(e) => setPrice(e.target.value)}
          />
          <label className="text-light form-control bg-dark price">
            Current Price : "{product.price} $"
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="productDescription" className="form-label">
            Description
          </label>
          <textarea
            type="text"
            className="form-control mb-2 des desc"
            id="productDescription"
            placeholder="Insert Product Description"
            aria-describedby="product description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <label className="text-light form-control bg-dark des">
            Current Description : "{product.description}"
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="productImage" className="form-label">
            Attach Image link
          </label>
          <input
            type="text"
            className="form-control mb-2 image"
            id="productImage"
            placeholder="Insert Image Link Source"
            name="picture"
            onChange={(e) => setImage(e.target.value)}
          />
          <label className="text-light form-control bg-dark img-lb">
            Current Image Source : "{product.image}"
          </label>
        </div>

        <button type="submit" className="btn btn-success up-btn">
          Update
        </button>
      </form>
    </>
  );
}
export default UpdateProduct;
