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

  <div class="logo-slider">
    <div class="logo-track">
      {/* <!-- Logos (Set 1) --> */}
      <div className='logo'><img src="/src/logosCompanies/accenture.png" alt="" /></div>
      <div className='logo'><img src="/src/logosCompanies/Atos.webp" alt="Logo 1" /></div>
      <div className='logo'><img src="/src/logosCompanies/Bajafin.png" alt="Logo 1" /></div>
      <div className='logo'><img src="/src/logosCompanies/barklays.png" alt="Logo 1" /></div>
      <div className='logo'><img src="/src/logosCompanies/Endurance.png" alt="Logo 1" /></div>
      <div className='logo'><img src="/src/logosCompanies/greenpack.png" alt="Logo 1" /></div>
      <div className='logo'><img src="/src/logosCompanies/Microsoft.png" alt="Logo 1" /></div>
      <div className='logo'><img src="/src/logosCompanies/skoda.png" alt="Logo 1" /></div>
      <div className='logo'><img src="/src/logosCompanies/tvs.png" alt="Logo 1" /></div>
      <div className='logo'><img src="/src/logosCompanies/teamlease-services.png" alt="Logo 1" /></div>

      {/* <!-- Logos (Set 2 – Duplicate for infinite loop) --> */}
      <div className='logo'><img src="/src/logosCompanies/accenture.png" alt="" /></div>
      <div className='logo'><img src="/src/logosCompanies/Atos.webp" alt="Logo 1" /></div>
      <div className='logo'><img src="/src/logosCompanies/Bajafin.png" alt="Logo 1" /></div>
      <div className='logo'><img src="/src/logosCompanies/barklays.png" alt="Logo 1" /></div>
      <div className='logo'><img src="/src/logosCompanies/Endurance.png" alt="Logo 1" /></div>
      <div className='logo'><img src="/src/logosCompanies/greenpack.png" alt="Logo 1" /></div>
      <div className='logo'><img src="/src/logosCompanies/Microsoft.png" alt="Logo 1" /></div>
      <div className='logo'><img src="/src/logosCompanies/skoda.png" alt="Logo 1" /></div>
      <div className='logo'><img src="/src/logosCompanies/tvs.png" alt="Logo 1" /></div>
      <div className='logo'><img src="/src/logosCompanies/teamlease-services.png" alt="Logo 1" /></div>

      {/* <!-- Logos (Set 3 – Duplicate for infinite loop) --> */}
      <div className='logo'><img src="/src/logosCompanies/accenture.png" alt="" /></div>
      <div className='logo'><img src="/src/logosCompanies/Atos.webp" alt="Logo 1" /></div>
      <div className='logo'><img src="/src/logosCompanies/Bajafin.png" alt="Logo 1" /></div>
      <div className='logo'><img src="/src/logosCompanies/barklays.png" alt="Logo 1" /></div>
      <div className='logo'><img src="/src/logosCompanies/Endurance.png" alt="Logo 1" /></div>
      <div className='logo'><img src="/src/logosCompanies/greenpack.png" alt="Logo 1" /></div>
      <div className='logo'><img src="/src/logosCompanies/Microsoft.png" alt="Logo 1" /></div>
      <div className='logo'><img src="/src/logosCompanies/skoda.png" alt="Logo 1" /></div>
      <div className='logo'><img src="/src/logosCompanies/tvs.png" alt="Logo 1" /></div>
      <div className='logo'><img src="/src/logosCompanies/teamlease-services.png" alt="Logo 1" /></div>

       {/* <!-- Logos (Set 4 – Duplicate for infinite loop) --> */}
      <div className='logo'><img src="/src/logosCompanies/accenture.png" alt="" /></div>
      <div className='logo'><img src="/src/logosCompanies/Atos.webp" alt="Logo 1" /></div>
      <div className='logo'><img src="/src/logosCompanies/Bajafin.png" alt="Logo 1" /></div>
      <div className='logo'><img src="/src/logosCompanies/barklays.png" alt="Logo 1" /></div>
      <div className='logo'><img src="/src/logosCompanies/Endurance.png" alt="Logo 1" /></div>
      <div className='logo'><img src="/src/logosCompanies/greenpack.png" alt="Logo 1" /></div>
      <div className='logo'><img src="/src/logosCompanies/Microsoft.png" alt="Logo 1" /></div>
      <div className='logo'><img src="/src/logosCompanies/skoda.png" alt="Logo 1" /></div>
      <div className='logo'><img src="/src/logosCompanies/tvs.png" alt="Logo 1" /></div>
      <div className='logo'><img src="/src/logosCompanies/teamlease-services.png" alt="Logo 1" /></div>
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
