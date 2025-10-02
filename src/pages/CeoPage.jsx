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
            The CEO is a visionary leader with over 7 years of professional
            experience in corporate training, student development, and career
            readiness. With a mechanical engineering foundation and a proven
            track record in skill development, the CEO has impacted more than
            20,000 individuals across 50+ colleges and institutes. Over the
            years, the CEO has collaborated as a freelance trainer with some of
            the world’s most respected organizations, including Microsoft,
            Bajaj, TVS, TeamLease, Barclays, Skoda, Endurance, Greenpack, Atos,
            Accenture, and many others. These engagements reflect a deep ability
            to adapt across industries and deliver programs that create
            measurable impact. Coming from a military background and having
            appeared multiple times for AFSB (Air Force Selection Board) and SSB
            (Services Selection Board), the CEO embodies the values of
            discipline, resilience, and leadership under pressure. These
            qualities shape every training program and professional engagement,
            ensuring both structure and inspiration in the learning journey
          </p>
        </div>
      </div>
    </div>
  );
};

export default CeoPage;
