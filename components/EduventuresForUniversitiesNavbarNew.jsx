import React, { useState, useEffect } from 'react';
import {motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../global.css';
import logoImage from '/eduventures.png';

const EduventuresForUniversitiesNavbar = () => {
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const [isPartnersOpen, setIsPartnersOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [courses, setCourses] = useState([]);
  const [coursesLoading, setCoursesLoading] = useState(false);
  
  const navigate = useNavigate();

  const partners = [
    { label: 'Partner 1', href: '#partner1' },
    { label: 'Partner 2', href: '#partner2' },
    { label: 'Partner 3', href: '#partner3' },
  ];

  // Fetch courses on component mount
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setCoursesLoading(true);
        const res = await axios.get(import.meta.env.VITE_BACKEND_NEW_COURSES);
        if (res.data && res.data.length > 0) {
          setCourses(res.data);
        }
      } catch (error) {
        console.error("Error fetching courses: ", error);
      } finally {
        setCoursesLoading(false);
      }
    };
    fetchCourses();
  }, []);

  const handleCourseSelect = (course) => {
    setIsProgramsOpen(false);
    setIsMobileMenuOpen(false);
    navigate('/course-form', { state: { course } });
  };

  return (
    <>
      <nav className="w-full h-16 md:h-20 lg:h-24 bg-white flex items-center justify-between px-4 md:px-6 lg:px-8 shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-3">
            <img
              src={logoImage}
              alt="Infinova Eduventures"
              className="h-10 md:h-12 lg:h-16 w-auto"
            />
            <span className="text-black font-extrabold text-sm md:text-lg lg:text-xl px-2 py-1 rounded-md">
              For <span className="text-blue-600">Campus</span>
            </span>
          </div>
          <div className="w-5" />

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Programs Dropdown with Courses */}
            <div
              className="relative"
              onMouseEnter={() => setIsProgramsOpen(true)}
              onMouseLeave={() => setIsProgramsOpen(false)}
            >
              <button className="font-medium text-gray-800 hover:text-blue-600 focus:outline-none px-3 py-2 rounded-md hover:bg-gray-100">
                Our Programs ▾ 
              </button>
              <AnimatePresence>
                {isProgramsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full mt-2 w-80 bg-white border rounded-md shadow-lg py-2 z-50 max-h-96 overflow-y-auto"
                  >
                    {coursesLoading ? (
                      <div className="p-4 text-center text-gray-500">
                        Loading courses...
                      </div>
                    ) : courses.length > 0 ? (
                      courses.map((course, index) => (
                        <div
                          key={course._id || index}
                          onClick={() => handleCourseSelect(course)}
                          className="px-4 py-3 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors flex items-center gap-3"
                        >
                          <img 
                            src={course.courseImageUrl || 'course.png'} 
                            alt={course.name}
                            className="w-12 h-12 rounded-md object-cover flex-shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <div className="font-semibold text-sm text-gray-900 truncate">
                              {course.name}
                            </div>
                            <div className="text-xs text-gray-600 mt-1 line-clamp-2">
                              {course.description || course.category?.name || 'Course'}
                            </div>
                            {course.trainer?.name && (
                              <div className="text-xs text-gray-500 mt-1">
                                by {course.trainer.name}
                              </div>
                            )}
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="p-4 text-center text-gray-500">
                        No courses available
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Partners Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsPartnersOpen(true)}
              onMouseLeave={() => setIsPartnersOpen(false)}
            >
              <button className="font-medium text-gray-800 hover:text-blue-600 focus:outline-none px-3 py-2 rounded-md hover:bg-gray-100">
                Our Partners ▾ 
              </button>
              <AnimatePresence>
                {isPartnersOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full mt-2 w-48 bg-white border rounded-md shadow-md py-2 z-50 divide-y divide-gray-200"
                  >
                    {partners.map((partner) => (
                      <a
                        key={partner.href}
                        href={partner.href}
                        className="block w-full text-left pr-3 py-2 text-gray-700 hover:bg-gray-100"
                        style={{ paddingLeft: '0.5rem' }}
                      >
                        {partner.label}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden ml-auto flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-md text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          <div className="w-4" aria-hidden="true" />
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-b border-gray-200 shadow-md overflow-hidden"
          >
            <div className="flex flex-col px-5 py-4 space-y-3">
              {/* Programs Mobile */}
              <button
                onClick={() => setIsProgramsOpen(!isProgramsOpen)}
                className="w-full text-left font-medium text-gray-800 hover:text-blue-600 pr-3 py-2 rounded-md hover:bg-gray-100"
                style={{ paddingLeft: '0.5rem' }}
              >
                Our Programs ▾
              </button>
              <AnimatePresence>
                {isProgramsOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex flex-col overflow-hidden max-h-80 overflow-y-auto"
                  >
                    {coursesLoading ? (
                      <div className="p-4 text-center text-gray-500">
                        Loading courses...
                      </div>
                    ) : courses.length > 0 ? (
                      courses.map((course, index) => (
                        <div
                          key={course._id || index}
                          onClick={() => handleCourseSelect(course)}
                          className="px-3 py-3 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors flex items-center gap-3"
                        >
                          <img 
                            src={course.courseImageUrl || 'course.png'} 
                            alt={course.name}
                            className="w-10 h-10 rounded-md object-cover flex-shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <div className="font-semibold text-sm text-gray-900">
                              {course.name}
                            </div>
                            <div className="text-xs text-gray-600 mt-1 line-clamp-2">
                              {course.description || course.category?.name || 'Course'}
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="p-4 text-center text-gray-500">
                        No courses available
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Partners Mobile */}
              <button
                onClick={() => setIsPartnersOpen(!isPartnersOpen)}
                className="w-full text-left font-medium text-gray-800 hover:text-blue-600 pr-3 py-2 rounded-md hover:bg-gray-100"
                style={{ paddingLeft: '0.5rem' }}
              >
                Our Partners ▾
              </button>
              <AnimatePresence>
                {isPartnersOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex flex-col overflow-hidden divide-y divide-gray-200"
                  >
                    {partners.map((partner) => (
                      <a
                        key={partner.href}
                        href={partner.href}
                        className="block w-full text-left pr-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                        style={{ paddingLeft: '1rem' }}
                      >
                        {partner.label}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default EduventuresForUniversitiesNavbar;