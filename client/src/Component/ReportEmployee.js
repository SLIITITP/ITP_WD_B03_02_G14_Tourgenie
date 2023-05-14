import React, { useEffect, useState } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { useParams } from "react-router-dom";

function ReportEmployee() {
  const { id } = useParams();
  const [employeeRepo, setEmployRepo] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8070/Employee/get/${id}`)
      .then((res) => setEmployRepo(res.data))
      .catch((err) => console.log(err));
  }, []);




  const generatePdf = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.width;
    const pageHeight = doc.internal.pageSize.height;
    doc.setLineWidth(1);
    doc.rect(20, 5, 120, 150); // add border
    doc.setFontSize(16);
    doc.text("Manager ID Card", 60, 20);
    doc.setFontSize(12);
    doc.addImage(employeeRepo.image, "JPEG", 60, 40, 50, 50); // add the image
    doc.text(`Employee ID: ${employeeRepo.username}`, 40, 100);
    doc.text(`Name: ${employeeRepo.name}`, 40, 110);
    doc.text(`profession: ${employeeRepo.etype}`, 40, 120);
    doc.text(`Gender: ${employeeRepo.gender}`, 40, 130); // update y position to avoid overlapping text
    doc.save("id-card.pdf");
  };
  
  

  return (
     
    <div  className="container" style={{textAlign:'center'}}>
      <div className="card-body">
        <h3 className="card-title">Employee Report</h3>
        <div className="card-text">
        <img src={employeeRepo.image || ""}/>
          <p><strong>Employee ID:</strong> {employeeRepo.username|| ""}</p>
          <p><strong>Name:</strong> {employeeRepo.name || ""}</p>
          <p><strong>profession:</strong> {employeeRepo.etype || ""}</p>
          <p><strong>Gender:</strong> {employeeRepo.gender || ""}</p>
        </div>
        <button className="btn btn-primary" onClick={generatePdf}>Generate PDF</button>
      </div>
    </div>
  );
}

export default ReportEmployee;