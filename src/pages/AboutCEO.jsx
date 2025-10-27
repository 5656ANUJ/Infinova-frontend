import React, { useState, useEffect } from "react";

const CeoPage = () => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Determine device type
  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;

  // Outer container with blue background
  const outerContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: isMobile ? "2rem 1rem" : isTablet ? "3rem 2rem" : "4rem 2rem",
    backgroundColor: "#EAECFB",
    minHeight: "100vh",
  };

  // Inner white card container
  const cardContainerStyle = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    alignItems: "center",
    maxWidth: "1100px",
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: "30px",
    padding: isMobile ? "2.5rem 1.5rem" : isTablet ? "3rem 2.5rem" : "3.5rem 3rem",
    boxShadow: "0 10px 40px rgba(0, 0, 0, 0.08)",
    gap: isMobile ? "2rem" : isTablet ? "2.5rem" : "3rem",
  };

  // Image container styles
  const imageContainerStyle = {
    width: isMobile ? "100%" : isTablet ? "38%" : "35%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
  };

  // Image styles
  const imageStyle = {
    width: "100%",
    maxWidth: isMobile ? "280px" : isTablet ? "300px" : "350px",
    height: "auto",
    objectFit: "contain",
    borderRadius: "20px",
  };

  // Content container styles
  const contentContainerStyle = {
    width: isMobile ? "100%" : isTablet ? "62%" : "65%",
    display: "flex",
    flexDirection: "column",
    alignItems: isMobile ? "center" : "flex-start",
    textAlign: isMobile ? "center" : "left",
  };

  // Heading container styles
  const headingContainerStyle = {
    display: "flex",
    gap: "0.5rem",
    marginBottom: isMobile ? "1.5rem" : "2rem",
    flexWrap: "wrap",
    justifyContent: isMobile ? "center" : "flex-start",
  };

  // Heading text styles
  const headingStyle = {
    fontSize: isMobile ? "2.2rem" : isTablet ? "2.8rem" : "3.2rem",
    fontWeight: "700",
    color: "#1a1a1a",
    margin: "0",
    lineHeight: "1.2",
  };

  // Highlighted text styles
  const highlightStyle = {
    fontSize: isMobile ? "2.2rem" : isTablet ? "2.8rem" : "3.2rem",
    fontWeight: "700",
    color: "#1289e4",
    margin: "0",
    lineHeight: "1.2",
  };

  // Paragraph styles
  const paragraphStyle = {
    color: "#053C66",
    fontSize: isMobile ? "0.95rem" : isTablet ? "1.05rem" : "1.1rem",
    fontWeight: "500",
    lineHeight: "1.8",
    maxWidth: "100%",
    margin: "0",
  };

  return (
    <div style={outerContainerStyle}>
      <div style={cardContainerStyle}>
        {/* CEO Image */}
        <div style={imageContainerStyle}>
          <img
            src="/ceo.png"
            alt="CEO - Soft Skills Trainer"
            style={imageStyle}
          />
        </div>

        {/* CEO Content */}
        <div style={contentContainerStyle}>
          <div style={headingContainerStyle}>
            <h1 style={headingStyle}>About</h1>
            <h1 style={highlightStyle}>CEO</h1>
          </div>
          <p style={paragraphStyle}>
            As a dedicated Soft Skills Trainer, I have trained over 15,000
            students in the past 5 years, working with various companies and
            colleges. My expertise lies in enhancing communication, leadership,
            and interpersonal skills through tailored workshops and seminars. I
            have successfully managed numerous educational events, ensuring
            their smooth execution and impactful outcomes. My mission is to
            empower individuals to achieve their full potential in both personal
            and professional realms by providing them with the essential skills
            needed to thrive in today's competitive environment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CeoPage;
