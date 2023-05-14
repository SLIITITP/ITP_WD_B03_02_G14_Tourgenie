import React, { useEffect, useState } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { useParams } from "react-router-dom"

function ReportDriver() {
  const { id } = useParams();
  const [driverRepo, setDriverRepo] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8070/Driver/get/${id}`)
      .then((res) => setDriverRepo(res.data))
      .catch((err) => console.log(err));
  }, []);

  const generatePdf = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Driver ID Card", 100, 20);
    doc.setFontSize(12);
    doc.addImage(driverRepo.image, "JPEG", 80, 40, 50, 50); // add the image
    doc.text(`Employee ID: ${driverRepo.empid}`, 80, 100);
    doc.text(`Name: ${driverRepo.name}`, 80, 120);
    doc.text(`profession: Driver`, 80, 140);
    doc.text(`Gender: ${driverRepo.gender}`, 80, 160); // update y position to avoid overlapping text
    doc.save("id-card.pdf");
  };
  

  return (

    <div  className="container" style={{textAlign:'center'}}>

  
      <div className="card-body">
        <h3 className="card-title">Employee Report</h3>
        <div className="card-text">
        <img src={driverRepo.image || ""}/>
          <p><strong>Employee ID:</strong> {driverRepo.empid|| ""}</p>
          <p><strong>Name:</strong> {driverRepo.name || ""}</p>
          <p><strong>profession:</strong> Driver</p>
          <p><strong>Gender:</strong> {driverRepo.gender || ""}</p>
        </div>
        <button className="btn btn-primary" onClick={generatePdf}>Generate PDF</button>
      </div>
    </div>
  );
}

export default ReportDriver;