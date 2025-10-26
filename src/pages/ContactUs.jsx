// import React, { useState } from "react";
// import { Mail, Phone, MapPin } from "lucide-react";

// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       const scriptURL = ""; // same as other forms

//       await fetch(scriptURL, {
//         method: "POST",
//         mode: "no-cors",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           ...formData,
//           sheetName: "ContactUsForm", // 👈 New sheet for this form
//         }),
//       });

//       alert("✅ Message sent successfully!");
//       setFormData({ name: "", email: "", message: "" });
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       alert("❌ Something went wrong. Please try again.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="contactus-page-container w-[100vw]">
//       <style>
//         {`
//           .contactus-message {
//             padding-bottom: 20px;
//           }
//         `}
//       </style>

//       {/* Page Heading */}
//       <h1 className="contactus-heading text-gray-900 font-bold">
//         Get in Touch With Us
//       </h1>

//       <div className="contactus-content">
//         {/* Contact Form */}
//         <div className="contactus-form-card bg-white shadow-xl rounded-2xl transition-transform hover:scale-105">
//           <h2 className="contactus-message text-gray-800 font-semibold">
//             Send Us a Message
//           </h2>
//           <form className="contactus-form" onSubmit={handleSubmit}>
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="contactus-input border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//             />

//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="contactus-input border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//             />

//             <textarea
//               name="message"
//               placeholder="Your Message"
//               rows="5"
//               value={formData.message}
//               onChange={handleChange}
//               required
//               className="contactus-textarea border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//             ></textarea>

//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className={`contactus-button bg-blue-600 text-white font-medium hover:bg-blue-700 transition ${
//                 isSubmitting ? "opacity-50 cursor-not-allowed" : ""
//               }`}
//             >
//               {isSubmitting ? "Sending..." : "Send Message"}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;
import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // 1. State to hold validation errors
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for the current field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  // 2. Validation logic
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Full name is required.";
    } else if (formData.name.trim().split(/\s+/).length < 2) {
      newErrors.name = "Please enter both first and last name.";
    }
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long.";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // 3. Run validation before submitting
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return; // Stop submission if there are errors
    }
    
    setErrors({}); // Clear errors before submission
    setIsSubmitting(true);

    try {
      const scriptURL = import.meta.env.VITE_GOOGLE_SHEET_APP_URL; // same as other forms

      await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          sheetName: "ContactUsForm",
        }),
      });

      alert("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("❌ Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // 4. Inline style for error messages
  const errorStyle = {
    color: 'red',
    fontSize: '0.875rem',
    marginTop: '0.25rem',
    textAlign: 'left',
  };

  return (
    <div className="contactus-page-container w-[100vw]">
      <style>
        {`
          .contactus-message {
            padding-bottom: 20px;
          }
        `}
      </style>

      {/* Page Heading */}
      <h1 className="contactus-heading text-gray-900 font-bold">
        Get in Touch With Us
      </h1>

      <div className="contactus-content">
        {/* Contact Form */}
        <div className="contactus-form-card bg-white shadow-xl rounded-2xl transition-transform hover:scale-105 flex flex-col gap-4">
          <h2 className="contactus-message text-gray-800 font-semibold">
            Send Us a Message
          </h2>
          <form className="contactus-form" onSubmit={handleSubmit} noValidate>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="contactus-input border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            {/* 5. Display error message */}
            {errors.name && <p style={errorStyle}>{errors.name}</p>}

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="contactus-input border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            {errors.email && <p style={errorStyle}>{errors.email}</p>}

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="contactus-textarea border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            ></textarea>
            {errors.message && <p style={errorStyle}>{errors.message}</p>}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`contactus-button bg-blue-600 text-white font-medium hover:bg-blue-700 transition ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;