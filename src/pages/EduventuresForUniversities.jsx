import React, { useRef } from 'react'
import EduventuresForUniversitiesNavbar from '../../components/EduventuresForUniversitiesNavbarNew'
import EduventuresUnversitiessHero from './EduventuresUniversititesHeroNew'
import EduventuresUniversitiesContact from './EduventuresUniversitiesContact'
import UpskillingWorkshopsSection from '../components/UpskillingWorkshopsSection/UpskillingWorkshopsSection'
import CollegeTrainersSection from '../components/CollegeTrainerSection/CollegeTrainerSection'
import CollegeTestimonialsSection from '../components/CollegeTestimonialsSection/CollegeTestimonialsSection'
import EduventuresTestimonials from './EduventuresTestimonials'
import Companies_marquee from '../components/Companies_marquee'

const EduventuresForUniversities = () => {
  const contactFormRef = useRef(null); // Create ref for contact form

  // Function to scroll to contact form
  const scrollToContactForm = () => {
    contactFormRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
   <>
   <div className='w-[100vw] min-h-[100vh] '>
    <EduventuresForUniversitiesNavbar/>
    <EduventuresUnversitiessHero scrollToContactForm={scrollToContactForm} />
    <Companies_marquee/>
    <EduventuresUniversitiesContact ref={contactFormRef} />
    {/* <EduventuresCourses/> */}
    <UpskillingWorkshopsSection/>
    <CollegeTrainersSection/>
    <CollegeTestimonialsSection />
    {/* <EduventuresTestimonials/> */}
   </div>
   </>
  )
}

export default EduventuresForUniversities
