import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import CourseCard from './CourseCard';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './CourseCardSlider.css';

const CourseCardSlider = ({ courses }) => {
  const getPlaceholderCount = () => {
    const courseCount = courses.length;
    if (courseCount >= 3) return 0;
    return 3 - courseCount;
  };

  const placeholderCount = getPlaceholderCount();
  const placeholders = Array(placeholderCount).fill(null);

  return (
    <div className="course-slider-wrapper">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        pagination={{
          clickable: true,
          el: '.swiper-pagination-custom',
          bulletClass: 'swiper-pagination-bullet-custom',
          bulletActiveClass: 'swiper-pagination-bullet-active-custom',
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="course-swiper"
      >
        {courses.map((course, index) => (
          <SwiperSlide key={`course-${index}`}>
            <CourseCard 
              image={course.image}
              title={course.title}
              duration={course.duration}
              durationValue={course.durationValue}
              additionalInfo={course.additionalInfo}
              additionalInfoValue={course.additionalInfoValue}
              downloadLink={course.downloadLink}
            />
          </SwiperSlide>
        ))}

        {/* Placeholder Cards - Only on desktop when needed */}
        {placeholders.map((_, index) => (
          <SwiperSlide key={`placeholder-${index}`} className="placeholder-slide">
            <div className="course-card-placeholder">
              <div className="placeholder-content">
                <div className="placeholder-icon">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                    <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <p className="placeholder-text">More courses coming soon</p>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Pagination Dots */}
        <div className="swiper-pagination-custom"></div>
      </Swiper>

      {/* Custom Navigation Arrows - Only visible on desktop */}
      <div className="swiper-button-prev-custom">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <div className="swiper-button-next-custom">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
};

export default CourseCardSlider;
