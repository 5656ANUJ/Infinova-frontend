import React from 'react';

import { Users, TrendingUp, Award, Briefcase } from 'lucide-react';


const Clients = () => {
  return (
    <div className="clients-section">
      
      {/* Clients Heading */}
      <h1 className="clients-heading text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
        Clients
      </h1>

      {/* Marquee Section */}

  <div className="logo-slider">
    <div className="logo-track">
      {/* <!-- Logos (Set 1) --> */}
      <div className='logo'><img src="/logosCompanies/accenture.png" alt="accenture" /></div>
      <div className='logo'><img src="/logosCompanies/Atos.webp" alt="Atos" /></div>
      <div className='logo'><img src="/logosCompanies/bajafin.png" alt="bajafin" /></div>
      <div className='logo'><img src="/logosCompanies/barklays.png" alt="barklays" /></div>
      <div className='logo'><img src="/logosCompanies/Endurance.png" alt="Endurance" /></div>
      <div className='logo'><img src="/logosCompanies/greenpack.png" alt="greenpack" /></div>
      <div className='logo'><img src="/logosCompanies/Microsoft.png" alt="Microsoft" /></div>
      <div className='logo'><img src="/logosCompanies/skoda.png" alt="skoda" /></div>
      <div className='logo'><img src="/logosCompanies/tvs.png" alt="tvs" /></div>
      <div className='logo'><img src="/logosCompanies/teamlease-services.png" alt="teamlease-services" /></div>

      {/* <!-- Logos (Set 2 – Duplicate for infinite loop) --> */}
      <div className='logo'><img src="/logosCompanies/accenture.png" alt="accenture" /></div>
      <div className='logo'><img src="/logosCompanies/Atos.webp" alt="Atos" /></div>
      <div className='logo'><img src="/logosCompanies/bajafin.png" alt="bajafin" /></div>
      <div className='logo'><img src="/logosCompanies/barklays.png" alt="barklays" /></div>
      <div className='logo'><img src="/logosCompanies/Endurance.png" alt="Endurance" /></div>
      <div className='logo'><img src="/logosCompanies/greenpack.png" alt="greenpack" /></div>
      <div className='logo'><img src="/logosCompanies/Microsoft.png" alt="Microsoft" /></div>
      <div className='logo'><img src="/logosCompanies/skoda.png" alt="skoda" /></div>
      <div className='logo'><img src="/logosCompanies/tvs.png" alt="tvs" /></div>
      <div className='logo'><img src="/logosCompanies/teamlease-services.png" alt="teamlease-services" /></div>

      {/* <!-- Logos (Set 3 – Duplicate for infinite loop) --> */}
      <div className='logo'><img src="/logosCompanies/accenture.png" alt="accenture" /></div>
      <div className='logo'><img src="/logosCompanies/Atos.webp" alt="Atos" /></div>
      <div className='logo'><img src="/logosCompanies/bajafin.png" alt="bajafin" /></div>
      <div className='logo'><img src="/logosCompanies/barklays.png" alt="barklays" /></div>
      <div className='logo'><img src="/logosCompanies/Endurance.png" alt="Endurance" /></div>
      <div className='logo'><img src="/logosCompanies/greenpack.png" alt="greenpack" /></div>
      <div className='logo'><img src="/logosCompanies/Microsoft.png" alt="Microsoft" /></div>
      <div className='logo'><img src="/logosCompanies/skoda.png" alt="skoda" /></div>
      <div className='logo'><img src="/logosCompanies/tvs.png" alt="tvs" /></div>
      <div className='logo'><img src="/logosCompanies/teamlease-services.png" alt="teamlease-services" /></div>

       {/* <!-- Logos (Set 4 – Duplicate for infinite loop) --> */}
      <div className='logo'><img src="/logosCompanies/accenture.png" alt="accenture" /></div>
      <div className='logo'><img src="/logosCompanies/Atos.webp" alt="Atos" /></div>
      <div className='logo'><img src="/logosCompanies/bajafin.png" alt="bajafin" /></div>
      <div className='logo'><img src="/logosCompanies/barklays.png" alt="barklays" /></div>
      <div className='logo'><img src="/logosCompanies/Endurance.png" alt="Endurance" /></div>
      <div className='logo'><img src="/logosCompanies/greenpack.png" alt="greenpack" /></div>
      <div className='logo'><img src="/logosCompanies/Microsoft.png" alt="Microsoft" /></div>
      <div className='logo'><img src="/logosCompanies/skoda.png" alt="skoda" /></div>
      <div className='logo'><img src="/logosCompanies/tvs.png" alt="tvs" /></div>
      <div className='logo'><img src="/logosCompanies/teamlease-services.png" alt="teamlease-services" /></div>
    </div>
  </div>


      {/* Why Choose Us Heading */}
      <div className="choose-heading">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
          Why <span className="text-[#2563eb]">Choose</span> Us ?
        </h2>
      </div>
      {/* Stats Cards */}
      <div className="stats-grid">
        <div className="stats-card bg-[#FFF3E3] flex items-center flex-col">
          <Users className="stats-icon" />

          <h3 className="stats-number">10+</h3>
          <p className="stats-label" id="stats-Team">Teams</p>
        </div>
       

        <div className="stats-card bg-[#FFEEEE] flex items-center flex-col">
          <TrendingUp className="stats-icon" />
          <h3 className="stats-number">10000+</h3>
          <p className="stats-label">Happy Students</p>
        </div>

        <div className="stats-card bg-[#E4FAFF] flex items-center flex-col">
          <Award className="stats-icon" />
          <h3 className="stats-number">5+</h3>
          <p className="stats-label uppercase">Award Winning</p>
        </div>

        <div className="stats-card bg-[#ECE7FF] flex items-center flex-col">
          <Briefcase className="stats-icon" />
          <h3 className="stats-number">100+</h3>
          <p className="stats-label">Partners</p>
        </div>
      </div>
    </div>
  );
};

export default Clients;
