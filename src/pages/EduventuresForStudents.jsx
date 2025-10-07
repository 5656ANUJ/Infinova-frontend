import React, { useEffect } from 'react'
// import EduventuresForStudentsNavbar from '../../components/EduventuresForStudentsNavbar'
import Navbar from '../../components/EduventuresForStudentsNavbarNew'
// import EduventuresForStudentsHeroSection from '../../components/EduventuresForStudentsHeroSection'
import EduventuresForStudentsHeroSection from '../../components/EduventuresForStudentsHeroSectionNew'
import BookingFormForStudentsEduventures from '../../components/BookingFormForStudentsEduventures'
import EduventuresTrainers from '../../components/EduventuresForStudentsTrainers'
import EduventuresStudentsTestimonials from '../../components/EduventuresStudentsTestimonials'
import EduventuresForStudentsSoftSkills from '../../components/EduventuresForStudentsSoftSkills'
import EduventuresForStudentsMAsterClassCard from '../../components/EduventuresForStudentsMasterClassCard'

import EduventuresCourses from './EduventuresCourses'

import { useLocation } from 'react-router-dom';


const EduventuresForStudents = () => {
  const location = useLocation(); // 👈 required to track route changes

  useEffect(() => {
    window.scrollTo(0, 0); // 👈 scroll to top on route change
  }, [location.pathname]);
  return (
    <div>
      <Navbar/>
      <EduventuresForStudentsHeroSection/>
      <BookingFormForStudentsEduventures/>
      <EduventuresForStudentsMAsterClassCard/>
      <EduventuresCourses/>
      <EduventuresForStudentsSoftSkills/>
      <EduventuresTrainers/>
      <EduventuresStudentsTestimonials/>
      
    </div>
  )
}

export default EduventuresForStudents
