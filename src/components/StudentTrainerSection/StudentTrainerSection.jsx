import React from 'react';
import TrainersGrid from '../TrainerCard/TrainersGrid';
import './StudentTrainerSection.css';

const StudentTrainersSection = () => {
  const trainers = [
    {
      image: "/dummy_trainer.jpg",
      name: "Anushree Mital",
      title: "CEO at Meshoo",
      verified: true,
      experience: "7+ years",
      expertise: "NLP Expert",
      description: "He worked with Mark Zuckerberg and led the team that built FB Messenger, before setting up FB's office outside the US"
    },
    {
      image: "path/to/trainer2-image.jpg",
      name: "John Doe",
      title: "Tech Lead at Google",
      verified: true,
      experience: "10+ years",
      expertise: "Cloud Expert",
      description: "Experienced cloud architect with expertise in building scalable systems. Worked on major cloud infrastructure projects."
    },
    {
      image: "path/to/trainer3-image.jpg",
      name: "Sarah Smith",
      title: "Director at Microsoft",
      verified: true,
      experience: "8+ years",
      expertise: "AI Expert",
      description: "AI and machine learning specialist. Contributed to several AI-driven products used by millions worldwide."
    },
    {
      image: "path/to/trainer4-image.jpg",
      name: "Alex Johnson",
      title: "CTO at Amazon",
      verified: true,
      experience: "12+ years",
      expertise: "DevOps Expert",
      description: "DevOps and infrastructure expert. Built and scaled systems handling millions of transactions daily."
    },
    {
      image: "path/to/trainer5-image.jpg",
      name: "Emma Wilson",
      title: "VP at Apple",
      verified: true,
      experience: "9+ years",
      expertise: "UX Expert",
      description: "User experience specialist with focus on design thinking. Led major redesign initiatives for global products."
    },
    {
      image: "path/to/trainer6-image.jpg",
      name: "Michael Chen",
      title: "Engineer at Meta",
      verified: true,
      experience: "6+ years",
      expertise: "Backend Expert",
      description: "Backend infrastructure expert. Designed and maintained systems serving millions of daily active users."
    },
    {
      image: "path/to/trainer7-image.jpg",
      name: "Lisa Brown",
      title: "Manager at Netflix",
      verified: true,
      experience: "11+ years",
      expertise: "Data Expert",
      description: "Data science and analytics leader. Built recommendation engines used by millions of subscribers globally."
    }
  ];

  return (
    <section className="student-trainers-section">
      <div className="section-header">
        <h2 className="section-title">
          Our Industry Experts Trainers
        </h2>
        <p className="section-description">
          we had great team which help you to upskills
        </p>
      </div>
      
      <TrainersGrid trainers={trainers} showViewAll={true} desktopCount={4} mobileCount={2} />
    </section>
  );
};

export default StudentTrainersSection;
