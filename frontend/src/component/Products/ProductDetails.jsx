import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "../ProdData/Data";
import Products from "./Product";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = ({ cart, setCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [relatedProduct, setRelatedProduct] = useState([]);

  useEffect(() => {
    const filterProduct = items.filter((product) => product.id == id);
    // console.log(filterProduct)
    setProduct(filterProduct[0]);

    const relatedProduct = items.filter(
      (related) => related.category === product.category
    );
    // console.log("Related products",relatedProduct)
    setRelatedProduct(relatedProduct);
  }, [id, product.category]);
  const addToCart = (id, price, title, description, imgSrc) => {
    const obj = {
      id,
      price,
      title,
      description,
      imgSrc,
    };
    setCart([...cart, obj]);
    console.log(" card element = ", cart);
    toast.success("item added on cart", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
     <div className="container con border rounded shadow-lg p-5 mt-3">
  <div className="row">
    <div className="col-md-6 d-flex align-items-center">
      <img src={product.imgSrc} alt="" className="img-fluid" style={{ maxWidth: "100%" }} />
    </div>
    <div className="col-md-6 d-flex flex-column justify-content-center">
      <h1 className="card-title text-center">{product.title}</h1>
      <p className="card-text text-center">{product.description}</p>
      <div className="d-flex justify-content-center mt-3">
        <button className="btn btn-primary mx-3">₹{product.price}</button>
        <button
          onClick={() =>
            addToCart(
              product.id,
              product.price,
              product.title,
              product.description,
              product.imgSrc
            )
          }
          className="btn btn-warning"
        >
          Add to cart
        </button>
      </div>
    </div>
  </div>
</div>
<h1 className="mt-5 mb-3 text-center">Related Products</h1>
<Products cart={cart} setCart={setCart} items={relatedProduct} />

    </>
  );
};

export default ProductDetails;
