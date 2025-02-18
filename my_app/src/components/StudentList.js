import React, { useEffect, useState } from "react";
import axios from "axios";

const StudentList = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/students")
            .then(response => setStudents(response.data))
            .catch(error => console.error("Error fetching students", error));
    }, []);

    return (
        <div>
            <h2>Student List</h2>
            <ul>
                {students.map((student, index) => (
                    <li key={index}><h6>The student data is:</h6>{student.name} - {student.email} - {student.age} - {student.course}</li>
                ))}
            </ul>
        </div>
    );
};

export default StudentList;
