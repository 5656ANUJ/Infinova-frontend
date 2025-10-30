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
        <div className="ceo-content w-full md:w-1/2 flex flex-col items-center text-center ">
          <div className="ceo-heading flex gap-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              About
            </h1>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1289e4]">
              CEO
            </h1>
          </div>
          <p className="ceo-text text-[#053C66] text-base sm:text-lg md:text-xl font-medium leading-relaxed">
            The CEO is a visionary leader with 7+ years of experience in
            corporate training, student development, and career readiness. A
            mechanical engineer by background, they’ve impacted 20,000+
            individuals across 50+ institutions and collaborated with global
            brands like Microsoft, Bajaj, TVS, Barclays, and Accenture. With a
            military background, the CEO
            exemplifies discipline, resilience, and leadership—qualities
            reflected in every program and partnership.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CeoPage;
