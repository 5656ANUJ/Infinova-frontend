import React from 'react';
import '../../global.css';

const EduventuresUnversitiessHero = ({ scrollToContactForm }) => {
  return (
    <div
      className="w-full"
      style={{
        background: '#E4EFFF',
      }}
    >
      <div className="flex flex-col md:flex-row w-full h-auto md:h-[65vh]">
        <div className="block md:hidden h-8"></div>
        
        <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-12">
          <div className="text-center md:text-left space-y-2 md:space-y-3 lg:space-y-4">
            <h1 className="font-extrabold leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-900">
              The perfect <span className="text-blue-600">Training</span>
            </h1>
            <h1 className="font-extrabold leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-900">
              & <span className="text-blue-600">Placement</span>
            </h1>
            <h1 className="font-extrabold leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-900">
              Solutions for Your
            </h1>
            <h1 className="font-extrabold leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 md:mb-6 text-gray-900">
              Campus
            </h1>
            <div className="h-4 md:h-5"></div>
            <button 
              className="contact-btn lg:mt-3"
              onClick={scrollToContactForm}
            >
              Contact Us
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-8">
          <img 
            src="../ourPartners.png"
            alt="University Partners"
            className="w-full h-auto max-h-[500px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default EduventuresUnversitiessHero;
