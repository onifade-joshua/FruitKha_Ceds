import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "./Navbar.css"; // Ensure your custom CSS is imported

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" className="navbar" fixed="top">
      <Container fluid className="d-flex justify-content-between align-items-center">
        {/* Logo/Brand */}
        <Navbar.Brand href="#">
          <img
            className="logo"
            src="https://themewagon.github.io/fruitkha/assets/img/logo.png"
            alt="Fruitkha Logo"
          />
        </Navbar.Brand>

        {/* Hamburger toggle */}
        <Navbar.Toggle aria-controls="navbarNavDropdown">
          <i className="fas fa-bars text-white"></i>
        </Navbar.Toggle>

        {/* Collapsible nav links */}
        <Navbar.Collapse id="navbarNavDropdown" className="justify-content-center">
          <Nav className="navbar-nav">
            {/* Home Dropdown without chevron arrow */}
            <NavDropdown title="Home" id="home-dropdown">
              <NavDropdown.Item href="#">Testimonials</NavDropdown.Item>
              <NavDropdown.Item href="#">Sponsors</NavDropdown.Item>
            </NavDropdown>

            {/* About */}
            <Nav.Link href="#">About</Nav.Link>

            {/* Pages Dropdown without chevron arrow */}
            <NavDropdown title="Pages" id="pages-dropdown">
              <NavDropdown.Item href="#">Buy fruits</NavDropdown.Item>
              <NavDropdown.Item href="#">Customer service</NavDropdown.Item>
              <NavDropdown.Item href="#">News</NavDropdown.Item>
              <NavDropdown.Item href="#">Newsletter</NavDropdown.Item>
            </NavDropdown>

            {/* News Dropdown without chevron arrow */}
            <NavDropdown title="News" id="news-dropdown">
              <NavDropdown.Item href="#">News</NavDropdown.Item>
              <NavDropdown.Item href="#">Single news</NavDropdown.Item>
            </NavDropdown>

            {/* Contact */}
            <Nav.Link href="#">Contact</Nav.Link>

            {/* Shop Dropdown without chevron arrow */}
            <NavDropdown title="Shop" id="shop-dropdown">
              <NavDropdown.Item href="#">Shop</NavDropdown.Item>
              <NavDropdown.Item href="#">Checkout</NavDropdown.Item>
              <NavDropdown.Item href="#">Single product</NavDropdown.Item>
              <NavDropdown.Item href="#">Cart</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>

        {/* Right-aligned icons */}
        <div className="d-flex align-items-center">
          <i className="fas fa-shopping-cart text-white me-3"></i>
          <i className="fas fa-search text-white"></i>
        </div>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
