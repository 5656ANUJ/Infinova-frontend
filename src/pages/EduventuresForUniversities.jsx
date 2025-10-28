import React, { useRef } from 'react'
import EduventuresForUniversitiesNavbar from '../../components/EduventuresForUniversitiesNavbarNew'
import EduventuresUnversitiessHero from './EduventuresUniversititesHeroNew'
import EduventuresUniversitiesContact from './EduventuresUniversitiesContact'
import EduventuresCourses from './EduventuresCourses'
import EduventuresTrainers from './EduventuresTrainers'
import EduventuresTestimonials from './EduventuresTestimonials'

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
    <EduventuresUniversitiesContact ref={contactFormRef} />
    <EduventuresCourses/>
    <EduventuresTrainers/>
    <EduventuresTestimonials/>
   </div>
   </>
  )
}

export default EduventuresForUniversities
