import React, { useEffect, useState } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { useParams } from "react-router-dom";

function Report() {
  const { id } = useParams();
  const [editStudent, setEditStudent] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8070/Student/get/${id}`)
      .then((res) => setEditStudent(res.data))
      .catch((err) => console.log(err));
  }, []);

  const generatePdf = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Student ID Card", 50, 20);
    doc.setFontSize(12);
    doc.addImage(editStudent.image, "JPEG", 20, 40, 50, 50); // add the image
    doc.text(`Name: ${editStudent.name}`, 20, 100);
    doc.text(`Age: ${editStudent.age}`, 20, 120);
    doc.text(`Gender: ${editStudent.gender}`, 20, 140); // update y position to avoid overlapping text
    doc.save("id-card.pdf");
  };
  

  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">Student Report</h3>
        <div className="card-text">
        <strong>Image:</strong><img src={editStudent.image || ""}/>
          <p><strong>ID:</strong> {editStudent._id || ""}</p>
          <p><strong>Name:</strong> {editStudent.name || ""}</p>
          <p><strong>Age:</strong> {editStudent.age || ""}</p>
          <p><strong>Gender:</strong> {editStudent.gender || ""}</p>
        </div>
        <button className="btn btn-primary" onClick={generatePdf}>Generate PDF</button>
      </div>
    </div>
  );
}

export default Report;