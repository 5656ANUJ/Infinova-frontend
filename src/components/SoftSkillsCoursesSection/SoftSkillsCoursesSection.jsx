import React from 'react';
import CourseCardSlider from '../CourseCard/CourseCardSlider';
import './SoftSkillsCoursesSection.css';

const SoftSkillsCoursesSection = () => {
  const softSkillsCourses = [
    {
      image: "path/to/english-communication-image.jpg",
      title: "English Communication Mastery",
      duration: "Duration",
      durationValue: "1 months",
      additionalInfo: null,
      additionalInfoValue: null,
      downloadLink: "/brochures/english-communication.pdf"
    },
    {
      image: "path/to/public-speaking-image.jpg",
      title: "Public Speaking and business communication mastery",
      duration: "Duration",
      durationValue: "2 weeks",
      additionalInfo: null,
      additionalInfoValue: null,
      downloadLink: "/brochures/public-speaking.pdf"
    },
    {
      image: "path/to/launchpad-image.jpg",
      title: "LaunchPad: Placement Bootcamp",
      duration: "Duration",
      durationValue: "7 Days",
      additionalInfo: "Resume Building, LinkedIn Branding, Interview Skills",
      additionalInfoValue: null,
      downloadLink: "/brochures/launchpad.pdf"
    }
  ];

  return (
    <section className="soft-skills-courses-section">
      <div className="section-header">
        <h2 className="section-title">
          Soft Skills Courses
        </h2>
        <p className="section-description">
          Enhance your professional communication and interpersonal skills for career success
        </p>
      </div>
      
      <CourseCardSlider courses={softSkillsCourses} />
    </section>
  );
};

export default SoftSkillsCoursesSection;
