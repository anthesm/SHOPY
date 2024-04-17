import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cart, setCart }) => {
  return (
    <>
      <div className="container my-5" style={{ maxWidth: "54%" }}>
        {cart.length === 0 ? (
          <div className="text-center">
            <h1>Your Cart is empty</h1>
            <Link to={"/"} className="btn btn-warning">
              Continue Shopping...
            </Link>
          </div>
        ) : (
          cart.map((product, index) => (
            <div key={index} className="card mb-3 my-5">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={product.imgSrc}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body text-center">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <div>
                      <button className="btn btn-primary mx-3">
                        ₹{product.price}
                      </button>
                      <button className="btn btn-warning">Buy now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      {cart.length !== 0 && (
        <div className="container text-center my-5">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ gap: "1rem" }}
          >
            <button className="btn btn-warning">Checkout</button>
            <button onClick={() => setCart([])} className="btn btn-warning">
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
