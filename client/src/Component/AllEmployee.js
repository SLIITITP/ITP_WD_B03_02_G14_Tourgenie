import React from 'react';
import axios from "axios";
import {useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import Avatar from '@mui/material/Avatar';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import jsPDF from "jspdf";
import "jspdf-autotable";
import tourgenieImage from '../images/tourgenie.png';
import './AllEmployee.css';



function AllEmployee(){
    const [employees, setemployees] = useState([]); 
    const [selectedemployees, setSelectedEmployee] = useState(null);
    const [showForm, setShowForm] = useState(false); 

    useEffect(() => {
      async function fetchData() {
        const response = await axios.get("http://localhost:8070/Employee/"); 
        setemployees(response.data);
      }
      console.log()
      fetchData();
    }, []);



    function handleDelete(employeId) {
        // Send a DELETE request to the server to delete the Employee with the given ID
        axios.delete(`http://localhost:8070/Employee/delete/${employeId}`)
          .then(() => {
            // Remove the deleted Employee from the array of employees
            setemployees(employees.filter(Employee => Employee._id !== employeId));
          })
          .catch(err => console.error(err));
      }

      function handleUpdate(Employee) {
        setSelectedEmployee(Employee);
        setShowForm(true);
      }
    
      function handleCloseForm() {
        setSelectedEmployee(null);
        setShowForm(false);
      }


      const generatePdf = () => {
        const doc = new jsPDF();
        const logo = tourgenieImage; // replace with the URL of your company logo
        const address = '123/A Pittugala, Malabe Srilanka'; // replace with your company address
        const contact = '+94 71 300-396';
        const email = 'tourgenie@gmail.com';
        // replace with your company contact number
      
        // Add logo, address, and contact to the PDF
        doc.addImage(logo, 'png', 10, 10, 30, 30);
        doc.setFontSize(10);
        doc.text(address, 150, 15);
        doc.text(contact, 150, 20);
        doc.text(email, 150, 25);
      
        doc.setFontSize(16);
        doc.text("Employee Report", 80, 50);
        doc.setFontSize(12);
        const date = new Date().toLocaleDateString(); // get the current date
        doc.text(`Date: ${date}`, 150, 25);
      
        // Define table columns and rows
        const columns = ["Employee ID", "Name", "Contact Number", "Profession", "Salery"];
        const rows = employees.map((employee) => [
          employee.username,
          employee.name,
          employee.mobile_number,
          employee.etype,
          employee.esalery,
        ]);
      
        // Create the table
        doc.autoTable({
          startY: 60,
          headStyles: { fillColor: [0, 128, 255] },
          head: [columns],
          body: rows,
        });
      
        // Save the PDF file
        doc.save("Report.pdf");
      };
      
      



    return(
        <div className="container">
            <h1>All Employee</h1>
            <Link to={`/add/`} className='btn btn-success my-3'><PersonAddIcon/>add</Link>


            <table className='employees'>
  <thead class="tab" style={{backgroundColor:'#5091ca'}}>

  <tr>
          
          <th>Employee Id</th>
          <th>email</th>
          <th>name</th>
          <th>Contact Number</th>
          <th>NIC</th>
          <th>Gender</th>
          <th>Employee </th>
          <th>Photo</th>
          <th class ="w-100"></th>
          


        </tr>
  </thead>
  <tbody>
  {employees.map((Employee, index) => (
          <tr key={index}>
            <td>{Employee.username}</td>
            <td>{Employee.email}</td>
            <td>{Employee.name}</td>
            <td>{Employee.mobile_number}</td>
            <td>{Employee.NIC}</td>
            <td>{Employee.gender}</td>
            <td>{Employee.etype}</td>
            

           <td ><Avatar alt="Remy Sharp" src={Employee.image} sx={{ width: 60, height: 60 }}/></td> 

            


            <td>

            <Link to={`/edit employee/${Employee._id}`} className='btn btn-success my-3'><ModeEditIcon/>edit</Link> 
             


                  <Link to={`/report employee/${Employee._id}`} className='btn btn-success my-3'><VisibilityIcon/>View</Link>
                  <button onClick={() => handleDelete(Employee._id)}class="btn btn-success" ><DeleteIcon/>Delete</button>

                  



                </td>
          </tr>
        ))}
  </tbody>
</table>

<button className="btn btn-primary" onClick={generatePdf}>Generate PDF</button>


    

        </div>
    )

}
export default AllEmployee;