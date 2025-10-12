import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './CourseForm.css';

const CourseForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const course = location.state?.course;

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: ''
  });
  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    phone: ''
  });
  const [touched, setTouched] = useState({
    fullName: false,
    email: false,
    phone: false
  });
  const [otpValues, setOtpValues] = useState(['', '', '', '']);
  const [showOTPSection, setShowOTPSection] = useState(false);
  const [message, setMessage] = useState('');
  const [timer, setTimer] = useState(0);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isSendingOTP, setIsSendingOTP] = useState(false);

  useEffect(() => {
    if (!course) {
      navigate('/');
    }
  }, [course, navigate]);

  useEffect(() => {
    let interval = null;
    if (isTimerActive && timer > 0) {
      interval = setInterval(() => {
        setTimer(timer => timer - 1);
      }, 1000);
    } else if (timer === 0 && isTimerActive) {
      setIsTimerActive(false);
      setMessage('OTP has expired. Please try again.');
      setShowOTPSection(false);
      setTimeout(() => setMessage(''), 3000);
    }
    return () => clearInterval(interval);
  }, [isTimerActive, timer]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  // Validation functions
  const validateFullName = (name) => {
    if (!name.trim()) {
      return 'Full name is required';
    }
    if (name.trim().length < 2) {
      return 'Name must be at least 2 characters';
    }
    if (name.trim().length > 50) {
      return 'Name must not exceed 50 characters';
    }
    if (!/^[a-zA-Z\s.'-]+$/.test(name)) {
      return 'Name can only contain letters, spaces, and basic punctuation';
    }
    return '';
  };

  const validateEmail = (email) => {
    if (!email.trim()) {
      return 'Email is required';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address';
    }
    if (email.length > 100) {
      return 'Email must not exceed 100 characters';
    }
    return '';
  };

  const validatePhone = (phone) => {
    if (!phone.trim()) {
      return 'Phone number is required';
    }
    if (!/^\d+$/.test(phone)) {
      return 'Phone number must contain only digits';
    }
    if (phone.length !== 10) {
      return 'Phone number must be exactly 10 digits';
    }
    if (phone[0] === '0' || phone[0] === '1' || phone[0] === '2' || phone[0] === '3' || phone[0] === '4' || phone[0] === '5') {
      return 'Phone number must start with 6, 7, 8, or 9';
    }
    return '';
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // For phone, only allow digits and limit to 10 characters
    if (name === 'phone') {
      const digitOnly = value.replace(/\D/g, '');
      if (digitOnly.length <= 10) {
        setFormData(prev => ({
          ...prev,
          [name]: digitOnly
        }));
        
        // Validate on change if already touched
        if (touched[name]) {
          setErrors(prev => ({
            ...prev,
            [name]: validatePhone(digitOnly)
          }));
        }
      }
      return;
    }
    
    // For other fields
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Validate on change if already touched
    if (touched[name]) {
      let error = '';
      if (name === 'fullName') {
        error = validateFullName(value);
      } else if (name === 'email') {
        error = validateEmail(value);
      }
      setErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));

    // Validate on blur
    let error = '';
    if (name === 'fullName') {
      error = validateFullName(formData[name]);
    } else if (name === 'email') {
      error = validateEmail(formData[name]);
    } else if (name === 'phone') {
      error = validatePhone(formData[name]);
    }

    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const validateForm = () => {
    const fullNameError = validateFullName(formData.fullName);
    const emailError = validateEmail(formData.email);
    const phoneError = validatePhone(formData.phone);

    setErrors({
      fullName: fullNameError,
      email: emailError,
      phone: phoneError
    });

    setTouched({
      fullName: true,
      email: true,
      phone: true
    });

    return !fullNameError && !emailError && !phoneError;
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: ''
    });
    setErrors({
      fullName: '',
      email: '',
      phone: ''
    });
    setTouched({
      fullName: false,
      email: false,
      phone: false
    });
    setOtpValues(['', '', '', '']);
    setShowOTPSection(false);
    setMessage('');
    setTimer(0);
    setIsTimerActive(false);
    setIsSendingOTP(false);
    setIsDownloading(false);
  };

  const sendOTP = async () => {
    if (!validateForm()) {
      setMessage('Please fix all errors before proceeding');
      setTimeout(() => setMessage(''), 3000);
      return;
    }

    setIsSendingOTP(true);

    try {
      const response = await fetch(import.meta.env.VITE_BACKEND_GET_OTP, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.fullName.trim(),
          email: formData.email.trim(),
          phone: formData.phone,
          age: '25'
        }),
      });

      const data = await response.json();

      if (data.success) {
        setMessage('OTP sent successfully to your email!');
        setShowOTPSection(true);
        setTimer(300);
        setIsTimerActive(true);
        setOtpValues(['', '', '', '']);
      } else {
        setMessage(data.message || 'Failed to send OTP. Please try again.');
        setShowOTPSection(false);
      }

      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      console.error('Error sending OTP:', error);
      setMessage('Something went wrong. Please try again.');
      setShowOTPSection(false);
      setTimeout(() => setMessage(''), 3000);
    } finally {
      setIsSendingOTP(false);
    }
  };

  const handleOTPChange = (index, value) => {
    if (value.length > 1) {
      const pastedValue = value.replace(/\D/g, '');
      const newOtpValues = [...otpValues];
      
      for (let i = 0; i < Math.min(pastedValue.length, 4); i++) {
        if (index + i < 4) {
          newOtpValues[index + i] = pastedValue[i];
        }
      }
      
      setOtpValues(newOtpValues);
      
      const nextIndex = Math.min(index + pastedValue.length, 3);
      const nextInput = document.querySelectorAll('.otp-input')[nextIndex];
      if (nextInput) nextInput.focus();
      
      return;
    }

    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtpValues = [...otpValues];
      newOtpValues[index] = value;
      setOtpValues(newOtpValues);

      if (value && index < 3) {
        const nextInput = document.querySelectorAll('.otp-input')[index + 1];
        if (nextInput) nextInput.focus();
      }
    }
  };

  const handleOTPKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otpValues[index] && index > 0) {
      const prevInput = document.querySelectorAll('.otp-input')[index - 1];
      if (prevInput) {
        prevInput.focus();
        const newOtpValues = [...otpValues];
        newOtpValues[index - 1] = '';
        setOtpValues(newOtpValues);
      }
    }
    
    if (e.key === 'ArrowLeft' && index > 0) {
      const prevInput = document.querySelectorAll('.otp-input')[index - 1];
      if (prevInput) prevInput.focus();
    }
    
    if (e.key === 'ArrowRight' && index < 3) {
      const nextInput = document.querySelectorAll('.otp-input')[index + 1];
      if (nextInput) nextInput.focus();
    }
  };

  const clearOTPInputs = () => {
    setOtpValues(['', '', '', '']);
    const firstInput = document.querySelectorAll('.otp-input')[0];
    if (firstInput) firstInput.focus();
  };

  const downloadBrochure = async (courseData) => {
    try {
      setIsDownloading(true);
      
      await fetch(import.meta.env.VITE_BACKEND_BROCHURE_DOWNLOAD, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.fullName.trim(),
          email: formData.email.trim(),
          phone: formData.phone,
          course: courseData.name
        }),
      });

      const brochureUrl = courseData.brochureUrl || '#';
      
      if (brochureUrl !== '#') {
        const link = document.createElement('a');
        link.href = brochureUrl;
        link.download = `${courseData.name}_Brochure.pdf`;
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        const dummyContent = `Course: ${courseData.name}\nDetails: ${courseData.description}\nContact: ${formData.email}`;
        const blob = new Blob([dummyContent], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${courseData.name}_Brochure.txt`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      }

      setMessage('Brochure downloaded successfully! Check your downloads folder.');
    } catch (error) {
      console.error('Error downloading brochure:', error);
      setMessage('Brochure download initiated. Please check your downloads.');
    } finally {
      setIsDownloading(false);
    }
  };

  const verifyOTP = async () => {
    const enteredOTP = otpValues.join('');
    
    if (enteredOTP.length !== 4) {
      setMessage('Please enter complete 4-digit OTP');
      setTimeout(() => setMessage(''), 3000);
      return;
    }

    if (!/^\d{4}$/.test(enteredOTP)) {
      setMessage('OTP must contain only digits');
      setTimeout(() => setMessage(''), 3000);
      return;
    }

    try {
      setIsDownloading(true);
      const response = await fetch(import.meta.env.VITE_BACKEND_VERIFY_OTP, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email.trim(),
          name: formData.fullName.trim(),
          number: formData.phone,
          age: '25',
          enteredOtp: enteredOTP
        }),
      });

      const data = await response.json();

      if (data.success) {
        setMessage('OTP verified successfully! Downloading brochure...');
        setIsTimerActive(false);
        
        await downloadBrochure(course);
        
        setTimeout(() => {
          resetForm();
          navigate('/');
        }, 3000);
        
      } else {
        setMessage(data.message || 'Invalid OTP. Please try again.');
        setTimeout(() => setMessage(''), 3000);
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      setMessage('Something went wrong. Please try again.');
      setTimeout(() => setMessage(''), 3000);
    } finally {
      setIsDownloading(false);
    }
  };

  const resendOTP = async () => {
    if (timer > 240) return;

    try {
      setIsSendingOTP(true);
      const response = await fetch(import.meta.env.VITE_BACKEND_GET_OTP, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.fullName.trim(),
          email: formData.email.trim(),
          phone: formData.phone,
          age: '25'
        }),
      });

      const data = await response.json();

      if (data.success) {
        setMessage('OTP resent successfully!');
        setTimer(300);
        setIsTimerActive(true);
        setOtpValues(['', '', '', '']);
      } else {
        setMessage('Failed to resend OTP. Please try again.');
      }

      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      console.error('Error resending OTP:', error);
      setMessage('Something went wrong. Please try again.');
      setTimeout(() => setMessage(''), 3000);
    } finally {
      setIsSendingOTP(false);
    }
  };

  const handleBackToForm = () => {
    setShowOTPSection(false);
    setIsTimerActive(false);
    setTimer(0);
    setOtpValues(['', '', '', '']);
    setMessage('');
  };

  if (!course) {
    return null;
  }

  return (
    <div className="course-form-container">
      <div className="course-form-wrapper">
        <div className="course-info-section">
          <img 
            src={course.courseImageUrl || 'course.png'} 
            alt={course.name}
            className="course-info-image"
          />
          <h1 className="course-info-title">{course.name}</h1>
          <p className="course-info-description">
            {course.description || course.category?.name || 'Course'}
          </p>
          {course.trainer?.name && (
            <p className="course-info-trainer">
              Instructor: {course.trainer.name}
            </p>
          )}
        </div>

        <div className="form-section">
          <h2 className="form-title">
            Download <span className="form-title-highlight">Free</span> Course Brochure
          </h2>
          
          {message && (
            <div className={`form-message ${
              message.includes('success') || message.includes('sent') || 
              message.includes('verified') || message.includes('downloaded') 
                ? 'form-message-success' 
                : 'form-message-error'
            }`}>
              {message}
            </div>
          )}
          
          {!showOTPSection ? (
            <div className="form-inputs">
              <div className="input-group">
                <input 
                  type="text" 
                  name="fullName"
                  placeholder="Full Name" 
                  className={`form-input ${errors.fullName && touched.fullName ? 'input-error' : ''}`}
                  value={formData.fullName}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  required
                />
                {errors.fullName && touched.fullName && (
                  <span className="error-message">{errors.fullName}</span>
                )}
              </div>

              <div className="input-group">
                <input 
                  type="email" 
                  name="email"
                  placeholder="Email" 
                  className={`form-input ${errors.email && touched.email ? 'input-error' : ''}`}
                  value={formData.email}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  required
                />
                {errors.email && touched.email && (
                  <span className="error-message">{errors.email}</span>
                )}
              </div>

              <div className="input-group">
                <div className="phone-input-container">
                  <span className="phone-country-code">+91</span>
                  <input 
                    type="tel" 
                    name="phone"
                    placeholder="Phone" 
                    className={`phone-input ${errors.phone && touched.phone ? 'input-error' : ''}`}
                    value={formData.phone}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    maxLength="10"
                    required
                  />
                </div>
                {errors.phone && touched.phone && (
                  <span className="error-message">{errors.phone}</span>
                )}
              </div>

              <button 
                type="button"
                onClick={sendOTP} 
                className="form-submit-btn"
                disabled={isSendingOTP}
              >
                {isSendingOTP ? 'Sending OTP...' : 'Send OTP & Get Brochure'}
                <span className="btn-arrow">→</span>
              </button>
            </div>
          ) : (
            <div className="otp-section">
              <div className="otp-info">
                <h3>Verify Your Email</h3>
                <p>We've sent a 4-digit OTP to <strong>{formData.email}</strong></p>
                <p>After verification, your <strong>{course.name}</strong> brochure will be downloaded automatically.</p>
                {isTimerActive && (
                  <p>Time remaining: <strong>{formatTime(timer)}</strong></p>
                )}
              </div>
              
              <div className="otp-input-container">
                {otpValues.map((value, index) => (
                  <input
                    key={index}
                    type="text"
                    className="otp-input"
                    maxLength="1"
                    value={value}
                    onChange={(e) => handleOTPChange(index, e.target.value)}
                    onKeyDown={(e) => handleOTPKeyDown(index, e)}
                    onPaste={(e) => {
                      e.preventDefault();
                      const paste = e.clipboardData.getData('text');
                      handleOTPChange(index, paste);
                    }}
                    onKeyPress={(e) => {
                      if (!/[0-9]/.test(e.key) && e.key !== 'Backspace') {
                        e.preventDefault();
                      }
                    }}
                  />
                ))}
              </div>
              
              <div className="otp-clear-container">
                <button 
                  type="button"
                  onClick={clearOTPInputs}
                  className="otp-clear-btn"
                >
                  Clear All
                </button>
              </div>
              
              <div className="otp-actions">
                <button 
                  type="button" 
                  onClick={verifyOTP}
                  className="form-submit-btn"
                  disabled={isDownloading}
                >
                  {isDownloading ? 'Downloading...' : 'Verify OTP & Download Brochure'}
                </button>
                
                <div className="otp-links">
                  <button 
                    type="button" 
                    onClick={resendOTP}
                    disabled={timer > 240 || isSendingOTP}
                    className="otp-link-btn"
                  >
                    {isSendingOTP ? 'Sending...' : timer > 240 ? `Resend in ${formatTime(timer - 240)}` : 'Resend OTP'}
                  </button>
                  
                  <button 
                    type="button" 
                    onClick={handleBackToForm}
                    className="otp-link-btn"
                  >
                    Back to Form
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseForm;