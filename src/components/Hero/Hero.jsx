import react from "react";	
import "./Hero.css";
 const Hero = () => {
    return (
      <section className="hero">
      <div className="hero-content">
        <p className="highlight">FRESH & ORGANIC</p>
        <h1>Delicious Seasonal Fruits</h1>
        <div className="button-container">
          <a href="#" className="button primary">Fruit Collection</a>
          <a href="#" className="button secondary">Contact Us</a>
        </div>
      </div>
    </section>
    );
};

export default Hero;