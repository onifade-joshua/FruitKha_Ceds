import React, { useState, useEffect } from "react";
import "./Testimonial.css";
import ImageTestimonial1 from "../../assets/eze-img.jpg";
import ImageTestimonial2 from "../../assets/Nweze-img.jpg";
import ImageTestimonial3 from "../../assets/praise-img.jpg";
import ImageTestimonial4 from "../../assets/segun-img.jpg";
import ImageTestimonial5 from "../../assets/ben-img.jpg";
import ImageTestimonial6 from "../../assets/demi-img.jpg";
import ImageTestimonial7 from "../../assets/emma-img.jpg";
import ImageTestimonial8 from "../../assets/onoriode-img.jpg";
import ImageTestimonial9 from "../../assets/raymond-img.jpg";
import ImageTestimonial10 from "../../assets/badjo-img.jpg";
import ImageTestimonial11 from "../../assets/ebenezer-img.jpg";
import ImageTestimonial12 from "../../assets/victor-img.jpg";
import ImageTestimonial13 from "../../assets/babafemi-img.jpg";

const testimonials = [
  {
    name: "Ezekiel",
    title: "Student",
    quote: "Being a student on this project allowed me to gain hands-on experience, collaborate with talented peers, and see how theory meets practice in real-world scenarios.",
    image: ImageTestimonial1,
  },
  {
    name: "Nweze",
    title: "Student",
    quote: "Working on this project has been a transformative learning experience. I gained practical coding skills and discovered the value of teamwork!",
    image: ImageTestimonial2,
  },
  {
    name: "Praise",
    title: "Student",
    quote: "This project challenged me to think outside the box and deepened my understanding of React and modern web development.",
    image: ImageTestimonial3,
  },
  {
    name: "Segun",
    title: "Student",
    quote: "Collaborating on this project boosted my confidence in coding and taught me the importance of perseverance and continuous learning.",
    image: ImageTestimonial4,
  },
  {
    name: "Benjamin",
    title: "Student",
    quote: "Being involved in this project allowed me to merge theory with practice, sharpening my problem-solving skills and fueling my passion for programming.",
    image: ImageTestimonial5,
  },
  {
    name: "Demi",
    title: "Student",
    quote: "This experience has been an eye-opener! I’ve learned how to work in a team, troubleshoot issues, and write cleaner, more efficient code.",
    image: ImageTestimonial6,
  },
  {
    name: "Emma",
    title: "Student",
    quote: "The opportunity to contribute to this project helped me bridge the gap between theory and application. I now feel more confident in my development skills.",
    image: ImageTestimonial7,
  },
  {
    name: "Onoriode",
    title: "Student",
    quote: "Beyond coding, this project taught me communication, collaboration, and the ability to adapt quickly to new challenges.",
    image: ImageTestimonial8,
  },
  {
    name: "Raymond",
    title: "Student",
    quote: "Every challenge I faced in this project made me a better developer. I now understand the importance of debugging and testing thoroughly!",
    image: ImageTestimonial9,
  },
  {
    name: "Badejo",
    title: "Student",
    quote: "One of the biggest takeaways from this project is the power of collaboration. Great things happen when we work together!",
    image: ImageTestimonial10,
  },
  {
    name: "Ebenezer",
    title: "Student",
    quote: "Working on this project has been both exciting and demanding. It reinforced my love for software development and problem-solving.",
    image: ImageTestimonial11,
  },
  {
    name: "Victor",
    title: "Student",
    quote: "I appreciate the hands-on approach of this project. I’ve learned so much about UI/UX, best coding practices, and teamwork.",
    image: ImageTestimonial12,
  },
  {
    name: "Babafemi",
    title: "Student",
    quote: "This project not only improved my coding skills but also prepared me for real-world software development challenges.",
    image: ImageTestimonial13,
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const { name, title, quote, image } = testimonials[currentIndex];

  return (
    <section className="testimonial-section">
      <div className="testimonial-content">
        <img src={image} alt={name} className="testimonial-image" />
        <h3>{name}</h3>
        <p className="testimonial-title">{title}</p>
        <blockquote>{quote}</blockquote>
      </div>
    </section>
  );
};

export default TestimonialSlider;
