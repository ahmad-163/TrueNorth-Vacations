import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top" 
      style={{
       background: scrolled ? "rgba(255, 255, 255, 0.7)" : "transparent",
backdropFilter: scrolled ? "blur(10px) saturate(180%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(10px)" : "none", // For Safari
        zIndex: 100,
        boxShadow: scrolled ? "0 2px 10px rgba(0,0,0,0.1)" : "none",
        transition: "all 0.3s ease"
      }}
    >
      <div className="container-fluid px-5">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img 
            src={props.logo} 
            alt="Logo" 
            style={{ 
              height: "50px",
              filter: scrolled ? "invert(0)" : "invert(0)" // Adjust if logo needs inversion
            }} 
          />
        </Link>

        {/* Toggler for mobile */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          style={{
            borderColor: scrolled ? "#333" : "white"
          }}
        >
          <span 
            className="navbar-toggler-icon" 
            style={{filter: scrolled ? "invert(0)" : "invert(1)"}}
          ></span>
        </button>

        {/* Nav Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center gap-4">
            <li className="nav-item">
              <Link 
                className="nav-link hover nav-link-sm" 
                to="/"
                style={{ 
                  fontSize: "14px", 
                  letterSpacing: "0.5px",
                  color: scrolled ? "#333" : "white"
                }}
              >
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className="nav-link hover nav-link-sm" 
                to="/popular"
                style={{ 
                  fontSize: "14px",
                  color: scrolled ? "#666" : "rgba(255,255,255,0.7)"
                }}
              >
                POPULAR PLACES
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className="nav-link" 
                to="/deals"
                style={{ 
                  fontSize: "14px",
                  color: scrolled ? "#666" : "rgba(255,255,255,0.7)"
                }}
              >
                CURRENT DEALS
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className="nav-link" 
                to="/contact"
                style={{ 
                  fontSize: "14px",
                  color: scrolled ? "#666" : "rgba(255,255,255,0.7)"
                }}
              >
                CONTACT
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className="nav-link" 
                to="/login"
                style={{ 
                  fontSize: "14px", 
                  textTransform: "uppercase", 
                  letterSpacing: "1px",
                  color: scrolled ? "#666" : "rgba(255,255,255,0.7)"
                }}
              >
                LOGIN
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/register"
                className="btn px-4 py-2"
                style={{
                  backgroundColor: scrolled ? "#333" : "white",
                  color: scrolled ? "white" : "#333",
                  fontSize: "14px",
                  fontWeight: "500",
                  borderRadius: "5px",
                  border: "none",
                  transition: "all 0.3s ease"
                }}
              >
                REGISTER
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;