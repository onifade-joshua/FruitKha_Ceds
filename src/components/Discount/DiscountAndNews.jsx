import "./DiscountAndNews.css";
import BagImage from "../../assets/Bag-img.jpg";
import Lemon from "../../assets/lemon.jpg";
import HatImage from "../../assets/hat-img.jpg";

export function Discount() {
  return (
    <section className="discount">
      {/* December Sales Section */}
      <div className="containers">
        <div className="row">
          <div className="sales-banner">
            <div className="sales-text">
              <h1 className="sales-title">
                December sale is on! <br /> with big{" "}
                <span className="highlight">Discount...</span>
              </h1>
              <h2 className="sales-subtitle">
                Sale!
                <br />
                Upto <span className="highlight-large">50%</span> off
              </h2>
              <button className="shop-now-btn">Shop Now</button>
            </div>
          </div>
        </div>
      </div>

      {/* Our News Section */}
      <div className="heading">
        <h2 id="h2">
          Our
          {/* Our<div id="underline"></div> */}
          <div className="news_text">News</div>
        </h2>
      </div>
      <p id="lorem_text">
        Stay up-to-date with our latest news. From seasonal fruit arrivals to
        exciting offers and healthy lifestyle tips, we've got you covered.
        <br />
        Discover what's fresh and new at our store, where nature meets quality.
      </p>

      {/* News Card Section */}
      <div className="container text-center mt-4">
        <div className="news-container">
          <div className="news-card">
            <img src={BagImage} className="news_images" />
            <h6>Stylish and Durable Bags for Every Occasion</h6>
            <p className="user_date">
              <span className="user_profile">&#128100;</span> Admin{" "}
              <span className="calender">&#128197;</span> 27 December, 2024
            </p>
            <p className="p_news">
              Discover our latest collection of premium bags designed for style
              and functionality. Whether you're heading to the office or
              planning a weekend getaway, our bags are crafted to meet your
              needs with unmatched durability and elegance.
            </p>
            <p className="read_more_news">
              <strong>read more</strong>
            </p>
          </div>

          <div className="news-card">
            <img src={Lemon} className="news_images" />
            <h6>When Life Gives You Lemons, Choose Fresh.</h6>
            <p className="user_date">
              <span className="user_profile">&#128100;</span> Admin{" "}
              <span className="calender">&#128197;</span> 27 December, 2024
            </p>
            <p className="p_news">
              Fresh, zesty, and packed with Vitamin C — our hand-picked lemons
              are perfect for refreshing drinks, flavorful dishes, or a natural
              health boost. Enjoy nature's vibrant gift this season.
            </p>
            <p className="read_more_news">
              <strong>read more</strong>
            </p>
          </div>

          <div className="news-card">
            <img src={HatImage} className="news_images" />
            <h6>Top Off Your Look with Our Stylish Hats.</h6>
            <p className="user_date">
              <span className="user_profile">&#128100;</span> Admin{" "}
              <span className="calender">&#128197;</span> 27 December, 2024
            </p>
            <p className="p_news">
              Whether you're shielding yourself from the sun or making a fashion
              statement, our versatile hats have got you covered. Crafted for
              comfort and style, they are the perfect accessory for any season.
            </p>
            <p className="read_more_news">
              <strong>read more</strong>
            </p>
          </div>
        </div>
      </div>
      {/* More News Button */}
      <button id="more_news_button">More News</button>
    </section>
  );
}
