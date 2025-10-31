import React from 'react';
import CourseCardSlider from '../CourseCard/CourseCardSlider';
import './UpskillingWorkshopsSection.css';

const UpskillingWorkshopsSection = () => {
  const workshopCourses = [
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
      title: "Advanced Cyber security",
      duration: "Duration",
      durationValue: "3 months",
      additionalInfo: "Expected Package",
      additionalInfoValue: "Upto 10 LPA",
      downloadLink: "/brochures/cyber-security.pdf"
    },
  ];

  return (
    <section className="students-upskilling-section">
      <div className="section-header">
        <h2 className="section-title">
          Students' Upskilling Workshops
        </h2>
        <p className="section-description">
          Enhance your skills with our specialized workshops designed for student success
        </p>
      </div>
      
      <CourseCardSlider courses={workshopCourses} />
    </section>
  );
};

export default UpskillingWorkshopsSection;
