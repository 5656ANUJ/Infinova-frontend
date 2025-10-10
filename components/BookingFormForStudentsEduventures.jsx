import { useState } from "react";
import "../global.css";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    program: "",
    fullName: "",
    email: "",
    phone: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const scriptURL =
        ""; // Script URL removed for privacy

      await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          sheetName: "Students Booking Form", // 👈 Change this per form
        }),
      });

      alert("✅ Booking submitted successfully!");

      setFormData({
        program: "",
        fullName: "",
        email: "",
        phone: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("❌ Error submitting the booking form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="booking-container">
      <div className="booking-card EduventuresUniversitiesContactBox bg-blue-100 rounded-2xl shadow-md flex flex-col md:flex-row items-center justify-between w-full max-w-5xl">
        <h1 className="booking-title">
          Book <span className="text-blue">Free</span> LIVE Class Today !
        </h1>

        <div className="form-container font-family:montserrat">
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

          <button
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitting}
            className={`submit-button ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <span>
              {isSubmitting ? "Submitting..." : "Book Free LIVE Class Now!"}
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
        </div>
      </div>
    </div>
  );
}
