import React from 'react';
import CourseCardSlider from '../CourseCard/CourseCardSlider';
import './JobOrientedCoursesSection.css';

const JobOrientedCoursesSection = () => {
  const jobOrientedCourses = [
    {
      image: "path/to/clinical-research-image.jpg",
      title: "Advanced Diploma in Clinical Research",
      duration: "Duration",
      durationValue: "3 months",
      additionalInfo: "Expected Package",
      additionalInfoValue: "Upto 5 LPA",
      downloadLink: "/brochures/clinical-research.pdf"
    },
    {
      image: "path/to/cyber-security-image.jpg",
      title: "Advanced Cyber Security",
      duration: "Duration",
      durationValue: "3 months",
      additionalInfo: "Expected Package",
      additionalInfoValue: "Upto 10 LPA",
      downloadLink: "/brochures/cyber-security.pdf"
    },
    
  ];

  return (
    <section className="job-oriented-courses-section">
      <div className="section-header">
        <h2 className="section-title">
          Job Oriented Courses with Placement Assistance
        </h2>
        <p className="section-description">
          Launch your career with our industry-focused courses designed to get you job-ready
        </p>
      </div>
      
      <CourseCardSlider courses={jobOrientedCourses} />
    </section>
  );
};

export default JobOrientedCoursesSection;
