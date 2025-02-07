import React, { useState, useEffect } from "react";
import "./Footer.css";


const Footer = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.pageYOffset > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About us</h3>
          <p>
            Located at Km. 10 Idiroko Road, Canaan Land, Ota, Ogun State,
            Nigeria, Covenant University is committed to transforming the
            landscape of education in Africa. We strive to develop future
            leaders through research-driven learning and innovative academic
            programs.
          </p>
        </div>

        <div className="footer-section">
          <h3>Get in Touch</h3>
          <p>Km. 10 Idiroko Road, Canaan Land, Ota, Ogun State, Nigeria</p>
          <p>info@covenantuniversity.edu.ng</p>
          <p>+234 201 227 3500, +234 701 060 0659</p>
        </div>

        <div className="footer-section">
          <h3>Pages</h3>
          <ul className="footer-links">
            <li>
              <a href="/home">› Home</a>
            </li>
            <li>
              <a href="/about">› About</a>
            </li>
            <li>
              <a href="/shop">› Shop</a>
            </li>
            <li>
              <a href="/news">› News</a>
            </li>
            <li>
              <a href="/contact">› Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Subscribe</h3>
          <p>Subscribe to our mailing list to get the latest updates.</p>
          <div className="subscribe-input">
            <input type="email" placeholder="Email" />
            <button className="send-button">
              <i class="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} CEDS - Covenant University. All rights
          reserved.
        </p>
      </div>

      {showScrollToTop && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          &#x1F845;
        </button>
      )}
    </footer>
  );
};

export default Footer;
