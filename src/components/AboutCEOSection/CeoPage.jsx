import React from "react";
import "./CeoPage.css";

const CeoPage = () => {
  return (
    <div className="ceo-container2">
      <div className="ceo-inner2">
        {/* CEO Image */}
        <div className="ceo-image2">
          <img
            src="/ceo.png"
            alt="CEO"
            className="ceo-img2"
          />
        </div>

        {/* CEO Content */}
        <div className="ceo-content2">
          <div className="ceo-heading2">
            <h1>About</h1>
            <h1 className="highlight2">CEO</h1>
          </div>
          <p className="ceo-text2">
            The CEO is a visionary leader with 7+ years of experience in
            corporate training, student development, and career readiness. A
            mechanical engineer by background, they’ve impacted 20,000+
            individuals across 50+ institutions and collaborated with global
            brands like Microsoft, Bajaj, TVS, Barclays, and Accenture. With a
            military background, the CEO exemplifies discipline, resilience, and
            leadership—qualities reflected in every program and partnership.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CeoPage;
