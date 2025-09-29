import React from 'react'
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


const EduventuresForStudents = () => {
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
