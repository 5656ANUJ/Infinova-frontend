// import React, { useState } from "react";

// export default function EduventuresUniversitiesContact() {
//   const [formData, setFormData] = useState({
//     instituteName: "",
//     facultyName: "",
//     email: "",
//     phone: "",
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleInputChange = (e) => {
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
//       const scriptURL = ""; // same as booking form

//       await fetch(scriptURL, {
//         method: "POST",
//         mode: "no-cors",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           ...formData,
//           sheetName: "EduventuresUniversitiesContact", // 👈 target sheet name
//         }),
//       });

//       alert("✅ Form submitted successfully!");

//       // Reset form
//       setFormData({
//         instituteName: "",
//         facultyName: "",
//         email: "",
//         phone: "",
//       });
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       alert("❌ Error submitting the form. Please try again.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="EduventuresUniversitiesContact w-full flex flex-col items-center bg-white">
//       {/* Stats Section */}
//       <div className="EduventuresUniversitiesContactStats flex flex-col md:flex-row justify-center items-center">
//         <div className="EduventuresUniversitiesContactStatBox bg-blue-600 text-white font-bold rounded-2xl shadow-lg flex flex-col justify-center items-center">
//           <p className="text-3xl">100+ College</p>
//         </div>
//         <div className="EduventuresUniversitiesContactStatBox bg-blue-600 text-white font-bold rounded-2xl shadow-lg flex flex-col justify-center items-center">
//           <p className="text-3xl">15,000+ Trained</p>
//         </div>
//         <div className="EduventuresUniversitiesContactStatBox bg-blue-600 text-white font-bold rounded-2xl shadow-lg flex flex-col justify-center items-center">
//           <p className="text-3xl">200+ Placement</p>
//         </div>
//       </div>

//       {/* Contact Section */}
//       <form
//         onSubmit={handleSubmit}
//         className="EduventuresUniversitiesContactBox bg-blue-100 rounded-2xl shadow-md flex flex-col md:flex-row items-center justify-between w-full max-w-6xl"
//       >
//         {/* Left: Heading */}
//         <div className="EduventuresUniversitiesContactLeft md:w-1/2 w-full font-extrabold">
//           <h2 className="EduventuresUniversitiesContactHeading text-4xl md:text-5xl leading-tight">
//             Get In <span className="text-blue-600">Touch</span> <br />
//             with <span className="text-black">Our Team</span>
//           </h2>
//         </div>

//         {/* Right: Form */}
//         <div className="EduventuresUniversitiesContactRight md:w-1/2 w-full flex flex-col">
//           <input
//             type="text"
//             name="instituteName"
//             placeholder="Institute Name"
//             value={formData.instituteName}
//             onChange={handleInputChange}
//             className="EduventuresUniversitiesContactInput rounded-full bg-white"
//             required
//           />
//           <input
//             type="text"
//             name="facultyName"
//             placeholder="Faculty Name"
//             value={formData.facultyName}
//             onChange={handleInputChange}
//             className="EduventuresUniversitiesContactInput rounded-full bg-white"
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleInputChange}
//             className="EduventuresUniversitiesContactInput rounded-full bg-white"
//             required
//           />
//           <div className="EduventuresUniversitiesContactPhone flex">
//             <input
//               type="tel"
//               name="phone"
//               placeholder="Phone"
//               value={formData.phone}
//               onChange={handleInputChange}
//               className="EduventuresUniversitiesContactInput flex-1 rounded-full bg-white"
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={isSubmitting}
//             className={`EduventuresUniversitiesContactButton bg-[#0056D2] text-white rounded-md font-semibold shadow-md ${
//               isSubmitting ? "opacity-50 cursor-not-allowed" : ""
//             }`}
//           >
//             {isSubmitting ? "Submitting..." : "Contact Us"}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }
import React, { useState } from "react";

export default function EduventuresUniversitiesContact() {
  const [formData, setFormData] = useState({
    instituteName: "",
    facultyName: "",
    email: "",
    phone: "",
  });

  // 1. State to hold validation errors
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for the current field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({...prev, [name]: null}));
    }
  };
  
  // 2. Validation logic
  const validateForm = () => {
    const newErrors = {};
    if (!formData.instituteName.trim()) {
      newErrors.instituteName = "Institute name is required.";
    }
    if (!formData.facultyName.trim()) {
      newErrors.facultyName = "Faculty name is required.";
    } else if (formData.facultyName.trim().split(/\s+/).length < 2) {
      newErrors.facultyName = "Please enter the full name.";
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
    
    // 3. Run validation before submitting
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return; // Stop submission if there are errors
    }
    
    setErrors({}); // Clear errors before submitting
    setIsSubmitting(true);

    try {
      const scriptURL = import.meta.env.VITE_GOOGLE_SHEET_APP_URL; // same as booking form

      await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          sheetName: "EduventuresUniversitiesContact",
        }),
      });

      alert("✅ Form submitted successfully!");

      // Reset form
      setFormData({
        instituteName: "",
        facultyName: "",
        email: "",
        phone: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("❌ Error submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Inline style for error messages
  const errorStyle = {
    color: 'red',
    fontSize: '0.875rem',
    marginTop: '0.25rem',
    textAlign: 'left',
    // Adding padding to align with your inputs
    paddingLeft: '1rem', 
  };

  return (
    <div className="EduventuresUniversitiesContact w-full flex flex-col items-center bg-white">
      {/* Stats Section */}
      <div className="EduventuresUniversitiesContactStats flex flex-col md:flex-row justify-center items-center">
        <div className="EduventuresUniversitiesContactStatBox bg-blue-600 text-white font-bold rounded-2xl shadow-lg flex flex-col justify-center items-center">
          <p className="text-3xl">100+ College</p>
        </div>
        <div className="EduventuresUniversitiesContactStatBox bg-blue-600 text-white font-bold rounded-2xl shadow-lg flex flex-col justify-center items-center">
          <p className="text-3xl">15,000+ Trained</p>
        </div>
        <div className="EduventuresUniversitiesContactStatBox bg-blue-600 text-white font-bold rounded-2xl shadow-lg flex flex-col justify-center items-center">
          <p className="text-3xl">200+ Placement</p>
        </div>
      </div>

      {/* Contact Section */}
      <form
        onSubmit={handleSubmit}
        noValidate // Prevents default browser validation
        className="EduventuresUniversitiesContactBox bg-blue-100 rounded-2xl shadow-md flex flex-col md:flex-row items-center justify-between w-full max-w-6xl"
      >
        {/* Left: Heading */}
        <div className="EduventuresUniversitiesContactLeft md:w-1/2 w-full font-extrabold">
          <h2 className="EduventuresUniversitiesContactHeading text-4xl md:text-5xl leading-tight">
            Get In <span className="text-blue-600">Touch</span> <br />
            with <span className="text-black">Our Team</span>
          </h2>
        </div>

        {/* Right: Form */}
        <div className="EduventuresUniversitiesContactRight md:w-1/2 w-full flex flex-col">
          <input
            type="text"
            name="instituteName"
            placeholder="Institute Name"
            value={formData.instituteName}
            onChange={handleInputChange}
            className="EduventuresUniversitiesContactInput rounded-full bg-white"
          />
          {errors.instituteName && (<p style={errorStyle}>{errors.instituteName}</p>)}
          <input
            type="text"
            name="facultyName"
            placeholder="Faculty Name"
            value={formData.facultyName}
            onChange={handleInputChange}
            className="EduventuresUniversitiesContactInput rounded-full bg-white"
          />
          {errors.facultyName && (<p style={errorStyle}>{errors.facultyName}</p>)}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className="EduventuresUniversitiesContactInput rounded-full bg-white"
          />
          {errors.email && <p style={errorStyle}>{errors.email}</p>}
          <div className="EduventuresUniversitiesContactPhone flex">
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="EduventuresUniversitiesContactInput flex-1 rounded-full bg-white"
            />
          </div>
          {errors.phone && <p style={errorStyle}>{errors.phone}</p>}

          <button
            type="submit"
            disabled={isSubmitting}
            className={`EduventuresUniversitiesContactButton bg-[#0056D2] text-white rounded-md font-semibold shadow-md ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Submitting..." : "Contact Us"}
          </button>
        </div>
      </form>
    </div>
  );
}