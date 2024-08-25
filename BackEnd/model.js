const mongoose = require("mongoose");

// User Schema
const UserSchema = new mongoose.Schema({
  id: String,
  name: String,
  type:String,
  email: String,
  phone: String,
  
  companyName: String,
  eventName: String,
  specialization: String,
  startDate: Date, // Change to Date
  endDate: Date,   // Change to Date
  time: String,
  picture: String,
});

const UserModel = mongoose.model("User", UserSchema, "users");

//attendee

const attendeeSchema = new mongoose.Schema({
  name: String,
  username: String,
  email: String,
  phone: String,
  tShirtSize: String,
  role: String,
  food: String,
  occupation: String,
  gender: String,
  // paymentReceipt: String // Uncomment if used
});

const AttendeeModel = mongoose.model('Attendee', attendeeSchema);
module.exports = { UserModel, AttendeeModel };