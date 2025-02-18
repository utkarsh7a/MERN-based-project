require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Connect to local MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/studentDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Define Student Schema
const StudentSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    course: String
});

const Student = mongoose.model("Student", StudentSchema);

// API to Add a Student
app.post("/add-student", async (req, res) => {
    try {
        const { name, email, age, course } = req.body;
        const newStudent = new Student({ name, email, age, course });
        await newStudent.save();
        res.status(201).json({ message: "Student Added Successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error adding student" });
    }
});

// API to Get All Students
app.get("/students", async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ error: "Error fetching students" });
    }
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
