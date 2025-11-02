import React, { useEffect, useRef } from 'react'
import Navbar from '../../components/EduventuresForStudentsNavbarNew'
import EduventuresForStudentsHeroSection from '../../components/EduventuresForStudentsHeroSectionNew'
import BookingFormForStudentsEduventures from '../../components/BookingFormForStudentsEduventures'
import EduventuresTrainers from '../../components/EduventuresForStudentsTrainers'
import EduventuresStudentsTestimonials from '../../components/EduventuresStudentsTestimonials'
import EduventuresForStudentsSoftSkills from '../../components/EduventuresForStudentsSoftSkills'
import SoftSkillsCoursesSection from '../components/SoftSkillsCoursesSection/SoftSkillsCoursesSection'
import EduventuresForStudentsMAsterClassCard from '../../components/EduventuresForStudentsMasterClassCard'
import EduventuresCourses from './EduventuresCourses'
import JobOrientedCoursesSection from '../components/JobOrientedCoursesSection/JobOrientedCoursesSection'
import { useLocation } from 'react-router-dom';

const EduventuresForStudents = () => {
  const location = useLocation();
  const bookingFormRef = useRef(null); // Create ref for booking form

  // Function to scroll to booking form
  const scrollToBookingForm = () => {
    bookingFormRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div>
      <Navbar/>
      <EduventuresForStudentsHeroSection scrollToBookingForm={scrollToBookingForm} />
      <BookingFormForStudentsEduventures ref={bookingFormRef} />
      <EduventuresForStudentsMAsterClassCard/>
      {/* <EduventuresCourses/> */}
      <JobOrientedCoursesSection/>
      <SoftSkillsCoursesSection/>
      <EduventuresForStudentsSoftSkills/>
      <EduventuresTrainers/>
      <EduventuresStudentsTestimonials/>
    </div>
  )
}

export default EduventuresForStudents
