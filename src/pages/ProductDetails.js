import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../pages/ProductDetails.css";

function ProductDetails() {
  const [product, setProduct] = useState({});
  let { productID } = useParams();
  useEffect(() => {
    fetch(`http://localhost:9000/products/${productID}`)
      .then((res) => res.json())
      .then((product) => {
        setProduct(product);
      });
  }, [productID]);

  return (
    <>
      <div className="form-control">
        {product && <h1 className="product-title">{product.title}</h1>}
        <img className="product-img" src={product.image} alt="Product" />
        <h3 className="product-price">{product.price} $</h3>
        <p className="product-des">{product.description}</p>
      </div>
    </>
  );
}
export default ProductDetails;
