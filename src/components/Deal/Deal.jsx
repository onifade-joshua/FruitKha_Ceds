import React from "react";
import image from "../../assets/img.jpg";
import "./Deal.css";
import { Button } from "react-bootstrap";

export function Deal() {
  return (
    <section className="deal-sec">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 col-sm-12 text-center pic">
            <img src={image} className="img-fluid rounded" alt="strawberry" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 text-center text-md-start col2">
            <h3 className="dotm">
              <span className="deal">Deal </span> of the Month
            </h3>
            <h3 className="hs">HIKAN STRAWBERRY</h3>
            <p className="text">
              Savor the luscious flavor of our Hikan Strawberry—carefully picked at peak
              ripeness for maximum freshness. This month’s special offer celebrates
              the best in healthy living and style, perfectly complementing our exclusive
              range of fruits, chic bags, and trendy hats. Enjoy a burst of flavor and
              a dash of flair in every deal!
            </p>
            <div className="timer d-flex justify-content-center justify-content-md-start">
              <div className="counter">
                <div className="inside">
                  <span className="count">12</span>
                  Days
                </div>
              </div>
              <div className="counter">
                <div className="inside">
                  <span className="count">20</span>
                  Hours
                </div>
              </div>
              <div className="counter">
                <div className="inside">
                  <span className="count">40</span>
                  Mins
                </div>
              </div>
              <div className="counter">
                <div className="inside">
                  <span className="count">56</span>
                  Secs
                </div>
              </div>
            </div>
            <Button className="atc">Add to Cart</Button>
          </div>
        </div>
      </div>
    </section>
  );
}