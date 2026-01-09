import React from 'react';
import TestimonialCardSlider from '../TestimonialsNew/TestimonialCardSlider';
import './StudentTestimonialsSection.css';

const StudentTestimonialsSection = () => {
  const testimonials = [
    {
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      quote: "I have a full-time job and 3 kids. I needed the flexibility offered by Coursera Plus in order to achieve my goals. My Coursera Plus subscription motivated me to keep learning.",
      name: "Ayushi Tyagi",
      role: "TPO of SIT"
    },
    {
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      quote: "The courses are comprehensive and the instructors are top-notch. I was able to transition from a different field into tech within 6 months of consistent learning.",
      name: "Rajesh Kumar",
      role: "Software Engineer at Google"
    },
    {
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      quote: "I could immediately apply what I learned to my job. Highly recommended!",
      name: "Priya Sharma",
      role: "Data Analyst"
    }
  ];

  return (
    <section className="student-testimonials-section">
      <div className="testimonials-section-header">
        <h2 className="testimonials-section-title">
          Your <span className="highlight-blue-text">Goal</span> Our <span className="highlight-blue-text">Mission</span>
        </h2>
      </div>
      
      <TestimonialCardSlider testimonials={testimonials} />
    </section>
  );
};

export default StudentTestimonialsSection;
