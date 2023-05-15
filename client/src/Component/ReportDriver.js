import React, { useEffect, useState } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";
import tourgenieImage from '../images/tourgenie.png';
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
    const pageWidth = doc.internal.pageSize.width;
    const pageHeight = doc.internal.pageSize.height;
    doc.setLineWidth(1);
    doc.rect(20, 5, 120, 150);
    doc.rect(19, 6, 119, 149); 
    doc.setFontSize(16);
    const logo = tourgenieImage; 
    doc.text("Driver ID Card", 60, 20);
    doc.setFontSize(12);
   
    doc.addImage(logo, 'png', 10, 10, 30, 30);
    doc.addImage(driverRepo.image, "JPEG", 60, 40, 50, 50); // add the image
    doc.text(`Employee ID: ${driverRepo.empid}`, 40, 100);
    doc.text(`Name: ${driverRepo.name}`, 40, 110);
    doc.text(`profession: Driver`, 40, 120);
    doc.text(`Gender: ${driverRepo.gender}`, 40, 130); // update y position to avoid overlapping text
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