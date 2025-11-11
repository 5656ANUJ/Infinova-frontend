import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import TestimonialCard from './TestimonialCard';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './TestimonialCardSlider.css';

const TestimonialCardSlider = ({ testimonials }) => {
  return (
    <div className="testimonial-slider-wrapper">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          nextEl: '.testimonial-swiper-button-next-custom',
          prevEl: '.testimonial-swiper-button-prev-custom',
        }}
        pagination={{
          clickable: true,
          el: '.testimonial-swiper-pagination-custom',
          bulletClass: 'testimonial-swiper-pagination-bullet-custom',
          bulletActiveClass: 'testimonial-swiper-pagination-bullet-active-custom',
        }}
        breakpoints={{
          768: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
        }}
        className="testimonial-swiper"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={`testimonial-${index}`}>
            <TestimonialCard 
              image={testimonial.image}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
            />
          </SwiperSlide>
        ))}

        {/* Custom Pagination Dots */}
        <div className="testimonial-swiper-pagination-custom"></div>
      </Swiper>

      {/* Custom Navigation Arrows */}
      <div className="testimonial-swiper-button-prev-custom">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <div className="testimonial-swiper-button-next-custom">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
};

export default TestimonialCardSlider;
