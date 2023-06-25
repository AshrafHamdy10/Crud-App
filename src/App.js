import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Products from "./pages/products";
import AddProduct from "./pages/AddProduct";
import ProductDetails from "./pages/ProductDetails";
import DeleteProduct from "./pages/DeleteProduct";
import UpdateProduct from "./pages/UpdateProduct";

function App() {
  return (
    <div className="App form-control">
      <Navbar />
      <div className="row">
        <div className="col-md-2 sidebar">
          <Sidebar />
        </div>
        <div className="col-md-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="/products/add" element={<AddProduct />} />
            <Route
              path="/products/delete/:productID"
              element={<DeleteProduct />}
            />
            <Route path="/products/:productID" element={<ProductDetails />} />
            <Route
              path="/products/update/:productID"
              element={<UpdateProduct />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
