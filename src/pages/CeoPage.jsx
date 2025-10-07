import React from "react";

const CeoPage = () => {
  return (
    <div className="ceo-container flex justify-center items-center">
      <div className="ceo-inner flex flex-col md:flex-row items-center">
        {/* CEO Image */}
        <div className="ceo-image w-full md:w-1/2 flex justify-center  h-[70vh] items-center ">
          <img
            src="/ceo.png"
            alt="CEO"
            className="w-[90%]  sm:w-60 sm:h-60 md:w-80 md:h-100 object-contain rounded-2xl "
          />
        </div>

        {/* CEO Content */}
        <div className="ceo-content w-full md:w-1/2 flex flex-col items-center text-center">
          <div className="ceo-heading flex gap-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              About
            </h1>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1289e4]">
              CEO
            </h1>
          </div>
          <p className="ceo-text text-[#053C66] text-base sm:text-lg md:text-xl font-medium leading-relaxed">
           The CEO is a visionary leader with over 7 years of experience in corporate training, student development, and career readiness. With a background in mechanical engineering and a strong record in skill development, the CEO has impacted 20,000+ individuals across 50+ colleges and institutes. Over the years, they have collaborated as a freelance trainer with globally respected organizations such as Microsoft, Bajaj, TVS, TeamLease, Barclays, Skoda, Endurance, Greenpack, Atos, and Accenture—demonstrating adaptability across industries and the ability to deliver measurable results. Coming from a military background and having appeared multiple times for AFSB and SSB, the CEO embodies discipline, resilience, and leadership under pressure—qualities that define every training program and professional engagement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CeoPage;
