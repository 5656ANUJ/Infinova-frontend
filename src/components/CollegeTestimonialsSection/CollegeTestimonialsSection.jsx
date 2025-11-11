import React from 'react';
import TestimonialCardSlider from '../TestimonialsNew/TestimonialCardSlider';
import './CollegeTestimonialsSection.css';

const CollegeTestimonialsSection = () => {
  const testimonials = [
    {
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      quote: "The training programs offered have significantly improved our students' employability. Our placement rates have increased by 40% since partnering with this platform.",
      name: "Dr. Arun Patel",
      role: "Principal, MIT College"
    },
    {
      image: "https://randomuser.me/api/portraits/women/50.jpg",
      quote: "The comprehensive curriculum and industry-aligned courses have helped us bridge the gap between academics and industry requirements perfectly.",
      name: "Prof. Sunita Desai",
      role: "Head of Department, IIT Delhi"
    },
    {
      image: "https://randomuser.me/api/portraits/men/60.jpg",
      quote: "Our faculty and students both benefited immensely. The quality of education and support provided is exceptional and truly world-class.",
      name: "Dr. Ramesh Kumar",
      role: "Dean, VIT University"
    }
  ];

  return (
    <section className="college-testimonials-section">
      <div className="college-testimonials-section-header">
        <h2 className="college-testimonials-section-title">
          What <span className="college-highlight-blue-text">Colleges</span> Say About Us
        </h2>
      </div>
      
      <TestimonialCardSlider testimonials={testimonials} />
    </section>
  );
};

export default CollegeTestimonialsSection;
