const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { UserModel, AttendeeModel } = require("./model"); // Import models
const dotenv = require("dotenv");

dotenv.config({
  path: ".env", // Give .env file location
});

const port = process.env.PORT; // Use the PORT environment variable
const app = express();
app.use(express.json());
app.use(cors({
  origin: '*'
}));

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("MongoDB connected successfully");
})
.catch((err) => {
  console.error("MongoDB connection error:", err);
  process.exit(1); // Exit process on connection failure
});

// User Routes
app.post("/register", (req, res) => {
  UserModel.create(req.body)
    .then((e) => res.json(e))
    .catch((e) => res.json(e));
});


app.post('/update', async (req, res) => {
  const { id, email, phone, companyName, eventName, specialization, startDate, endDate, time } = req.body;

  if (!id) {
    return res.status(400).json({ error: 'ID is required' });
  }

  // Convert startDate and endDate to Date objects if they're strings
  const start = new Date(startDate);
  const end = new Date(endDate);

  try {
    const updatedUser = await UserModel.findByIdAndUpdate(
      id,
      { email, phone, companyName, eventName, specialization, startDate: start, endDate: end, time },
      { new: true } // Return the updated document
    );

    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});




app.get("/getUsers", async (req, res) => {
  try {
    const allData = await UserModel.find();
    res.json(allData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get("/getAdmins", async (req, res) => {
  try {
    const allData = await UserModel.find({ type: 'ADMIN' });
    res.json(allData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});




// Attendee Routes

app.post("/attendeesregister", async (req, res) => {
  try {
    const attendee = new AttendeeModel(req.body);
    await attendee.save();
    res.status(201).json(attendee);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


app.get("/attendees", async (req, res) => {
  try {
    const attendees = await AttendeeModel.find();
    res.json(attendees);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// app.get("/attendees/:id", async (req, res) => {
//   try {
//     const attendee = await AttendeeModel.findById(req.params.id);
//     if (attendee) {
//       res.json(attendee);
//     } else {
//       res.status(404).json({ message: "Attendee not found" });
//     }
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });


// app.put("/attendees/:id", async (req, res) => {
//   try {
//     const attendee = await AttendeeModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (attendee) {
//       res.json(attendee);
//     } else {
//       res.status(404).json({ message: "Attendee not found" });
//     }
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });


// app.delete("/attendees/:id", async (req, res) => {
//   try {
//     const attendee = await AttendeeModel.findByIdAndDelete(req.params.id);
//     if (attendee) {
//       res.json({ message: "Attendee deleted successfully" });
//     } else {
//       res.status(404).json({ message: "Attendee not found" });
//     }
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });




app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
