import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TrainerCard from './TrainerCard';
import './TrainersGrid.css';

const TrainersGrid = ({ trainers, showViewAll = true, desktopCount = 4, mobileCount = 2 }) => {
  const [showAll, setShowAll] = useState(false);
  const [visibleCount, setVisibleCount] = useState(desktopCount);
  const sectionRef = useRef(null);

  // Update visible count based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setVisibleCount(mobileCount);
      } else {
        setVisibleCount(desktopCount);
      }
    };

    handleResize(); // Call on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [desktopCount, mobileCount]);

  const displayedTrainers = showAll ? trainers : trainers.slice(0, visibleCount);

  // Animation variants for cards
  const cardVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 20
    },
    visible: (index) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.5,
        ease: 'easeOut'
      }
    }),
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const handleViewAll = () => {
    // If collapsing (Show Less), scroll to top of section
    if (showAll) {
      sectionRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setShowAll(!showAll);
  };

  return (
    <div className="trainers-grid-container" ref={sectionRef}>
      <motion.div
        className="trainers-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence mode="popLayout">
          {displayedTrainers.map((trainer, index) => (
            <motion.div
              key={trainer.name + index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              layout
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <TrainerCard
                image={trainer.image}
                name={trainer.name}
                title={trainer.title}
                verified={trainer.verified}
                experience={trainer.experience}
                expertise={trainer.expertise}
                description={trainer.description}
              />
            </motion.div>
          ))}

          {/* CTA Card - Only shows when all trainers are revealed */}
          {showAll && (
            <motion.div
              key="cta-card"
              custom={displayedTrainers.length}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              layout
              // REMOVED whileHover - No hover effect for CTA card
            >
              <div className="trainer-card trainer-card-cta">
                <div className="trainer-card-cta-content">
                  <div className="trainer-card-cta-icon">
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 5v14M5 12h14" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <h3 className="trainer-card-cta-title">More Trainers Coming Soon</h3>
                  <p className="trainer-card-cta-description">
                    We're constantly adding more industry experts to our platform
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {showViewAll && trainers.length > visibleCount && (
        <div className="view-all-button-container">
          <motion.button
            className="view-all-btn"
            onClick={handleViewAll}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {showAll ? 'Show Less' : 'View All'}
          </motion.button>
        </div>
      )}
    </div>
  );
};

export default TrainersGrid;
