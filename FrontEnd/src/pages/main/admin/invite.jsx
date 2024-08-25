

// /* eslint-disable no-mixed-spaces-and-tabs */
// /* eslint-disable no-unused-vars */
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import './assets/css/s.css';
// import Nav from './nav';
// import Foot from './foot';

// function Invite() {
//   const [formData, setFormData] = useState({
//     email: '',
//     phone: '',
//     companyName: '',
//     eventName: '',
//     specialization: '',
//     startDate: '',
//     endDate: '',
//     time: ''
//   });
//   const [errors, setErrors] = useState({});
//   const [account, setAccount] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!localStorage.getItem("faceAuth")) {
//       navigate("/login");
//     }

//     const { account } = JSON.parse(localStorage.getItem("faceAuth"));
//     setAccount(account);
//   }, [navigate]);

//   if (!account) {
//     return null;
//   }

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     const { email, phone, companyName, eventName, specialization, startDate, endDate, time } = formData;

//     if (!email || !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
//       newErrors.email = 'Please enter a valid email address.';
//     }

//     if (!phone || !/^\d{10}$/.test(phone)) {
//       newErrors.phone = 'Please enter a valid 10-digit phone number.';
//     }

//     if (!companyName) {
//       newErrors.companyName = 'Company name is required.';
//     }

//     if (!eventName) {
//       newErrors.eventName = 'Event name is required.';
//     }

//     if (!specialization) {
//       newErrors.specialization = 'Specialization is required.';
//     }

//     if (!startDate) {
//       newErrors.startDate = 'Start date is required.';
//     } else if (new Date(startDate) < new Date()) {
//       newErrors.startDate = 'Start date cannot be in the past.';
//     }

//     if (!endDate) {
//       newErrors.endDate = 'End date is required.';
//     } else if (new Date(endDate) < new Date(startDate)) {
//       newErrors.endDate = 'End date cannot be before start date.';
//     }

//     if (!time) {
//       newErrors.time = 'Time is required.';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) {
//       return;
//     }

//     try {
//       const response = await axios.post("http://localhost:5000/update", {
//         id: account._id, // Ensure this matches the logged-in user's ID
//         ...formData
//       });
//       console.log("User updated successfully:", response.data);
//       navigate("/", { replace: true });
//       // Optionally navigate to another page or show a success message
//     } catch (error) {
//       console.error("Error updating user:", error);
//       // Optionally set an error message to display to the user
//     }
//   };

//   return (
//     <div>
//       <Nav />
//       <div className="main-content">
//         <form className="form1" onSubmit={handleSubmit}>
//           <h2>User Information</h2>
//           <div className="form-group">
//             <label htmlFor="email">Email address:</label>
//             <div className="relative">
//               <input 
//                 className={`form-control ${errors.email ? 'error' : ''}`} 
//                 type="email" 
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Type your email address..."
//                 required
//               />
//               {errors.email && <span className="error-text">{errors.email}</span>}
//             </div>
//           </div>
//           <div className="form-group">
//             <label htmlFor="phone">Contact Number:</label>
//             <div className="relative">
//               <input 
//                 className={`form-control ${errors.phone ? 'error' : ''}`} 
//                 type="text" 
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 maxLength="10"
//                 placeholder="Type your Mobile Number..."
//                 onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')}
//                 required
//               />
//               {errors.phone && <span className="error-text">{errors.phone}</span>}
//             </div>
//           </div>
//           <div className="form-group">
//             <label htmlFor="companyName">Company Name:</label>
//             <div className="relative">
//               <input 
//                 className={`form-control ${errors.companyName ? 'error' : ''}`} 
//                 type="text" 
//                 name="companyName"
//                 value={formData.companyName}
//                 onChange={handleChange}
//                 placeholder="Mention your company name..."
//                 required
//               />
//               {errors.companyName && <span className="error-text">{errors.companyName}</span>}
//             </div>
//           </div>
//           <div className="form-group">
//             <label htmlFor="eventName">Event Name:</label>
//             <div className="relative">
//               <input 
//                 className={`form-control ${errors.eventName ? 'error' : ''}`} 
//                 type="text" 
//                 name="eventName"
//                 value={formData.eventName}
//                 onChange={handleChange}
//                 placeholder="Type your event name..."
//                 required
//               />
//               {errors.eventName && <span className="error-text">{errors.eventName}</span>}
//             </div>  
//           </div>
//           <div className="form-group">
//             <label htmlFor="specialization">Specialization:</label>
//             <div className="relative">
//               <input 
//                 className={`form-control ${errors.specialization ? 'error' : ''}`} 
//                 type="text" 
//                 name="specialization"
//                 value={formData.specialization}
//                 onChange={handleChange}
//                 placeholder="Type your specialization..."
//                 required
//               />
//               {errors.specialization && <span className="error-text">{errors.specialization}</span>}
//             </div>
//           </div>
//           <div className="form-group">
//             <label htmlFor="startDate">Start Date:</label>
//             <div className="relative">
//               <input 
//                 className={`form-control ${errors.startDate ? 'error' : ''}`} 
//                 type="date" 
//                 name="startDate"
//                 value={formData.startDate}
//                 onChange={handleChange}
//                 required
//               />
//               {errors.startDate && <span className="error-text">{errors.startDate}</span>}
//             </div>
//           </div>
//           <div className="form-group">
//             <label htmlFor="endDate">End Date:</label>
//             <div className="relative">
//               <input 
//                 className={`form-control ${errors.endDate ? 'error' : ''}`} 
//                 type="date" 
//                 name="endDate"
//                 value={formData.endDate}
//                 onChange={handleChange}
//                 required
//               />
//               {errors.endDate && <span className="error-text">{errors.endDate}</span>}
//             </div>
//           </div>
//           <div className="form-group">
//             <label htmlFor="time">Time:</label>
//             <div className="relative">
//               <input 
//                 className={`form-control ${errors.time ? 'error' : ''}`} 
//                 type="time" 
//                 name="time"
//                 value={formData.time}
//                 onChange={handleChange}
//                 required
//               />
//               {errors.time && <span className="error-text">{errors.time}</span>}
//             </div>
//           </div>
//           <div className="tright">
//             <button className="movebtn movebtnsu" type="submit">
//               Update <i className="fa fa-fw fa-paper-plane"></i>
//             </button>
//           </div>
//         </form>
//       </div>
//       <Foot />
//     </div>
//   );
// }

