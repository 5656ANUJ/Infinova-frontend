import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../global.css';
import logoImage from '/eduventures.png';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchCourses, setSearchCourses] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [filteredSearchCourses, setFilteredSearchCourses] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);
  
  const searchInputRef = useRef(null);
  const searchResultsRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSearchCourses = async () => {
      try {
        setSearchLoading(true);
        const res = await axios.get(import.meta.env.VITE_BACKEND_NEW_COURSES);
        if (res.data && res.data.length > 0) {
          setSearchCourses(res.data);
          setFilteredSearchCourses(res.data.slice(0, 3));
        }
      } catch (error) {
        console.error("Error fetching search courses: ", error);
      } finally {
        setSearchLoading(false);
      }
    };
    fetchSearchCourses();
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredSearchCourses(searchCourses.slice(0, 3));
    } else {
      const filtered = searchCourses.filter(course =>
        course.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.category?.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.trainer?.name?.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredSearchCourses(filtered);
    }
  }, [searchQuery, searchCourses]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchResultsRef.current &&
        !searchResultsRef.current.contains(event.target) &&
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target)
      ) {
        setShowSearchResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Search query:', searchQuery);
      setShowSearchResults(false);
    }
  };

  const handleSearchInputFocus = () => {
    setShowSearchResults(true);
  };

  const handleSearchCourseSelect = (course) => {
    setSearchQuery(course.name);
    setShowSearchResults(false);
    navigate('/course-form', { state: { course } });
  };

  return (
    <>
      <nav className="w-full h-16 md:h-20 lg:h-24 bg-white flex items-center px-4 md:px-6 lg:px-8 mr-4 shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="flex items-center space-x-3">
          <img
            src={logoImage}
            alt="Infinova Eduventures - Bridging your Career"
            className="h-10 md:h-12 lg:h-16 w-auto"
          />
          <span className="text-black font-extrabold text-sm md:text-lg lg:text-xl px-2 py-1 rounded-md">
            For <span className="text-blue-600">Students</span>
          </span>
        </div>

        <div className="flex-1" />

        <div className="hidden md:flex items-center relative">
          <form onSubmit={handleSearchSubmit} className="flex items-center gap-3">
            <div className="relative">
              <input
                ref={searchInputRef}
                type="text"
                placeholder="What do you want to learn?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={handleSearchInputFocus}
                aria-label="Search courses"
                className="w-72 md:w-96 lg:w-[28rem] h-10 md:h-12 lg:h-14 border border-gray-300 rounded-md text-sm md:text-base lg:text-lg bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                style={{
                  paddingLeft: '1rem',
                  paddingRight: '0.75rem',
                  boxSizing: 'border-box'
                }}
              />

              {showSearchResults && (
                <div 
                  ref={searchResultsRef}
                  className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg max-h-96 overflow-y-auto z-50"
                >
                  {searchLoading ? (
                    <div className="p-4 text-center text-gray-500">
                      Loading courses...
                    </div>
                  ) : filteredSearchCourses.length > 0 ? (
                    <div>
                      {filteredSearchCourses.map((course, index) => (
                        <div 
                          key={course._id || index}
                          className="p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors flex items-center gap-4"
                          onClick={() => handleSearchCourseSelect(course)}
                        >
                          <img 
                            src={course.courseImageUrl || 'course.png'} 
                            alt={course.name}
                            className="w-12 h-12 rounded-md object-cover"
                          />
                          <div className="flex-1">
                            <div className="font-semibold text-sm text-gray-900">
                              {course.name}
                            </div>
                            <div className="text-xs text-gray-600 mt-1">
                              {course.description || course.category?.name || 'Course'}
                            </div>
                            {course.trainer?.name && (
                              <div className="text-xs text-gray-500 mt-1">
                                by {course.trainer.name}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                      {searchQuery && filteredSearchCourses.length === 0 && (
                        <div className="p-4 text-center text-gray-500">
                          No courses found for "{searchQuery}"
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="p-4 text-center text-gray-500">
                      No courses available
                    </div>
                  )}
                </div>
              )}
            </div>

            <button
              type="submit"
              className="bg-black text-white h-10 md:h-12 lg:h-14 rounded-md hover:bg-gray-800 transition-colors duration-200 font-medium text-sm md:text-base lg:text-lg whitespace-nowrap mr-5"
              style={{
                paddingLeft: '1rem',
                paddingRight: '1rem',
                minWidth: 100
              }}
            >
              Search
            </button>
          </form>
          <div className="w-3"></div>
        </div>

        <div className="flex items-center md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle search"
            className="p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <div className="w-3"></div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-b border-gray-200 shadow-lg overflow-hidden relative"
          >
            <div className="px-4 py-3">
              <form onSubmit={handleSearchSubmit} className="flex items-center gap-0">
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="What do you want to learn?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={handleSearchInputFocus}
                  aria-label="Mobile search"
                  className="flex-1 h-12 border border-gray-300 text-base bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                  style={{
                    paddingLeft: '0.95rem',
                    paddingRight: '0.75rem',
                    boxSizing: 'border-box'
                  }}
                />

                <button
                  type="submit"
                  className="bg-black text-white h-12 hover:bg-gray-800 transition-colors duration-200 font-medium text-sm md:text-base mr-2"
                  style={{
                    paddingLeft: '0.75rem',
                    paddingRight: '0.75rem',
                    minWidth: 80
                  }}
                >
                  Search
                </button>
              </form>

              {showSearchResults && (
                <div 
                  ref={searchResultsRef}
                  className="mt-2 bg-white border border-gray-200 rounded-md shadow-lg max-h-80 overflow-y-auto"
                >
                  {searchLoading ? (
                    <div className="p-4 text-center text-gray-500">
                      Loading courses...
                    </div>
                  ) : filteredSearchCourses.length > 0 ? (
                    <div>
                      {filteredSearchCourses.map((course, index) => (
                        <div 
                          key={course._id || index}
                          className="p-3 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors flex items-center gap-3"
                          onClick={() => handleSearchCourseSelect(course)}
                        >
                          <img 
                            src={course.courseImageUrl || 'course.png'} 
                            alt={course.name}
                            className="w-10 h-10 rounded-md object-cover"
                          />
                          <div className="flex-1">
                            <div className="font-semibold text-sm text-gray-900">
                              {course.name}
                            </div>
                            <div className="text-xs text-gray-600 mt-1">
                              {course.description || course.category?.name || 'Course'}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-4 text-center text-gray-500">
                      No courses available
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;