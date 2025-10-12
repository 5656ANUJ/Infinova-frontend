import React, { useState, useEffect } from "react";
import { Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const EduventuresCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const res = await axios.get(import.meta.env.VITE_BACKEND_NEW_COURSES);
        if (res.data && res.data.length > 0) {
          setCourses(res.data);
        }
        setError(null);
      } catch (err) {
        console.error("Error fetching courses: ", err);
        setError("Failed to load courses. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    
    fetchCourses();
  }, []);

  const handleDownload = (course) => {
    // Redirect to course form with course data
    navigate('/course-form', { state: { course } });
  };

  if (loading) {
    return (
      <div className="eduventuresCourses-container bg-white">
        <div className="flex justify-center items-center py-20">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <p className="mt-4 text-gray-600">Loading courses...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="eduventuresCourses-container bg-white">
        <div className="flex justify-center items-center py-20">
          <div className="text-center text-red-600">
            <p>{error}</p>
          </div>
        </div>
      </div>
    );
  }

  if (courses.length === 0) {
    return (
      <div className="eduventuresCourses-container bg-white">
        <div className="flex justify-center items-center py-20">
          <div className="text-center text-gray-600">
            <p>No courses available at the moment.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="eduventuresCourses-container bg-white">
      {/* Heading */}
      <h2 className="eduventuresCourses-heading text-4xl font-bold text-center font-family" >
        <span className="text-blue-600">Soft Skills</span> Courses
      </h2>

      {/* Cards with Flexbox */}
      <div className="eduventuresCourses-cards flex flex-wrap justify-center">
        {courses.map((course, index) => (
          <div key={course._id || index} className="eduventuresCourses-cardWrapper">
            <div className="eduventuresCourses-card bg-blue-100 rounded-2xl shadow-md hover:shadow-xl transition flex flex-col">
              <div className="eduventuresCourses-image">
                <img
                  src={course.courseImageUrl || "/coursesDummy.png"}
                  alt={course.name || "course"}
                  className="rounded-xl w-full h-auto"
                  onError={(e) => {
                    e.target.src = "/coursesDummy.png";
                  }}
                />
              </div>

              <div className="eduventuresCourses-cardContent flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-bold">{course.name || "Course"}</h3>
                  <p className="text-sm text-gray-700">
                    {course.description || course.category?.name || "Course description"}
                  </p>
                  {course.trainer?.name && (
                    <p className="text-xs text-gray-600 mt-2">
                      Trainer: {course.trainer.name}
                    </p>
                  )}
                </div>

                <div className="mt-4">
                  <button
                    onClick={() => handleDownload(course)}
                    className="download-btn w-full"
                    style={{
                      backgroundColor: '#0056D2',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '10px 16px',
                      fontSize: '14px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 2px 4px rgba(0, 86, 210, 0.2)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#004BB8';
                      e.currentTarget.style.transform = 'translateY(-1px)';
                      e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 86, 210, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#0056D2';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 86, 210, 0.2)';
                    }}
                    onMouseDown={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <Download size={16} />
                    Download Brochure
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EduventuresCourses;