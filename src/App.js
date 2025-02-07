import react from "react";
import Navbar from "../src/components/Navbar/Navbar";
import { Deal } from "./components/Deal/Deal";
import "./App.css";
import { Features } from "./components/Features/Features";
import { Discount } from "./components/Discount/DiscountAndNews";
import ProductSection from "./components/ProductSection/ProductSection";
import Footer from "./components/Footer/Footer";
import Testimonial from "./components/Testimonial/Testimonial";
import CompaniesSection from "./components/CompaniesSection/CompaniesSection";

const App = () => {
    return (
      <div wrapper>
        <Navbar/>
        <Features/>
        <ProductSection/> 
        <Deal/>
        <Testimonial/>
        <Discount/>
        <CompaniesSection/>
        <Footer/>
      </div>
    );
  };
  export default App;