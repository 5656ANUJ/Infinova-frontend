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
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Minimum swipe distance (in px) to trigger slide change
  const minSwipeDistance = 50;

  const prevSlide = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
  };

  const handleTouchStart = (e) => {
    setTouchEnd(0); // Reset touchEnd
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide(); // Swipe left = next slide
    }
    if (isRightSwipe) {
      prevSlide(); // Swipe right = previous slide
    }
  };

  return (
    <div className="eduventures-testimonials-container">
      
      {/* Logos Section */}
      <div className="marquee-container">
        <div className="marquee">
          <img src="/logosColleges/Deogiri.jpg" alt="google" className="logo" />
          <img src="/logosColleges/Dr_BAMU.png" alt="eBay" className="logo" />
          <img src="/logosColleges/GPN.jpg" alt="Paytm" className="logo" />
          <img src="/logosColleges/Gulabrao_College.jpg" alt="Amazon" className="logo" />
          <img src="/logosColleges/HRPIPER.webp" alt="Unilever" className="logo" />
          <img src="/logosColleges/MGM.png" alt="Google" className="logo" />
          <img src="/logosColleges/MIT.png" alt="eBay" className="logo" />
          <img src="/logosColleges/PRAVARA.png" alt="PRAVARA" className="logo" />
          <img src="/logosColleges/RIT.jpg" alt="Amazon" className="logo" />
          <img src="/logosColleges/St_John_College.png" alt="Unilever" className="logo" />
          <img src="/logosColleges/WIT.webp" alt="Google" className="logo" />
          <img src="/logosColleges/YB_Chavan.png" alt="eBay" className="logo" />

          <img src="/logosColleges/Deogiri.jpg" alt="google" className="logo" />
          <img src="/logosColleges/Dr_BAMU.png" alt="eBay" className="logo" />
          <img src="/logosColleges/GPN.jpg" alt="Paytm" className="logo" />
          <img src="/logosColleges/Gulabrao_College.jpg" alt="Amazon" className="logo" />
          <img src="/logosColleges/HRPIPER.webp" alt="Unilever" className="logo" />
          <img src="/logosColleges/MGM.png" alt="Google" className="logo" />
          <img src="/logosColleges/MIT.png" alt="eBay" className="logo" />
          <img src="/logosColleges/PRAVARA.png" alt="PRAVARA" className="logo" />
          <img src="/logosColleges/RIT.jpg" alt="Amazon" className="logo" />
          <img src="/logosColleges/St_John_College.png" alt="Unilever" className="logo" />
          <img src="/logosColleges/WIT.webp" alt="Google" className="logo" />
          <img src="/logosColleges/YB_Chavan.png" alt="eBay" className="logo" />
        </div>
      </div>

      {/* Title */}
      <h1 className="eduventures-testimonials-title text-6xl">
        Your <span className="testinomial-highlights">Goal</span> Our <span className="testinomial-highlights">Mission</span>
      </h1>

      {/* Testimonial Card with Swipe */}
      <div 
        className="testimonial-card"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
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