// export default Invite;






// /* eslint-disable no-mixed-spaces-and-tabs */
// /* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './assets/css/s.css';
import Nav from './nav';
import Foot from './foot';

function Invite() {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    companyName: '',
    eventName: '',
    specialization: '',
    startDate: '',
    endDate: '',
    time: ''
  });
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("faceAuth")) {
      navigate("/login");
    }

    const { account } = JSON.parse(localStorage.getItem("faceAuth"));
    setAccount(account);
  }, [navigate]);

  if (!account) {
    return null;
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/update", {
        id: account._id, // Ensure this matches the logged-in user's ID
        ...formData
      });
      console.log("User updated successfully:", response.data);
      navigate("/", { replace: true });
      // Optionally navigate to another page or show a success message
    } catch (error) {
      console.error("Error updating user:", error);
      // Optionally set an error message to display to the user
    }
  };

  return (
    <div>
      <Nav />
      <div className="main-content">
        <form className="form1" onSubmit={handleSubmit}>
          <h2>User Information</h2>
          <div className="form-group">
            <label htmlFor="email">Email address:</label>
            <div className="relative">
              <input 
                className="form-control" 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Type your email address..."
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="phone">Contact Number:</label>
            <div className="relative">
              <input 
                className="form-control" 
                type="text" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                maxLength="10"
                placeholder="Type your Mobile Number..."
                onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="companyName">Company Name:</label>
            <div className="relative">
              <input 
                className="form-control" 
                type="text" 
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Mention your company name..."
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="eventName">Event Name:</label>
            <div className="relative">
              <input 
                className="form-control" 
                type="text" 
                name="eventName"
                value={formData.eventName}
                onChange={handleChange}
                placeholder="Type your event name..."
                required
              />
            </div>  
          </div>
          <div className="form-group">
            <label htmlFor="specialization">Specialization:</label>
            <div className="relative">
              <input 
                className="form-control" 
                type="text" 
                name="specialization"
                value={formData.specialization}
                onChange={handleChange}
                placeholder="Type your specialization..."
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="startDate">Start Date:</label>
            <div className="relative">
              <input 
                className="form-control" 
                type="date" 
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="endDate">End Date:</label>
            <div className="relative">
              <input 
                className="form-control" 
                type="date" 
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="time">Time:</label>
            <div className="relative">
              <input 
                className="form-control" 
                type="time" 
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="tright">
            <button className="movebtn movebtnsu" type="submit">
              Update <i className="fa fa-fw fa-paper-plane"></i>
            </button>
          </div>
        </form>
      </div>
      <Foot />
    </div>
  );
}

export default Invite;
