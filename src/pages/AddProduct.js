import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "../pages/AddProduct.css";
function AddProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();
  const formSubmit = (e) => {
    e.preventDefault();
    /* axios
      .post("http://localhost:9000/products", {
        title: title,
        price: price,
        description: description,
        image: image,
      }) */

    fetch(`http://localhost:9000/products`, {
      method: "POST",
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
          text: "Product has been added successfully.",
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
      <h1 className="text-center mt-3 mb-5">Add Product</h1>
      <form className="container form-control form" onSubmit={formSubmit}>
        <div className="mb-3">
          <label htmlFor="productTitle" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="productTitle"
            placeholder="Insert Product Title"
            aria-describedby="Product title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productPrice" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="productPrice"
            placeholder="Insert Product Price"
            aria-describedby="product price"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productDescription" className="form-label">
            Description
          </label>
          <textarea
            type="text"
            className="form-control desc"
            id="productDescription"
            placeholder="Insert Product Description"
            aria-describedby="product description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productImage" className="form-label">
            Attach Image link
          </label>
          <input
            type="text"
            id="productImage"
            className="form-control"
            placeholder="Insert Image Link Source"
            name="picture"
            onChange={(e) => setImage(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-success add-btn">
          Add Product
        </button>
      </form>
    </>
  );
}
export default AddProduct;
