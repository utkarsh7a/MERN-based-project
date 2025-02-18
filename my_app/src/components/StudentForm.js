import React, { useState } from "react";
import axios from "axios";

const StudentForm = () => {
    const [student, setStudent] = useState({
        name: "",
        email: "",
        age: "",
        course: ""
    });

    const handleChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/add-student", student);
            alert("Student added successfully!");
            setStudent({ name: "", email: "", age: "", course: "" });
        } catch (error) {
            console.error("Error adding student", error);
        }
    };

    return (
        <div>
            <h2>Add Student</h2>
            <form onSubmit={handleSubmit} style={{maxWidth:"400px" ,margin:"auto"}}>
                <input type="text" name="name" placeholder="Name" className="form-control" value={student.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" className="form-control" value={student.email} onChange={handleChange} required />
                <input type="number" name="age" placeholder="Age" className="form-control" value={student.age} onChange={handleChange} required />
                <input type="text" name="course" placeholder="Course" value={student.course} onChange={handleChange} required />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default StudentForm;
