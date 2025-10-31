import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import CourseCard from './CourseCard';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './CourseCardSlider.css';

const CourseCardSlider = ({ courses }) => {
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
          <SwiperSlide key={index}>
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

      {/* Custom Pagination Dots */}
      <div className="swiper-pagination-custom"></div>
    </div>
  );
};

export default CourseCardSlider;
