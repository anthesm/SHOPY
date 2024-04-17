import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsFillCartCheckFill } from "react-icons/bs";
import { items } from "./ProdData/Data";

const Navbar = ({ setData, cart }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const auth = localStorage.getItem("user");

  const filterbyCategory = (category) => {
    const element = items.filter((product) => product.category === category);
    setData(element);
  };

  const filterbyPrice = (price) => {
    const element = items.filter((product) => product.price >= price);
    setData(element);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
    setSearchTerm("");
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };

  return (
    <header className="sticky-top">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link to={"/"} className="navbar-brand">
            Evin Shopy
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded={isOpen ? "true" : "false"}
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/products" className="nav-link" onClick={toggleMenu}>
                  Products
                </Link>
              </li>
              {auth ? (
                <li className="nav-item">
                  <Link to="/signup/" className="nav-link" onClick={logout}>
                    Logout ({JSON.parse(auth).name})
                  </Link>
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <Link to="/signup" className="nav-link" onClick={toggleMenu}>
                      Signup
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/login" className="nav-link" onClick={toggleMenu}>
                      Login
                    </Link>
                  </li>
                </>
              )}
              <li className="nav-item">
                <Link to={"/cart"} className="nav-link">
                  <button type="button" className="btn btn-primary position-relative">
                    <BsFillCartCheckFill style={{ fontSize: "1.5rem" }} />
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {cart.length}
                      <span className="visually-hidden">unread messages</span>
                    </span>
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {location.pathname === "/products" && (
        <div className="container d-flex justify-content-center mt-3">
          <div className="btn-group">
            <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              Filter by
            </button>
            <ul className="dropdown-menu">
              <li><button className="dropdown-item" onClick={() => setData(items)}>No filter</button></li>
              <li><button className="dropdown-item" onClick={() => filterbyCategory("men")}>Men</button></li>
              <li><button className="dropdown-item" onClick={() => filterbyCategory("women")}>Women</button></li>
              <li><button className="dropdown-item" onClick={() => filterbyPrice(199)}>199</button></li>
              <li><button className="dropdown-item" onClick={() => filterbyPrice(299)}>299</button></li>
              <li><button className="dropdown-item" onClick={() => filterbyPrice(399)}>399</button></li>
              <li><button className="dropdown-item" onClick={() => filterbyPrice(499)}>499</button></li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
