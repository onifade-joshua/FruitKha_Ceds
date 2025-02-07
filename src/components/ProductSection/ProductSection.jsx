import React from "react";
import "./ProductSection.css";
import BagImg from "../../assets/bag-img.jpg";
import HatImg from "../../assets/hat-img.jpg";
import lemonImg from "../../assets/lemon.jpg";

const ProductSection = () => {
  const products = [
    { id: 1, name: "Bag", price: "20,000", image: BagImg },
    { id: 2, name: "Hat", price: "5000", image: HatImg },
    { id: 3, name: "Lemon", price: "500", image: lemonImg },
  ];

  return (
    <section className="product-section">
        <h2 id="our-text">Our
          <span className="our-product">Products</span>
        </h2>
      <p>
      Fruitkha is a vibrant retail destination offering a delightful variety of fresh, high-quality fruits, stylish bags, and trendy hats.
      </p>
      <div className="product-container">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img
              src={product.image} 
              alt={product.name}
              className="product-image"
            />
            <h3>{product.name}</h3>
            <p>Per Kg</p>
            <h4>&#8358;{product.price}</h4>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
