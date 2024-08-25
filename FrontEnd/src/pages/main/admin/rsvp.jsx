import React, { useState } from "react";
import axios from 'axios';
import QRCode from 'qrcode.react';
import './assets/css/r.css';
// import Nav from './nav';
// import Foot from './foot';

function Atform() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [qrData, setQrData] = useState(null);
  const [attendee, setAttendee] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const attendeeData = {
      name: formData.get('name'),
      username: formData.get('username'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      tShirtSize: formData.get('tShirtSize'),
      role: formData.get('role'),
      food: formData.get('food'),
      occupation: formData.get('occupation'),
      gender: formData.get('gender'),
    };

    // Validation checks
    if (!attendeeData.name || !attendeeData.username || !attendeeData.email || !attendeeData.phone || !attendeeData.occupation || !attendeeData.gender) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    if (!/^(.+)@(.+)$/.test(attendeeData.email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (isNaN(attendeeData.phone) || attendeeData.phone.length < 10) {
      setErrorMessage("Please enter a valid phone number.");
      return;
    }

    console.log('Form Data:', attendeeData);

    try {
      await axios.post("http://localhost:5000/attendeesregister", attendeeData);
      console.log("Uploaded successfully to MongoDB");
      setErrorMessage(null); // Clear the error message on successful upload
      
      // Convert the attendee data to a JSON string for the QR code
      const jsonData = JSON.stringify(attendeeData);
      setQrData(jsonData);
      setAttendee(attendeeData);
    } catch (error) {
      console.error("Error uploading data to MongoDB:", error);
      setErrorMessage("Error uploading data. Please try again.");
    }
  };

  return (
  


          <div className="container6 ">
            <div className="title">
              <p>Rsvp </p>
            </div>

            <form onSubmit={handleSubmit} >
              <div className="user_details">
                <div className="input_box">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" placeholder="Enter your name" required />
                </div>
                <div className="input_box">
                  <label htmlFor="username">Username</label>
                  <input type="text" id="username" name="username" placeholder="Enter your username" required />
                </div>
                <div className="input_box">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="Enter your email" required />
                </div>
                <div className="input_box">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" placeholder="Enter your number" pattern="[0-9]{10}" required />
                </div>
                <div className="input_box">
                  <div className="field-form year-section">
                    <select name="tShirtSize" id="tShirtSize">
                      <option value="">T-Shirt Size</option>
                      <option value="XXL">XXL</option>
                      <option value="XL">XL</option>
                      <option value="L">L</option>
                      <option value="M">M</option>
                      <option value="S">S</option>
                    </select>
                    <select name="role" id="role">
                      <option value="">Role</option>
                      <option value="Student">Student</option>
                      <option value="Speakers">Speakers</option>
                      <option value="Stackholders">Stackholders</option>
                      <option value="Volunteers">Volunteers</option>
                      <option value="OC Members">OC Members</option>
                      <option value="Other">Other</option>
                    </select>
                    <select name="food" id="food">
                      <option value="">Food</option>
                      <option value="Veg">Veg</option>
                      <option value="Non-Veg">Non-Veg</option>
                    </select>
                  </div>
                </div>
                <div className="input_box">
                  <label htmlFor="occupation">Occupation</label>
                  <input type="text" id="occupation" name="occupation" placeholder="Occupation" required />
                </div>
              </div>
              <div className="gender">
                <span className="gender_title">Gender</span>
                <input type="radio" name="gender" id="radio_1" value="Male" required />
                <input type="radio" name="gender" id="radio_2" value="Female" required />
                <input type="radio" name="gender" id="radio_3" value="Prefer not to say" required />

                <div className="category">
                  <label htmlFor="radio_1">
                    <span className="dot one"></span>
                    <span>Male</span>
                  </label>
                  <label htmlFor="radio_2">
                    <span className="dot two"></span>
                    <span>Female</span>
                  </label>
                  <label htmlFor="radio_3">
                    <span className="dot three"></span>
                    <span>Prefer not to say</span>
                  </label>
                </div>
              </div>

              <div className="input_box">
<label id ="idlabel" className="mdl-button mdl-js-button mdl-button--raised">
  <input type="file" id="files" name="files[]"  multiple />
    Payment Recipt
</label>
    
   <br></br>
   
    <div className="container3 im" >
      
        
    </div>
</div>
              <div className="reg_btn">
                <input type="submit" value="Register" />
              </div>
            </form>
<div className="Qr">
            {errorMessage && <p>{errorMessage}</p>}

            {/* Display QR code if qrData is available */}
            {qrData && (
              <div className="qr-code-container">
                <h2>Thank you for registering! We look forward to seeing you on the date</h2>
                <h3>Bring this QR Code to the Event</h3>
                <QRCode className="Qr" value={qrData} size={256} />
                <p>{attendee && `Attendee: ${attendee.name}`}</p>
              </div>
            )}
            </div>
          </div>
     


  );
}

export default Atform;




