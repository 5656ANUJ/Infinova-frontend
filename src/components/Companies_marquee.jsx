import React from 'react'

const Companies_marquee = () => {
  return (
    <>
      {/* Title */}
      <h1
        style={{
          textAlign: 'center',
          marginTop: '60px',
          marginBottom: '60px',
          fontSize: '2.5rem',
          fontWeight: 'bold',
        }}
        className="eduventures-testimonials-title"
      >
        Our <span className="testinomial-highlights">Clients</span> 
        {/* Our{' '}
        <span className="testinomial-highlights">Mission</span> */}
      </h1>

      {/* Logos Section */}
      <div className="marquee-container">
        <div className="marquee">
          <img src="/logosColleges/Deogiri.jpg" alt="google" className="logo" />
          <img src="/logosColleges/Dr_BAMU.png" alt="eBay" className="logo" />
          <img src="/logosColleges/GPN.jpg" alt="Paytm" className="logo" />
          <img src="/logosColleges/Gulabrao_College.jpg" alt="Amazon" className="logo" />
          <img src="/logosColleges/HRPIPER.webp" alt="Unilever" className="logo" />
          <img src="/logosColleges/MGM.png" alt="Google" className="logo" />
          <img src="/logosColleges/MIT.png" alt="eBay" className="logo" />
          <img src="/logosColleges/PRAVARA.png" alt="PRAVARA" className="logo" />
          <img src="/logosColleges/RIT.jpg" alt="Amazon" className="logo" />
          <img src="/logosColleges/St_John_College.png" alt="Unilever" className="logo" />
          <img src="/logosColleges/WIT.webp" alt="Google" className="logo" />
          <img src="/logosColleges/YB_Chavan.png" alt="eBay" className="logo" />

          {/* Duplicate for looping marquee */}
          <img src="/logosColleges/Deogiri.jpg" alt="google" className="logo" />
          <img src="/logosColleges/Dr_BAMU.png" alt="eBay" className="logo" />
          <img src="/logosColleges/GPN.jpg" alt="Paytm" className="logo" />
          <img src="/logosColleges/Gulabrao_College.jpg" alt="Amazon" className="logo" />
          <img src="/logosColleges/HRPIPER.webp" alt="Unilever" className="logo" />
          <img src="/logosColleges/MGM.png" alt="Google" className="logo" />
          <img src="/logosColleges/MIT.png" alt="eBay" className="logo" />
          <img src="/logosColleges/PRAVARA.png" alt="PRAVARA" className="logo" />
          <img src="/logosColleges/RIT.jpg" alt="Amazon" className="logo" />
          <img src="/logosColleges/St_John_College.png" alt="Unilever" className="logo" />
          <img src="/logosColleges/WIT.webp" alt="Google" className="logo" />
          <img src="/logosColleges/YB_Chavan.png" alt="eBay" className="logo" />
        </div>
      </div>
    </>
  )
}

export default Companies_marquee
