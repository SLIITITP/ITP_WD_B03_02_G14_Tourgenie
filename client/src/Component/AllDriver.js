import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import Avatar from '@mui/material/Avatar';
import './AllDriver.css';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SearchIcon from '@mui/icons-material/Search';
import jsPDF from "jspdf";
import "jspdf-autotable";




function AllDriver() {
  const [drivers, setDrivers] = useState([]);
  const [selectedDriver, setSelectedDriver] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');


  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("http://localhost:8070/driver/");
      setDrivers(response.data);
    }
    fetchData();
  }, []);




  function handleDelete(driverId) {
    axios
      .delete(`http://localhost:8070/driver/delete/${driverId}`)
      .then(() => {
        setDrivers(drivers.filter((driver) => driver._id !== driverId));
      })
      .catch((err) => console.error(err));
  }






  function handleUpdate(driver) {
    setSelectedDriver(driver);
    setShowForm(true);
  }




  function handleCloseForm() {
    setSelectedDriver(null);
    setShowForm(false);
  }


//search drivers
  function searchDrivers(searchTerm) {
    return drivers.filter((driver) => {
      const name = driver.name.toLowerCase();
      const nic = driver.NIC ? driver.NIC.toLowerCase() : '';
      const licenseNumber = driver.license_number ? driver.license_number.toLowerCase() : '';
      const location = driver.location ? driver.location.toLowerCase() : '';
      const searchTermLowerCase = searchTerm.toLowerCase();
      
      
      return (
        name.includes(searchTermLowerCase) ||
        nic.includes(searchTermLowerCase) ||
        licenseNumber.includes(searchTermLowerCase) ||
        location.includes(searchTermLowerCase)
      );
    });
  }

  const searchedDrivers = searchDrivers(searchTerm);

  //generate report

  const generatePdf = () => {
    const doc = new jsPDF();

    const address = '123/A Pittugala, Malabe Srilanka'; // replace with your company address
        const contact = '+94 71 300-396';
        const email = 'tourgenie@gmail.com';

        doc.setFontSize(10);
        doc.text(address, 150, 15);
        doc.text(contact, 150, 20);
        doc.text(email, 150, 25);
    doc.setFontSize(16);
    doc.text("Employee Report", 80, 20);
  
    // Define table columns and rows
    const columns = ["Employee ID", "Name","Contact Number","Salery"];
    const rows = drivers.map(driver => [
      driver.empid,
      driver.name,
      driver.mobile_number,
       driver.dsalery

    ]);
  
    // Create the table
    doc.autoTable({
      startY: 30,
      headStyles: { fillColor: [0, 128, 255] },
      head: [columns],
      body: rows
    });
  
    
  
    
    doc.save("Report.pdf");
  };

  return (
    <div className="container">
      <h1>All drivers</h1>
      <Link to={`/add driver/`} className="btn btn-success my-3">
        <PersonAddIcon/>Add Driver
      </Link>
      <div className="form-group"><SearchIcon/>
        <input
          type="text"
          className="form-control"
          placeholder="Search by name, NIC, license number, or location"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} style={{width:'1700px'}}
        />
        
        


      </div>


      <table className='Drivers'>
      <thead class="tab" style={{backgroundColor:'#5091ca'}}>
  <tr>
            
            <th>Employee Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact Number</th>
            <th>NIC</th>
            <th>Gender</th>
            <th>Location</th>
            <th>License Number</th>
            <th>Expiration Date</th>
            <th>Photo</th>
            <th></th>
            
            
          </tr>
    
  </thead>
  <tbody>
  {searchedDrivers.map((driver, index) => (
            <tr key={index}>
              <td>{driver.empid}</td>
              <td>{driver.name}</td>
              <td>{driver.email}</td>
              <td>{driver.mobile_number}</td>
              <td>{driver.NIC}</td>
              <td>{driver.gender}</td>
              <td>{driver.location}</td>
              <td>{driver.license_number}</td>                       
              <td>{driver.lexpire_date}</td>
             

             
              <td ><Avatar alt="Remy Sharp" src={driver.image} sx={{ width: 60, height: 60 }}/></td> 


              <td>
              <Link to={`/edit driver/${driver._id}`} className='btn btn-success my-3'><ModeEditIcon/>edit</Link>
               
                <Link to={`/report driver/${driver._id}`} className='btn btn-success my-3'><VisibilityIcon/>View</Link>
                <button onClick={() => handleDelete(driver._id)}class="btn btn-success"><DeleteIcon/>Delete</button>

              



              </td>
            </tr>
          ))}
    
  </tbody>
</table>

<button className="btn btn-primary" onClick={generatePdf}>Generate PDF</button>




      
    </div>
  );
}

export default AllDriver;