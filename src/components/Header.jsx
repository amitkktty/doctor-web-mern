import React, { useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Check login state on load
  useEffect(() => {
    const loggedIn = localStorage.getItem("token") !== null;
    setIsLoggedIn(loggedIn);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <header
      className="header"
      style={{
        background: "white",
        zIndex: 100000,
        borderBottom: "1px solid black",
      }}
    >
      {/* Topbar */}
      <div className="topbar" style={{ borderBottom: "1px solid blue" }}>
        <div className="container">
          <div className="row">
            <div className="col-3" style={{ paddingTop: "1px" }}>
              <ul className="top-contact text-left">
                <li>
                  <i className="fa fa-phone"></i> +91-8409983470
                </li>
              </ul>
            </div>
            <div className="col-9 text-right">
              <ul className="top-contact">
                <li>
                  <i className="fa fa-envelope"></i>
                  <a href="mailto:support@yourmail.com">
                    support@pathakjip123
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Header Inner */}
      <div className="header-inner">
        <div className="container">
          <div className="inner row align-items-center">
            {/* Logo */}
            <div className="col-lg-3 col-6">
              <div className="logo">
                <a href="/">
                  <img src="/img/logo.png" alt="logo" />
                </a>
              </div>
            </div>

            {/* Hamburger Toggle (Mobile) */}
            <div className="col-6 d-lg-none text-right">
              <button
                className="btn btn-outline-dark"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <i className="fa fa-bars"></i>
              </button>
            </div>

            {/* Menu */}
            <div
              className={`col-lg-7 col-12 main-menu ${
                menuOpen ? "d-block" : "d-none d-lg-block"
              }`}
            >
              <nav className="navigation">
                <ul className="nav menu flex-column flex-lg-row">
                  <li>
                    <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/about-us" className={({ isActive }) => (isActive ? "active" : "")}>
                      About Us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/services" className={({ isActive }) => (isActive ? "active" : "")}>
                      Services
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/blogs" className={({ isActive }) => (isActive ? "active" : "")}>
                      Blogs
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact-us" className={({ isActive }) => (isActive ? "active" : "")}>
                      Contact Us
                    </NavLink>
                  </li>
                  <li className="bottombtn">
                      <NavLink to="/book-appointment" className="btn btn-primary">
                  Book Appointment
                </NavLink>

                {!isLoggedIn ? (
                  <NavLink to="/login" className="btn btn-secondary">
                    Login
                  </NavLink>
                ) : (
                  <button onClick={handleLogout} className="btn btn-danger">
                    Logout
                  </button>
                )}
                  </li>
                </ul>
              </nav>
            </div>

            {/* Buttons */}
            <div className="col-lg-2 col-12 mt-2 mt-lg-0">
              <div className="get-quote d-flex gap-2 justify-content-lg-end">
                <NavLink to="/book-appointment" className="btn btn-primary">
                  Book Appointment
                </NavLink>

                {!isLoggedIn ? (
                  <NavLink to="/login" className="btn btn-secondary">
                    Login
                  </NavLink>
                ) : (
                  <button onClick={handleLogout} className="btn btn-danger">
                    Logout
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;


//
//
//import React, { useState, useEffect } from "react";
//import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
//
//function Header() {
//  const [isLoggedIn, setIsLoggedIn] = useState(false);
//  const location = useLocation();
//  const navigate = useNavigate();
//
//  // On page load, check login status from localStorage
//  useEffect(() => {
//    const loggedIn = localStorage.getItem("token") !== null;
//    console.log("Is Logged In:", loggedIn);
//    setIsLoggedIn(loggedIn);
//  }, [location]);
//
//  // Handle logout logic
//  const handleLogout = async () => {
//    try {
//      const res = await fetch("http://localhost:5000/api/auth/logout", {
//        method: "POST",
//        credentials: "include", // Send cookies
//      });
//
//      const data = await res.json();
//      console.log(data.message); // Debugging line
//
//      // Remove login status from localStorage
//      localStorage.removeItem("token");
//      navigate("/");
//      setIsLoggedIn(false); // Update state to reflect logout
//    } catch (error) {
//      console.error("Logout error:", error);
//    }
//  };
//
//  return (
//    <>
//      <header className="header" style={{ background: "white !important",zIndex:1000000000000,borderBottom: "1px solid black" }}>
//        <div className="topbar" style={{ borderBottom: "1px solid blue" }}>
//          <div className="container">
//            <div className="row">
//              <div className="col-lg-6 col-md-6 col-6" style={{ paddingTop: "1px" }}>
//                <ul className="top-contact text-left float-unset">
//                  <li>
//                    <i className="fa fa-phone" ></i>+91-8409983470
//                  </li>
//                </ul>
//              </div>
//              <div className="col-lg-6 col-md-6 col-6 text-right">
//                <ul className="top-contact">
//                  <li>
//                    <i className="fa fa-envelope"></i>
//                    <a href="mailto:support@yourmail.com">
//                      support@pathakjip123
//                    </a>
//                  </li>
//                </ul>
//              </div>
//            </div>
//          </div>
//        </div>
//        <div className="header-inner">
//          <div className="container">
//            <div className="inner">
//              <div className="row">
//                <div className="col-lg-3 col-md-3 col-12">
//                  <div className="logo">
//                    <a href="/">
//                      <img src="/img/logo.png" alt="#" />
//                    </a>
//                  </div>
//                </div>
//                <div className="col-lg-7 col-md-9 col-12">
//                  <div className="main-menu">
//                    <nav className="navigation">
//                      <ul className="nav menu">
//                        <li>
//                          <Link
//                            to="/"
//                            className={({ isActive }) =>
//                              isActive ? "active" : ""
//                            }
//                          >
//                            Home
//                          </Link>
//                        </li>
//                        <li>
//                          <NavLink
//                            to="/about-us"
//                            className={({ isActive }) =>
//                              isActive ? "active" : ""
//                            }
//                          >
//                            About Us
//                          </NavLink>
//                        </li>
//                        <li>
//                          <NavLink
//                            to="/services"
//                            className={({ isActive }) =>
//                              isActive ? "active" : ""
//                            }
//                          >
//                            Service
//                          </NavLink>
//                        </li>
//                        <li>
//                          <NavLink
//                            to="/blogs"
//                            className={({ isActive }) =>
//                              isActive ? "active" : ""
//                            }
//                          >
//                            Blogs
//                          </NavLink>
//                        </li>
//                        <li>
//                          <NavLink
//                            to="/contact-us"
//                            className={({ isActive }) =>
//                              isActive ? "active" : ""
//                            }
//                          >
//                            Contact Us
//                          </NavLink>
//                        </li>
//                      </ul>
//                    </nav>
//                  </div>
//                </div>
//                <div className="col-lg-2 col-12">
//                  <div className="get-quote d-flex gap-2">
//                    <NavLink to="/book-appointment" className="btn btn-primary">
//                      Book Appointment
//                    </NavLink>
//
//                    {/* Only show Login or Logout based on isLoggedIn state */}
//                    {!isLoggedIn ? (
//                      <NavLink to="/login" className="btn btn-secondary">
//                        Login
//                      </NavLink>
//                    ) : (
//                      <button onClick={handleLogout} className="btn btn-danger">
//                        Logout
//                      </button>
//                    )}
//                  </div>
//                </div>
//              </div>
//            </div>
//          </div>
//        </div>
//      </header>
//    </>
//  );
//}
//
//export default Header;
