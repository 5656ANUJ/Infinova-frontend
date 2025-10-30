import React from 'react';
import '../global.css';

const EduventuresForStudentsHeroSection = ({ scrollToBookingForm }) => {
  return (
    <div
      className="w-full"
      style={{
        background: '#E4EFFF',
      }}
    >
      <div className="flex flex-col md:flex-row w-full h-auto md:h-[69vh]">
        <div className="block md:hidden h-8"></div>
        
        <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-12">
          <div className="text-center md:text-left space-y-3 md:space-y-4 lg:space-y-6">
            <h1 className="font-extrabold leading-snug text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900">
              Your Dream Career is
            </h1>
            <h1 className="font-extrabold leading-snug text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900">
              One Skill Away, Join
            </h1>
            <h1 className="font-extrabold leading-snug text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900">
              <span className="text-blue-600">Infinova Eduventures</span>
            </h1>
            <h1 className="font-extrabold leading-snug text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 text-gray-900">
              Now!!!
            </h1>
            <div className="h-5"></div>
            <button 
              className="contact-btn lg:mt-3"
              onClick={scrollToBookingForm}
            >
              Contact Us
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex items-center justify-center p-4">
          <img 
            src="/student-heri-img.png"
            alt="Student to Professional Transformation"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default EduventuresForStudentsHeroSection;
