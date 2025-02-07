import "./Features.css";
import Hero from "../../components/Hero/Hero";

export const Features = () => (
  <div className="features">
    <Hero />
    <div className="info-box">
      <div className="feature-row">
        <div className="feature-card">
          <div className="circle-border">
            <i className="fas fa-shipping-fast icon"></i>
          </div>
          <h5>Free Shipping</h5>
          <p>When order over &#8358;10,000</p>
        </div>

        <div className="feature-card">
          <div className="circle-border">
            <i className="fas fa-headset icon"></i>
          </div>
          <h5>24/7 Support</h5>
          <p>Get support all day.</p>
        </div>

        <div className="feature-card">
          <div className="circle-border">
            <i className="fas fa-undo-alt icon"></i>
          </div>
          <h5>Refund</h5>
          <p>Get refund within 3 days.</p>
        </div>
      </div>
    </div>
  </div>
);
