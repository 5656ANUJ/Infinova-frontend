import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Ayushi Tyagi",
    role: "TPO of SIT",
    image: "/testimonialsDummy.png",
    text: `I have a full-time job and 3 kids. I needed the flexibility offered by Coursera Plus in order to achieve my goals. My Coursera Plus subscription motivated me to keep learning.`,
  },
  {
    name: "John Doe",
    role: "Software Engineer",
    image: "/testimonialsDummy.png",
    text: `Coursera Plus allowed me to expand my skills and switch careers. The structured learning path kept me motivated and consistent.`,
  },
  {
    name: "Sarah Lee",
    role: "Entrepreneur",
    image: "/testimonialsDummy.png",
    text: `With Coursera Plus, I was able to upskill my entire team. The flexibility and quality of content were unmatched.`,
  },
];

export default function EduventuresTestimonials() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="eduventures-testimonials-container">
      
      {/* Logos Section */}
      <div className="marquee-container">
        <div className="marquee">
          <img src="/src/logosColleges/Deogiri.jpg" alt="google" className="logo" />
          <img src="/src/LogosColleges/Dr_BAMU.png" alt="eBay" className="logo" />
          <img src="/src/LogosColleges/GPN.jpg" alt="Paytm" className="logo" />
          <img src="/src/LogosColleges/Gulabrao_College.jpg" alt="Amazon" className="logo" />
          <img src="/src/LogosColleges/HRPIPER.webp" alt="Unilever" className="logo" />
          <img src="/src/LogosColleges/MGM.png" alt="Google" className="logo" />
          <img src="/src/LogosColleges/MIT.png" alt="eBay" className="logo" />
          <img src="/src/LogosColleges/PRAVaRA.png" alt="Paytm" className="logo" />
          <img src="/src/LogosColleges/RIT.jpg" alt="Amazon" className="logo" />
          <img src="/src/LogosColleges/St_John_College.png" alt="Unilever" className="logo" />
          <img src="/src/LogosColleges/WIT.webp" alt="Google" className="logo" />
          <img src="/src/LogosColleges/YB_Chavan.png" alt="eBay" className="logo" />

          <img src="/src/logosColleges/Deogiri.jpg" alt="google" className="logo" />
          <img src="/src/LogosColleges/Dr_BAMU.png" alt="eBay" className="logo" />
          <img src="/src/LogosColleges/GPN.jpg" alt="Paytm" className="logo" />
          <img src="/src/LogosColleges/Gulabrao_College.jpg" alt="Amazon" className="logo" />
          <img src="/src/LogosColleges/HRPIPER.webp" alt="Unilever" className="logo" />
          <img src="/src/LogosColleges/MGM.png" alt="Google" className="logo" />
          <img src="/src/LogosColleges/MIT.png" alt="eBay" className="logo" />
          <img src="/src/LogosColleges/PRAVaRA.png" alt="Paytm" className="logo" />
          <img src="/src/LogosColleges/RIT.jpg" alt="Amazon" className="logo" />
          <img src="/src/LogosColleges/St_John_College.png" alt="Unilever" className="logo" />
          <img src="/src/LogosColleges/WIT.webp" alt="Google" className="logo" />
          <img src="/src/LogosColleges/YB_Chavan.png" alt="eBay" className="logo" />
        </div>
      </div>

      {/* Title */}
      <h1 className="eduventures-testimonials-title text-6xl">
        Your <span className="testinomial-highlights">Goal</span> Our <span className="testinomial-highlights">Mission</span>
      </h1>

      {/* Testimonial Card */}
      <div className="testimonial-card">
        <button onClick={prevSlide} className="arrow-btn left">
          <FaArrowLeft />
        </button>

        <div className="testimonial-content">
          <img src={testimonials[current].image} alt={testimonials[current].name} className="testimonial-img" />
          <div className="testimonial-text">
            <p className="quote">"{testimonials[current].text}"</p>
            <h3 className="name">{testimonials[current].name}</h3>
            <p className="role">{testimonials[current].role}</p>
          </div>
        </div>

        <button onClick={nextSlide} className="arrow-btn right">
          <FaArrowRight />
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="dots">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}
