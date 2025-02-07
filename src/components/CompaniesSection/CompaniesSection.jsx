import React, { useEffect, useRef } from "react";
import "./CompaniesSection.css";
import Logo from "../../assets/covenant-logo.jpg";
import Logo1 from "../../assets/konga.jpg";
import Logo2 from "../../assets/jumia.jpg";
import Logo3 from "../../assets/samjodatechsolutions-logo.jpg";
import Logo4 from "../../assets/marketSquare.jpg";
import Logo5 from "../../assets/jumiaFood.jpg";

const companies = [
  { name: "Covenant", logo: Logo },
  { name: "Konga", logo: Logo1 },
  { name: "Jumia", logo: Logo2 },
  { name: "Samjodatech Solutions", logo: Logo3 },
  { name: "MarketSquare", logo: Logo4 },
  { name: "Jumia Food", logo: Logo5 },
];

const CompaniesSection = () => {
  const logosContainerRef = useRef(null);

  useEffect(() => {
    const scrollWrapper = logosContainerRef.current;
    let startX = 0;

    const animateScroll = () => {
      startX -= 1;
      if (Math.abs(startX) >= scrollWrapper.scrollWidth / 2) {
        startX = 0;
      }
      scrollWrapper.style.transform = `translateX(${startX}px)`;
      requestAnimationFrame(animateScroll);
    };

    requestAnimationFrame(animateScroll);
  }, []);

  return (
    <section className="companies-section">
      <h2 style={{color: "orange"}}>Trusted by Leading <span style={{color: "black"}}>Companies</span></h2>
      <div className="scroll-wrapper">
        <div className="companies-logos" ref={logosContainerRef}>
          {/* Duplicate the logos for a seamless loop */}
          {[...companies, ...companies].map((company, index) => (
            <div key={index} className="company-logo">
              <img src={company.logo} alt={company.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;
