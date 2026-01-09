import { useState, forwardRef } from "react";
import "../global.css";

const BookingForm = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    program: "",
    fullName: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: null,
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.program) {
      newErrors.program = "Please select a program.";
    }
  
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    } else if (formData.fullName.trim().split(/\s+/).length < 2) {
      newErrors.fullName = "Please enter both first and last name.";
    }
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid.";
    }
    if (!formData.phone) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits.";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      const scriptURL = import.meta.env.VITE_GOOGLE_SHEET_APP_URL;

      await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          sheetName: "Students Booking Form",
        }),
      });

      alert("✅ Booking submitted successfully!");

      setFormData({ program: "", fullName: "", email: "", phone: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("❌ Error submitting the booking form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const errorStyle = {
    color: 'red',
    fontSize: '0.875rem',
    marginTop: '0.25rem',
    textAlign: 'left',
    paddingLeft: '1rem',
  };

  return (
    <div className="booking-container" ref={ref}>
      <div className="booking-card EduventuresUniversitiesContactBox bg-blue-100 rounded-2xl shadow-md flex flex-col md:flex-row items-center justify-between w-full max-w-5xl">
        <h1 className="booking-title">
          Book a <span className="text-blue">Free</span> LIVE Class Today!
        </h1>

        <div className="form-container font-family:montserrat">
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
            <div className="input-group">
              <select
                name="program"
                value={formData.program}
                onChange={handleInputChange}
                className="form-input"
                required
              >
                <option value="">Select the Program</option>
                <option value="Clinical Research">Clinical Research</option>
                <option value="Clinical Coding">Clinical Coding</option>
                <option value="Cyber Security">Cyber security</option>
              </select>
              {errors.program && <p style={errorStyle}>{errors.program}</p>}
            </div>

            <div className="input-group">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleInputChange}
                className="form-input"
                required
              />
              {errors.fullName && <p style={errorStyle}>{errors.fullName}</p>}
            </div>

            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="form-input"
                required
              />
              {errors.email && <p style={errorStyle}>{errors.email}</p>}
            </div>

            <div className="phone-group">
              <div className="country-code">+91</div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>
            {errors.phone && <p style={errorStyle}>{errors.phone}</p>}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`submit-button ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <span>
                {isSubmitting ? "Submitting..." : "Book a Free LIVE Class Now!"}
              </span>
              {!isSubmitting && (
                <svg
                  className="arrow-icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
});

BookingForm.displayName = 'BookingForm';

export default BookingForm;
